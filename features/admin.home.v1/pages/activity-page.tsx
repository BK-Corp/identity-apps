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
import Dialog from "@oxygen-ui/react/Dialog";
import DialogActions from "@oxygen-ui/react/DialogActions";
import DialogContent from "@oxygen-ui/react/DialogContent";
import DialogTitle from "@oxygen-ui/react/DialogTitle";
import LinearProgress from "@oxygen-ui/react/LinearProgress";
import TextField from "@oxygen-ui/react/TextField";
import Table from "@oxygen-ui/react/Table";
import TableBody from "@oxygen-ui/react/TableBody";
import TableCell from "@oxygen-ui/react/TableCell";
import TableContainer from "@oxygen-ui/react/TableContainer";
import TableHead from "@oxygen-ui/react/TableHead";
import TableRow from "@oxygen-ui/react/TableRow";
import Typography from "@oxygen-ui/react/Typography";
import { AsgardeoSPAClient, HttpClientInstance, HttpResponse } from "@asgardeo/auth-react";
import { IdentifiableComponentInterface } from "@wso2is/core/models";
import { PageLayout } from "@wso2is/react-components";
import {
    Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts";
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
    target: string;
    store: string;
    requestType: string;
    message: string;
}

const RANGES: { hours: number; label: string }[] = [
    { hours: 1, label: "1 giờ" },
    { hours: 24, label: "24 giờ" },
    { hours: 168, label: "7 ngày" }
];

const CalendarRangeIcon: FunctionComponent = (): ReactElement => (
    <svg
        aria-hidden="true"
        fill="none"
        height="18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="18"
    >
        <rect height="17" rx="2" width="18" x="3" y="5" />
        <path d="M16 3v4M8 3v4M3 10h18" />
        <path d="m9 15 2 2 4-4" />
    </svg>
);

const httpClient: HttpClientInstance = AsgardeoSPAClient.getInstance()
    .httpRequest.bind(AsgardeoSPAClient.getInstance());


const RankBars: FunctionComponent<{ title: string; rows: [ string, number ][] }> = (
    { title, rows }: { title: string; rows: [ string, number ][] }
): ReactElement => {
    const top: number = Math.max(1, ...rows.map(([ , count ]: [ string, number ]) => count));

    return (
        <Card sx={ { flex: 1, minWidth: 280 } }>
            <CardContent>
                <Typography variant="subtitle1">{ title }</Typography>
                { rows.length === 0 && <Typography variant="body2" sx={ { mt: 1 } }>Chưa có dữ liệu</Typography> }
                { rows.map(([ name, count ]: [ string, number ]) => (
                    <Box key={ name } sx={ { mt: 1.5 } }>
                        <Box sx={ { display: "flex", justifyContent: "space-between", gap: 1 } }>
                            <Typography variant="body2" noWrap>{ name }</Typography>
                            <Typography variant="body2">{ count.toLocaleString("vi-VN") }</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={ (count / top) * 100 } sx={ { height: 8, borderRadius: 4 } } />
                    </Box>
                )) }
            </CardContent>
        </Card>
    );
};

const PAGE_SIZES: number[] = [ 10, 25, 50 ];

