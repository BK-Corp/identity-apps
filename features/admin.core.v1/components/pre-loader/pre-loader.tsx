/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com).
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

import { Theme, styled } from "@mui/material/styles";
import Box from "@oxygen-ui/react/Box";
import { commonConfig } from "@wso2is/admin.extensions.v1";
import { resolveAppLogoFilePath } from "@wso2is/core/helpers";
import { IdentifiableComponentInterface } from "@wso2is/core/models";
import { StringUtils } from "@wso2is/core/utils";
import { ContentLoader } from "@wso2is/react-components";
import React, { FunctionComponent, ReactElement } from "react";
import { ReactComponent as Pulse } from "./pulse.svg";

const PulseLoader: typeof Box = styled(Box)(({ theme }: { theme: Theme }) => ({
    "& img, & svg": {
        animation: "app-pre-loader-pulse 2s ease-in-out infinite",
        height: theme.spacing(10),
        width: theme.spacing(10)
    },
    "& img": {
        height: "48px",
        width: "auto"
    },
    "@keyframes app-pre-loader-pulse": {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.5 }
    },
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
}));

/**
 * Pre loader component props interface.
 */
type PreLoaderPropsInterface = IdentifiableComponentInterface;

/**
 * Pre-Loader for the application.
 *
 * @param props - Props injected to the component.
 *
 * @returns Pre-Loader component.
 */
export const PreLoader: FunctionComponent<PreLoaderPropsInterface> = (
    props: PreLoaderPropsInterface
): ReactElement => {

    const {
        ["data-componentid"]: componentId
    } = props;

    // LGSP: show the configured brand logo (same source as the header) instead of the pulse icon.
    const appConfig: Record<string, any> = window[ "AppUtils" ]?.getConfig?.();
    const logoPath: string | undefined = appConfig?.ui?.appLogo?.defaultLogoPath ?? appConfig?.ui?.appLogoPath;
    const appBase: string = StringUtils.removeSlashesFromPath(appConfig?.appBaseWithProxy ?? "");
    const logo: string | undefined = logoPath && appConfig?.ui?.theme?.name
        ? resolveAppLogoFilePath(
            logoPath,
            `${ appConfig.clientOrigin }/${ appBase !== "" ? appBase + "/" : "" }libs/themes/${ appConfig.ui.theme.name }`
        )
        : undefined;

    return (
        <div className="pre-loader-wrapper" data-componentid={ `${componentId}-wrapper` }>
            { logo ? (
                <PulseLoader data-componentid={ componentId }>
                    <img src={ logo } alt="logo" style={ { height: "48px", width: "auto" } } />
                </PulseLoader>
            ) : commonConfig?.enableDefaultPreLoader ? (
                <ContentLoader data-componentid={ componentId } />
            ) : (
                <PulseLoader data-componentid={ componentId }>
                    <Pulse data-componentid={ `${componentId}-svg` } />
                </PulseLoader>
            ) }
        </div>
    );
};

/**
 * Default props for the component.
 */
PreLoader.defaultProps = {
    "data-componentid": "pre-loader"
};
