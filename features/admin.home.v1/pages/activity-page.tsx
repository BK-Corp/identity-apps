/**
 * Copyright (c) 2026, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Box from "@oxygen-ui/react/Box";
import Button from "@oxygen-ui/react/Button";
import Card from "@oxygen-ui/react/Card";
import CardContent from "@oxygen-ui/react/CardContent";
import Typography from "@oxygen-ui/react/Typography";
import { AsgardeoSPAClient, HttpClientInstance, HttpResponse } from "@asgardeo/auth-react";
import { IdentifiableComponentInterface } from "@wso2is/core/models";
import { PageLayout } from "@wso2is/react-components";
import React, { FunctionComponent, ReactElement, useCallback, useEffect, useState } from "react";

/**
 * The customer admin portal is served from the same origin as the Console (`/quantri`). Its API accepts the
 * Console access token for this one read-only endpoint. The URL must be absolute under `serverOrigin`, or the
 * SPA client refuses to attach the token.
 */
const ACTIVITY_API_PATH: string = "/quantri/api/admin/monitoring/auth";

interface ActivityPointInterface {
    time: string;
    loginSuccess: number;
    loginFailure: number;
    logout: number;
}

interface ActivityStatsInterface {
    hours: number;
    interval: string;
    totals: Omit<ActivityPointInterface, "time">;
    timeline: ActivityPointInterface[];
    sample: number;
    topApps: { app: string; count: number }[];
    topUsers: { user: string; count: number }[];
    events: ActivityEventInterface[];
}

interface ActivityEventInterface {
    timestamp: string;
    action: string;
    result: string;
    app: string;
    user: string;
    message: string;
}

const RANGES: { hours: number; label: string }[] = [
    { hours: 1, label: "1 giờ" },
    { hours: 24, label: "24 giờ" },
    { hours: 168, label: "7 ngày" }
];

const httpClient: HttpClientInstance = AsgardeoSPAClient.getInstance()
    .httpRequest.bind(AsgardeoSPAClient.getInstance());


const RankTable: FunctionComponent<{ title: string; head: string; rows: [ string, number ][] }> = (
    { title, head, rows }: { title: string; head: string; rows: [ string, number ][] }
): ReactElement => (
    <Card sx={ { flex: 1, minWidth: 280 } }>
        <CardContent>
            <Typography variant="subtitle1">{ title }</Typography>
            <Box component="table" sx={ { borderCollapse: "collapse", mt: 1, width: "100%" } }>
                <thead><tr><th align="left">{ head }</th><th align="right">Lượt</th></tr></thead>
                <tbody>
                    { rows.length === 0 && <tr><td colSpan={ 2 }>Chưa có dữ liệu</td></tr> }
                    { rows.map(([ name, count ]: [ string, number ]) => (
                        <tr key={ name }><td>{ name }</td><td align="right">{ count.toLocaleString("vi-VN") }</td></tr>
                    )) }
                </tbody>
            </Box>
        </CardContent>
    </Card>
);

/**
 * Replaces "Getting started": login/logout statistics from the log index, via the customer admin API.
 *
 * @param props - Props injected to the component.
 * @returns Activity dashboard page.
 */
