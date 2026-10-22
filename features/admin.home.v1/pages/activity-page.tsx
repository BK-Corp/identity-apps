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
import Typography from "@oxygen-ui/react/Typography";
import { IdentifiableComponentInterface } from "@wso2is/core/models";
import { PageLayout } from "@wso2is/react-components";
import React, { FunctionComponent, ReactElement } from "react";

/**
 * Where the activity dashboard lives. The customer admin portal is served from the same origin as the
 * Console (`/quantri`), so the existing IS session signs the user in without another prompt.
 */
const ACTIVITY_DASHBOARD_PATH: string = "/quantri/monitoring";

/**
 * Landing page replacing "Getting started": points admins to the login/logout activity dashboard.
 *
 * @param props - Props injected to the component.
 * @returns Activity landing page.
 */
const ActivityPage: FunctionComponent<IdentifiableComponentInterface> = (
    props: IdentifiableComponentInterface
): ReactElement => {
    const { ["data-componentid"]: componentId = "activity-page" } = props;

    return (
        <PageLayout
            pageTitle={ "Thống kê hoạt động" }
            title={ "Thống kê hoạt động" }
            description={ "Theo dõi nhật ký, đăng nhập và đăng xuất của hệ thống." }
            data-componentid={ componentId }
        >
            <Box sx={ { display: "flex", flexDirection: "column", gap: 2, maxWidth: 560 } }>
                <Typography>{ "Bảng thống kê lấy từ nhật ký của hệ thống: số lượt đăng nhập thành công, thất bại, đăng xuất và các dòng nhật ký gần đây. Chỉ quản trị viên xem được." }</Typography>
                <Box>
                    <Button
                        variant="contained"
                        href={ ACTIVITY_DASHBOARD_PATH }
                        data-componentid={ `${ componentId }-open-dashboard` }
                    >
                        { "Mở bảng thống kê" }
                    </Button>
                </Box>
            </Box>
        </PageLayout>
    );
};

export default ActivityPage;
