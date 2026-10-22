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

import { ConsoleNS } from "../../../models";

type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };

/**
 * Khung chính của Console (menu, header, thông báo chung). Chuỗi chưa dịch tự dùng lại bản en-US.
 */
/* eslint-disable max-len */
/* eslint-disable sort-keys */
export const console: DeepPartial<ConsoleNS> = {
    common: {
        advancedSearch: {
            form: {
                inputs: {
                    filterAttribute: {
                        label: "Thuộc tính lọc",
                        placeholder: "VD: Tên, Mô tả...",
                        validations: {
                            empty: "Thuộc tính lọc là bắt buộc."
                        }
                    },
                    filterCondition: {
                        label: "Điều kiện lọc",
                        placeholder: "VD: Bắt đầu bằng...",
                        validations: {
                            empty: "Điều kiện lọc là bắt buộc."
                        }
                    },
                    filterValue: {
                        label: "Giá trị lọc",
                        placeholder: "VD: admin, wso2...",
                        validations: {
                            empty: "Giá trị lọc là bắt buộc."
                        }
                    },
                    filterRecursiveToggle: {
                        label: "Tìm ở các cấp lồng nhau"
                    }
                }
            },
            hints: {
                querySearch: {
                    actionKeys: "Shift + Enter",
                    label: "Để tìm kiếm dạng truy vấn"
                }
            },
            options: {
                header: "Tìm kiếm nâng cao"
            },
            placeholder: "Tìm theo {{attribute}}",
            popups: {
                clear: "xóa tìm kiếm",
                dropdown: "Hiển thị tùy chọn"
            },
            resultsIndicator: "Kết quả cho truy vấn \"{{query}}\""
        },
        community: "Cộng đồng",
        cookieConsent: {
            confirmButton: "Đã hiểu",
            content: "Chúng tôi dùng cookie để bạn có trải nghiệm tốt nhất. Cookie giúp duy trì phiên làm việc liên tục " +
                "và cung cấp dịch vụ mượt mà, phù hợp với bạn. Tìm hiểu thêm trong <1>Chính sách cookie</1>."
        },
        dateTime: {
            humanizedDateString: "Chỉnh sửa lần cuối {{date}} trước"
        },
        dropdown: {
            footer: {
                privacyPolicy: "Quyền riêng tư",
                cookiePolicy: "Cookie",
                termsOfService: "Điều khoản"
            }
        },
        header: {
            appSwitch: {
                console: {
                    description: "Quản trị với vai trò nhà phát triển hoặc quản trị viên",
                    name: "Console"
                },
                myAccount: {
                    description: "Quản lý tài khoản của chính bạn",
                    name: "Tài khoản của tôi"
                },
                tooltip: "Ứng dụng"
            },
            organizationSwitch: {
                breadcrumbError: {
                    description: "Đã xảy ra lỗi khi tải cây tổ chức.",
                    message: "Đã xảy ra lỗi"
                },
                emptyOrgListMessage: "Không có tổ chức nào",
                orgSearchPlaceholder: "Tìm theo tên tổ chức"
            }
        },
        help: {
            communityLinks: {
                discord: "Hỏi trên Discord",
                stackOverflow: "Hỏi trên Stack Overflow"
            },
            docSiteLink: "Tài liệu",
            helpCenterLink: {
                title: "Liên hệ hỗ trợ",
                subtitle: "Trao đổi với đội ngũ {{productName}} để được hỗ trợ trực tiếp."
            },
            helpDropdownLink: "Trợ giúp"
        },
        modals: {
            editAvatarModal: {
                content: {
                    gravatar: {
                        errors: {
                            noAssociation: {
                                content: "Có vẻ email đã chọn chưa đăng ký trên Gravatar. Hãy đăng ký tại <1>trang chủ Gravatar</1> hoặc dùng một trong các cách sau.",
                                header: "Không tìm thấy ảnh Gravatar phù hợp!"
                            }
                        },
                        heading: "Gravatar theo "
                    },
                    hostedAvatar: {
                        heading: "Ảnh lưu trữ ngoài",
                        input: {
                            errors: {
                                http: {
                                    content: "URL đã chọn trỏ tới ảnh không an toàn (HTTP). Hãy cân nhắc trước khi tiếp tục.",
                                    header: "Nội dung không an toàn!"
                                },
                                invalid: {
                                    content: "Vui lòng nhập URL ảnh hợp lệ"
                                }
                            },
                            hint: "Nhập URL ảnh hợp lệ được lưu trữ ở nơi khác.",
                            placeholder: "Nhập URL của ảnh.",
                            warnings: {
                                dataURL: {
                                    content: "Dùng Data URL quá dài có thể gây lỗi cơ sở dữ liệu. Hãy cân nhắc trước khi tiếp tục.",
                                    header: "Hãy kiểm tra lại Data URL đã nhập!"
                                }
                            }
                        }
                    },
                    systemGenAvatars: {
                        heading: "Ảnh đại diện do hệ thống tạo",
                        types: {
                            initials: "Chữ cái đầu"
                        }
                    }
                },
                heading: "Cập nhật ảnh đại diện",
                primaryButton: "Lưu",
                secondaryButton: "Hủy"
            },
            sessionTimeoutModal: {
                description: "Khi bạn nhấn <1>Quay lại</1>, chúng tôi sẽ cố khôi phục phiên nếu còn. Nếu không còn phiên đăng nhập, bạn sẽ được chuyển về trang đăng nhập.",
                heading: "Có vẻ bạn đã không hoạt động trong một thời gian dài.",
                loginAgainButton: "Đăng nhập lại",
                primaryButton: "Quay lại",
                secondaryButton: "Đăng xuất",
                sessionTimedOutDescription: "Vui lòng đăng nhập lại để tiếp tục công việc.",
                sessionTimedOutHeading: "Phiên đăng nhập đã hết hạn do không hoạt động."
            }
        },
        placeholders: {
            404: {
                action: "Về trang chủ",
                subtitles: {
                    0: "Không tìm thấy trang bạn cần.",
                    1: "Vui lòng kiểm tra URL hoặc nhấn nút bên dưới để về trang chủ."
                },
                title: "Không tìm thấy trang"
            },
            accessDenied: {
                action: "Tiếp tục đăng xuất",
                subtitles: {
                    0: "Có vẻ bạn không có quyền dùng cổng này.",
                    1: "Vui lòng đăng nhập bằng tài khoản khác."
                },
                title: "Bạn không có quyền truy cập"
            },
            brokenPage: {
                action: "Tải lại trang",
                subtitles: {
                    0: "Đã xảy ra lỗi khi hiển thị trang này.",
                    1: "Xem console của trình duyệt để biết chi tiết kỹ thuật."
                },
                title: "Đã xảy ra lỗi"
            },
            consentDenied: {
                action: "Tiếp tục đăng xuất",
                subtitles: {
                    0: "Có vẻ bạn chưa đồng ý cho ứng dụng này.",
                    1: "Vui lòng đồng ý để sử dụng ứng dụng."
                },
                title: "Bạn đã từ chối đồng ý"
            },
            genericError: {
                action: "Tải lại trang",
                subtitles: {
                    0: "Đã xảy ra lỗi khi hiển thị trang này.",
                    1: "Xem console của trình duyệt để biết chi tiết kỹ thuật."
                },
                title: "Đã xảy ra lỗi"
            },
            loginError: {
                action: "Tiếp tục đăng xuất",
                subtitles: {
                    0: "Có vẻ bạn không có quyền dùng cổng này.",
                    1: "Vui lòng đăng nhập bằng tài khoản khác."
                },
                title: "Bạn không có quyền truy cập"
            },
            sessionStorageDisabled: {
                subtitles: {
                    0: "Để dùng ứng dụng này, bạn cần bật cookie trong cài đặt trình duyệt.",
                    1: "Xem phần trợ giúp của trình duyệt để biết cách bật cookie."
                },
                title: "Trình duyệt của bạn đang tắt cookie."
            },
            unauthorized: {
                action: "Tiếp tục đăng xuất",
                subtitles: {
                    0: "Có vẻ bạn không có quyền dùng cổng này.",
                    1: "Vui lòng đăng nhập bằng tài khoản khác."
                },
                title: "Bạn không có quyền truy cập"
            }
        },
        sidePanel: {
            privacy: "Quyền riêng tư",
            loginAndRegistration: {
                label: "Đăng nhập & Đăng ký",
                description: "Cấu hình đăng nhập và đăng ký."
            },
            userAttributesAndStores: "Thuộc tính & Kho người dùng",
            userManagement: "Quản lý danh tính",
            branding: "Thương hiệu",
            tenants: "Tổ chức gốc",
            policyAdministration: "Quản trị chính sách"
        },
        upgrade: "Nâng cấp",
        validations: {
            inSecureURL: {
                description: "URL đã nhập không dùng TLS. Hãy cân nhắc trước khi tiếp tục.",
                heading: "URL không an toàn"
            },
            unrecognizedURL: {
                description: "URL đã nhập không phải HTTP hoặc HTTPS. Hãy cân nhắc trước khi tiếp tục.",
                heading: "URL không nhận dạng được"
            }
        }
    },
    develop: {
        features: {
            sidePanel: {
                applicationEdit: "Sửa ứng dụng",
                applicationTemplates: "Mẫu ứng dụng",
                applications: "Ứng dụng",
                authenticationProviderEdit: "Sửa kết nối",
                authenticationProviderTemplates: "Mẫu kết nối",
                authenticationProviders: "Kết nối",
                categories: {
                    application: "Ứng dụng",
                    authenticationProviders: "Kết nối",
                    general: "Chung",
                    gettingStarted: "Bắt đầu",
                    identityProviders: "Kết nối",
                    identityVerificationProviders: "Nhà cung cấp xác minh danh tính",
                    extensions: "Tiện ích mở rộng"
                },
                customize: "Tùy chỉnh",
                flowExtensionEdit: "Sửa phần mở rộng luồng",
                identityProviderEdit: "Sửa kết nối",
                identityProviderTemplates: "Mẫu kết nối",
                identityProviders: "Kết nối",
                oidcScopes: "Scope",
                oidcScopesEdit: "Sửa scope",
                overview: "Tổng quan",
                remoteRepo: "Cấu hình kho từ xa",
                remoteRepoEdit: "Sửa cấu hình kho từ xa"
            }
        }
    },
    manage: {
        features: {
            sidePanel: {
                accountManagement: "Quản lý tài khoản",
                addEmailTemplate: "Thêm mẫu email",
                addEmailTemplateLocale: "Thêm ngôn ngữ cho mẫu email",
                approvals: "Phê duyệt",
                approvalWorkflows: "Quy trình phê duyệt",
                attributeDialects: "Thuộc tính",
                categories: {
                    attributes: "Thuộc tính người dùng",
                    certificates: "Chứng chỉ",
                    configurations: "Cấu hình",
                    general: "Chung",
                    organizations: "Quản lý tổ chức",
                    users: "Người dùng",
                    userstores: "Kho người dùng"
                },
                certificates: "Chứng chỉ",
                configurations: "Cấu hình",
                createApprovalWorkflows: "Tạo quy trình phê duyệt",
                editEmailTemplate: "Mẫu email",
                editExternalDialect: "Sửa ánh xạ thuộc tính",
                editGroups: "Sửa nhóm",
                editLocalClaims: "Sửa thuộc tính",
                editRoles: "Sửa vai trò",
                editUsers: "Sửa người dùng",
                editApprovalWorkflow: "Sửa quy trình phê duyệt",
                editUserstore: "Sửa kho người dùng",
                emailDomainDiscovery: "Khám phá tên miền email",
                emailTemplates: "Mẫu email",
                generalConfigurations: "Chung",
                groups: "Nhóm",
                localDialect: "Thuộc tính",
                loginAttemptsSecurity: "Bảo mật lần đăng nhập",
                multiFactorAuthenticators: "Xác thực đa yếu tố",
                organizations: "Tổ chức",
                otherSettings: "Cài đặt khác",
                overview: "Tổng quan",
                passwordPolicies: "Chính sách mật khẩu",
                remoteFetchConfig: "Cấu hình từ xa",
                roles: "Vai trò",
                userOnboarding: "Tiếp nhận người dùng",
                users: "Người dùng",
                userstoreTemplates: "Mẫu kho người dùng",
                userstores: "Kho người dùng"
            }
        }
    }
};