const ActivityPage: FunctionComponent<IdentifiableComponentInterface> = (
    props: IdentifiableComponentInterface
): ReactElement => {
    const { ["data-componentid"]: componentId = "activity-page" } = props;

    const [ hours, setHours ] = useState<number>(24);
    const [ stats, setStats ] = useState<ActivityStatsInterface | null>(null);
    const [ failed, setFailed ] = useState<boolean>(false);

    const load: () => Promise<void> = useCallback(async (): Promise<void> => {
        setFailed(false);
        try {
            const response: HttpResponse<ActivityStatsInterface> = await httpClient({
                headers: { Accept: "application/json" },
                method: "GET",
                url: `${ window[ "AppUtils" ]?.getConfig()?.serverOrigin }${ ACTIVITY_API_PATH }?hours=${ hours }`
            });

            setStats(response.data);
        } catch {
            setStats(null);
            setFailed(true);
        }
    }, [ hours ]);

    useEffect(() => {
        void load();
    }, [ load ]);

    const max: number = Math.max(1, ...(stats?.timeline ?? []).map((p: ActivityPointInterface) =>
        p.loginSuccess + p.loginFailure));
    const attempts: number = (stats?.totals.loginSuccess ?? 0) + (stats?.totals.loginFailure ?? 0);
    const rate: string | undefined = stats === null ? undefined
        : attempts === 0 ? "—" : `${ Math.round((stats.totals.loginSuccess / attempts) * 1000) / 10 }%`;
    const cards: [ string, number | string | undefined ][] = [
        [ "Đăng nhập thành công", stats?.totals.loginSuccess ],
        [ "Đăng nhập thất bại", stats?.totals.loginFailure ],
        [ "Đăng xuất", stats?.totals.logout ],
        [ "Tỷ lệ đăng nhập thành công", rate ]
    ];

    return (
        <PageLayout
            pageTitle="Thống kê hoạt động"
            title="Thống kê hoạt động"
            description="Đăng nhập và đăng xuất của hệ thống, lấy từ nhật ký."
            data-componentid={ componentId }
        >
            <Box sx={ { display: "flex", flexDirection: "column", gap: 3 } }>
                <Box sx={ { display: "flex", flexWrap: "wrap", gap: 1 } }>
                    { RANGES.map((range: { hours: number; label: string }) => (
                        <Button
                            key={ range.hours }
                            variant={ range.hours === hours ? "contained" : "outlined" }
                            onClick={ () => setHours(range.hours) }
                            data-componentid={ `${ componentId }-range-${ range.hours }` }
                        >
                            { range.label }
                        </Button>
                    )) }
                </Box>
                { failed && (
                    <Typography color="error">
                        Chưa xem được số liệu: hệ thống giám sát chưa kết nối hoặc bạn không có quyền quản trị.
                    </Typography>
                ) }
                <Box sx={ { display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" } }>
                    { cards.map(([ title, count ]: [ string, number | string | undefined ]) => (
                        <Card key={ title }>
                            <CardContent>
                                <Typography variant="body2">{ title }</Typography>
                                <Typography variant="h4">
                                    { count === undefined ? "—" : count.toLocaleString("vi-VN") }
                                </Typography>
                            </CardContent>
                        </Card>
                    )) }
                </Box>
                { stats && (
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1">
                                Đăng nhập theo thời gian (mỗi cột { stats.interval }; xanh: thành công, đỏ: thất bại)
                            </Typography>
                            <Box sx={ { alignItems: "flex-end", display: "flex", gap: "2px", height: 160, mt: 2 } }>
                                { stats.timeline.map((p: ActivityPointInterface) => (
                                    <Box
                                        key={ p.time }
                                        sx={ { display: "flex", flex: 1, flexDirection: "column", height: "100%", justifyContent: "flex-end" } }
                                        title={ `${ new Date(p.time).toLocaleString("vi-VN") }: ${ p.loginSuccess } thành công, `
                                            + `${ p.loginFailure } thất bại, ${ p.logout } đăng xuất` }
                                    >
                                        <Box sx={ { bgcolor: "error.main", height: `${ (p.loginFailure / max) * 100 }%` } } />
                                        <Box sx={ { bgcolor: "success.main", height: `${ (p.loginSuccess / max) * 100 }%` } } />
                                    </Box>
                                )) }
                            </Box>
                        </CardContent>
                    </Card>
                ) }
                { stats && (
                    <Box sx={ { display: "flex", flexWrap: "wrap", gap: 2 } }>
                        <RankTable
                            title={ `Ứng dụng đăng nhập nhiều nhất (trong ${ stats.sample } sự kiện gần nhất)` }
                            head="Ứng dụng"
                            rows={ stats.topApps.map((a: { app: string; count: number }): [ string, number ] => [ a.app, a.count ]) }
                        />
                        <RankTable
                            title={ `Tài khoản đăng nhập nhiều nhất (trong ${ stats.sample } sự kiện gần nhất)` }
                            head="Tài khoản"
                            rows={ stats.topUsers.map((u: { user: string; count: number }): [ string, number ] => [ u.user, u.count ]) }
                        />
                    </Box>
                ) }
                { stats && (
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1">
                                Nhật ký gốc ({ stats.events.length } sự kiện đăng nhập/đăng xuất mới nhất)
                            </Typography>
                            <Box sx={ { maxHeight: 420, mt: 1, overflow: "auto" } }>
                                <Box component="table" sx={ { borderCollapse: "collapse", fontSize: 12, width: "100%" } }>
                                    <thead>
                                        <tr><th align="left">Thời gian</th><th align="left">Hành động</th>
                                            <th align="left">Kết quả</th><th align="left">Ứng dụng</th>
                                            <th align="left">Tài khoản</th><th align="left">Nội dung</th></tr>
                                    </thead>
                                    <tbody>
                                        { stats.events.length === 0 && <tr><td colSpan={ 6 }>Không có sự kiện trong khoảng này</td></tr> }
                                        { stats.events.map((e: ActivityEventInterface, i: number) => (
                                            <tr key={ `${ e.timestamp }-${ i }` } style={ { verticalAlign: "top" } }>
                                                <td style={ { whiteSpace: "nowrap" } }>{ new Date(e.timestamp).toLocaleString("vi-VN") }</td>
                                                <td>{ e.action }</td>
                                                <td style={ { color: e.result === "Failure" ? "#d32f2f" : undefined } }>{ e.result }</td>
                                                <td>{ e.app }</td>
                                                <td>{ e.user }</td>
                                                <td style={ { fontFamily: "monospace", wordBreak: "break-all" } }>{ e.message }</td>
                                            </tr>
                                        )) }
                                    </tbody>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ) }
            </Box>
        </PageLayout>
    );
};

export default ActivityPage;