const EventsTable: FunctionComponent<{ events: ActivityEventInterface[] }> = (
    { events }: { events: ActivityEventInterface[] }
): ReactElement => {
    const [ page, setPage ] = useState<number>(0);
    const [ size, setSize ] = useState<number>(10);
    const [ open, setOpen ] = useState<string | null>(null);
    const pages: number = Math.max(1, Math.ceil(events.length / size));
    const current: number = Math.min(page, pages - 1);
    const rows: ActivityEventInterface[] = events.slice(current * size, (current + 1) * size);
    const heads: string[] = [ "Thời gian", "Hành động", "Kết quả", "Ứng dụng", "Tài khoản", "Đối tượng", "Kho tài khoản", "Giao thức" ];

    useEffect(() => { setPage(0); setOpen(null); }, [ events ]);

    return (
        <Card>
            <CardContent>
                <Typography variant="subtitle1">Nhật ký gốc ({ events.length.toLocaleString("vi-VN") } sự kiện đăng nhập/đăng xuất)</Typography>
                <TableContainer sx={ { mt: 1 } }>
                    <Table size="small">
                        <TableHead>
                            <TableRow>{ heads.map((h: string) => <TableCell key={ h } sx={ { fontWeight: 600 } }>{ h }</TableCell>) }</TableRow>
                        </TableHead>
                        <TableBody>
                            { rows.length === 0 && (
                                <TableRow><TableCell colSpan={ heads.length }>Không có sự kiện trong khoảng này</TableCell></TableRow>
                            ) }
                            { rows.map((e: ActivityEventInterface, i: number) => {
                                const key: string = `${ e.timestamp }-${ current }-${ i }`;

                                return (
                                    <React.Fragment key={ key }>
                                        <TableRow hover sx={ { cursor: "pointer" } } onClick={ () => setOpen(open === key ? null : key) }>
                                            <TableCell sx={ { whiteSpace: "nowrap" } }>{ new Date(e.timestamp).toLocaleString("vi-VN") }</TableCell>
                                            <TableCell>{ e.action }</TableCell>
                                            <TableCell sx={ { color: e.result === "Failure" ? "error.main" : "success.main" } }>
                                                { e.result }
                                            </TableCell>
                                            <TableCell>{ e.app }</TableCell>
                                            <TableCell>{ e.user }</TableCell>
                                            <TableCell>{ e.target }</TableCell>
                                            <TableCell>{ e.store }</TableCell>
                                            <TableCell>{ e.requestType }</TableCell>
                                        </TableRow>
                                        { open === key && (
                                            <TableRow>
                                                <TableCell colSpan={ heads.length } sx={ { bgcolor: "action.hover" } }>
                                                    <Box component="pre" sx={ { fontFamily: "monospace", fontSize: 12, m: 0, whiteSpace: "pre-wrap", wordBreak: "break-all" } }>
                                                        { e.message }
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        ) }
                                    </React.Fragment>
                                );
                            }) }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={ { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "flex-end", mt: 2 } }>
                    <Typography variant="body2">Số dòng mỗi trang:</Typography>
                    { PAGE_SIZES.map((n: number) => (
                        <Button key={ n } size="small" variant={ n === size ? "contained" : "outlined" } onClick={ () => { setSize(n); setPage(0); } }>
                            { n }
                        </Button>
                    )) }
                    <Typography variant="body2" sx={ { mx: 1 } }>Trang { current + 1 } / { pages }</Typography>
                    <Button size="small" variant="outlined" disabled={ current === 0 } onClick={ () => setPage(0) }>Đầu</Button>
                    <Button size="small" variant="outlined" disabled={ current === 0 } onClick={ () => setPage(current - 1) }>Trước</Button>
                    <Button size="small" variant="outlined" disabled={ current >= pages - 1 } onClick={ () => setPage(current + 1) }>Sau</Button>
                    <Button size="small" variant="outlined" disabled={ current >= pages - 1 } onClick={ () => setPage(pages - 1) }>Cuối</Button>
                </Box>
                <Typography variant="caption">Bấm vào một dòng để xem nguyên văn dòng log.</Typography>
            </CardContent>
        </Card>
    );
};

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
    const [ from, setFrom ] = useState<string>("");
    const [ to, setTo ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ updatedAt, setUpdatedAt ] = useState<Date | null>(null);
    const [ stats, setStats ] = useState<ActivityStatsInterface | null>(null);
    const [ failed, setFailed ] = useState<boolean>(false);
    const [ rangeOpen, setRangeOpen ] = useState<boolean>(false);
    const [ draftFrom, setDraftFrom ] = useState<string>("");
    const [ draftTo, setDraftTo ] = useState<string>("");

    // Khoảng tùy chọn chỉ có hiệu lực khi đủ cả hai đầu và đầu "Từ" trước đầu "Đến".
    const custom: boolean = from !== "" && to !== "" && new Date(from) < new Date(to);
    const query: string = custom
        ? `from=${ encodeURIComponent(new Date(from).toISOString()) }&to=${ encodeURIComponent(new Date(to).toISOString()) }`
        : `hours=${ hours }`;
    const draftValid: boolean = draftFrom !== "" && draftTo !== "" && new Date(draftFrom) < new Date(draftTo);

    const openRangeDialog: () => void = (): void => {
        setDraftFrom(from);
        setDraftTo(to);
        setRangeOpen(true);
    };

    const closeRangeDialog: () => void = (): void => setRangeOpen(false);

    const applyRange: () => void = (): void => {
        if (!draftValid) {
            return;
        }
        setFrom(draftFrom);
        setTo(draftTo);
        setRangeOpen(false);
    };

    const load: () => Promise<void> = useCallback(async (): Promise<void> => {
        setFailed(false);
        setLoading(true);
        try {
            const response: HttpResponse<ActivityStatsInterface> = await httpClient({
                headers: { Accept: "application/json" },
                method: "GET",
                url: `${ window[ "AppUtils" ]?.getConfig()?.serverOrigin }${ ACTIVITY_API_PATH }?${ query }`
            });

            setStats(response.data);
            setUpdatedAt(new Date());
        } catch {
            setStats(null);
            setFailed(true);
        } finally {
            setLoading(false);
        }
    }, [ query ]);

    useEffect(() => {
        void load();
    }, [ load ]);

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
                <Box sx={ { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "flex-end" } }>
                    { RANGES.map((range: { hours: number; label: string }) => (
                        <Button
                            key={ range.hours }
                            variant={ !custom && range.hours === hours ? "contained" : "outlined" }
                            onClick={ () => { setFrom(""); setTo(""); setHours(range.hours); } }
                            data-componentid={ `${ componentId }-range-${ range.hours }` }
                        >
                            { range.label }
                        </Button>
                    )) }
                    <Button
                        variant={ custom ? "contained" : "outlined" }
                        startIcon={ <CalendarRangeIcon /> }
                        onClick={ openRangeDialog }
                        data-componentid={ `${ componentId }-custom-range-trigger` }
                    >
                        Khoảng tùy chọn
                    </Button>
                    <Button
                        variant="outlined"
                        disabled={ loading }
                        onClick={ () => void load() }
                        data-componentid={ `${ componentId }-reload` }
                    >
                        { loading ? "Đang tải…" : "Tải lại" }
                    </Button>
                    { updatedAt && (
                        <Typography variant="body2">Cập nhật lúc { updatedAt.toLocaleTimeString("vi-VN") }</Typography>
                    ) }
                </Box>
                { failed && (
                    <Typography color="error">
                        Chưa xem được số liệu: hệ thống giám sát chưa kết nối hoặc bạn không có quyền quản trị.
                    </Typography>
                ) }
                <Dialog
                    open={ rangeOpen }
                    onClose={ closeRangeDialog }
                    fullWidth
                    maxWidth="xs"
                    data-componentid={ `${ componentId }-custom-range-dialog` }
                >
                    <DialogTitle>Chọn khoảng thời gian</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            fullWidth
                            size="small"
                            type="datetime-local"
                            label="Từ"
                            value={ draftFrom }
                            onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setDraftFrom(e.target.value) }
                            InputLabelProps={ { shrink: true } }
                            sx={ { mt: 1 } }
                            data-componentid={ `${ componentId }-custom-range-from` }
                        />
                        <TextField
                            fullWidth
                            size="small"
                            type="datetime-local"
                            label="Đến"
                            value={ draftTo }
                            onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setDraftTo(e.target.value) }
                            InputLabelProps={ { shrink: true } }
                            sx={ { mt: 2 } }
                            data-componentid={ `${ componentId }-custom-range-to` }
                        />
                        { !draftValid && (draftFrom !== "" || draftTo !== "") && (
                            <Typography color="error" variant="body2" sx={ { mt: 1 } }>
                                Cần chọn đủ cả hai mốc và mốc "Từ" phải trước mốc "Đến".
                            </Typography>
                        ) }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ closeRangeDialog }>Hủy</Button>
                        <Button
                            variant="contained"
                            disabled={ !draftValid }
                            onClick={ applyRange }
                            data-componentid={ `${ componentId }-custom-range-apply` }
                        >
                            Áp dụng
                        </Button>
                    </DialogActions>
                </Dialog>
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
                                Đăng nhập theo thời gian (mỗi cột { stats.interval })
                            </Typography>
                            <Box sx={ { height: 240, mt: 2 } }>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={ stats.timeline.map((p: ActivityPointInterface) => ({
                                            ...p,
                                            label: new Date(p.time).toLocaleString("vi-VN", {
                                                day: "2-digit", hour: "2-digit", minute: "2-digit", month: "2-digit"
                                            })
                                        })) }
                                    >
                                        <CartesianGrid strokeDasharray="3 3" vertical={ false } />
                                        <XAxis dataKey="label" minTickGap={ 24 } fontSize={ 12 } />
                                        <YAxis allowDecimals={ false } fontSize={ 12 } />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="loginSuccess" name="Thành công" stackId="a" fill="#2e7d32" />
                                        <Bar dataKey="loginFailure" name="Thất bại" stackId="a" fill="#d32f2f" />
                                        <Bar dataKey="logout" name="Đăng xuất" fill="#78909c" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Box>
                        </CardContent>
                    </Card>
                ) }
                { stats && (
                    <Box sx={ { display: "flex", flexWrap: "wrap", gap: 2 } }>
                        <RankBars
                            title={ `Ứng dụng đăng nhập nhiều nhất (trong ${ stats.sample } sự kiện gần nhất)` }
                            rows={ stats.topApps.map((a: { app: string; count: number }): [ string, number ] => [ a.app, a.count ]) }
                        />
                        <RankBars
                            title={ `Tài khoản đăng nhập nhiều nhất (trong ${ stats.sample } sự kiện gần nhất)` }
                            rows={ stats.topUsers.map((u: { user: string; count: number }): [ string, number ] => [ u.user, u.count ]) }
                        />
                    </Box>
                ) }
                { stats && <EventsTable events={ stats.events } /> }
            </Box>
        </PageLayout>
    );
};

export default ActivityPage;
