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

import { MyAccountNS } from "../../../models";

/* eslint-disable max-len */
export const myAccount: MyAccountNS = {
    components: {
        accountRecovery: {
            SMSRecovery: {
                descriptions: {
                    add: "Thêm hoặc cập nhật số điện thoại khôi phục.",
                    emptyMobile: "Bạn cần cấu hình số điện thoại để khôi phục bằng mã OTP qua SMS.",
                    update: "Cập nhật số điện thoại khôi phục ({{mobile}})",
                    view: "Xem số điện thoại khôi phục ({{mobile}})"
                },
                forms: {
                    mobileResetForm: {
                        inputs: {
                            mobile: {
                                label: "Số điện thoại di động",
                                placeholder: "Nhập số điện thoại khôi phục.",
                                validations: {
                                    empty: "Nhập số điện thoại di động.",
                                    invalidFormat: "Định dạng số điện thoại không hợp lệ."
                                }
                            }
                        }
                    }
                },
                heading: "Khôi phục qua SMS",
                notifications: {
                    updateMobile: {
                        error: {
                            description: "{{description}}",
                            message: "Lỗi khi cập nhật số điện thoại khôi phục."
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi cập nhật số điện thoại khôi phục",
                            message: "Đã xảy ra lỗi"
                        },
                        success: {
                            description: "Đã cập nhật số điện thoại trong hồ sơ người dùng",
                            message: "Cập nhật số điện thoại thành công"
                        }
                    }
                }
            },
            codeRecovery: {
                descriptions: {
                    add: "Thêm hoặc cập nhật tùy chọn khôi phục bằng mã"
                },
                heading: "Khôi phục bằng mã"
            },
            emailRecovery: {
                descriptions: {
                    add: "Thêm hoặc cập nhật địa chỉ email khôi phục",
                    emptyEmail: "Bạn cần cấu hình địa chỉ email để khôi phục qua email.",
                    update: "Cập nhật địa chỉ email khôi phục ({{email}})",
                    view: "Xem địa chỉ email khôi phục ({{email}})"
                },
                forms: {
                    emailResetForm: {
                        inputs: {
                            email: {
                                label: "Địa chỉ email",
                                placeholder: "Nhập địa chỉ email khôi phục",
                                validations: {
                                    empty: "Nhập địa chỉ email",
                                    invalidFormat: "Định dạng địa chỉ email không hợp lệ"
                                }
                            }
                        }
                    }
                },
                heading: "Khôi phục qua email",
                notifications: {
                    updateEmail: {
                        error: {
                            description: "{{description}}",
                            message: "Lỗi khi cập nhật email khôi phục"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi cập nhật email khôi phục",
                            message: "Đã xảy ra lỗi"
                        },
                        success: {
                            description: "Đã cập nhật địa chỉ email trong hồ sơ người dùng",
                            message: "Cập nhật địa chỉ email thành công"
                        }
                    }
                }
            },
            preference: {
                notifications: {
                    error: {
                        description: "{{description}}",
                        message: "Lỗi khi tải tùy chọn khôi phục"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi tải tùy chọn khôi phục",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã tải tùy chọn khôi phục",
                        message: "Tải tùy chọn khôi phục thành công"
                    }
                }
            },
            questionRecovery: {
                descriptions: {
                    add: "Thêm hoặc cập nhật câu hỏi bảo mật để khôi phục tài khoản"
                },
                forms: {
                    securityQuestionsForm: {
                        inputs: {
                            answer: {
                                label: "Câu trả lời",
                                placeholder: "Nhập câu trả lời của bạn",
                                validations: {
                                    empty: "Câu trả lời là trường bắt buộc"
                                }
                            },
                            question: {
                                label: "Câu hỏi",
                                placeholder: "Chọn câu hỏi bảo mật",
                                validations: {
                                    empty: "Phải chọn ít nhất một câu hỏi bảo mật"
                                }
                            }
                        }
                    }
                },
                heading: "Câu hỏi bảo mật",
                notifications: {
                    addQuestions: {
                        error: {
                            description: "{{description}}",
                            message: "Đã xảy ra lỗi khi thêm câu hỏi bảo mật"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi thêm câu hỏi bảo mật",
                            message: "Đã xảy ra lỗi."
                        },
                        success: {
                            description: "Đã thêm các câu hỏi bảo mật cần thiết",
                            message: "Thêm câu hỏi bảo mật thành công"
                        }
                    },
                    updateQuestions: {
                        error: {
                            description: "{{description}}",
                            message: "Lỗi khi cập nhật câu hỏi bảo mật"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi cập nhật câu hỏi bảo mật",
                            message: "Đã xảy ra lỗi."
                        },
                        success: {
                            description: "Đã cập nhật các câu hỏi bảo mật cần thiết",
                            message: "Cập nhật câu hỏi bảo mật thành công"
                        }
                    }
                }
            }
        },
        advancedSearch: {
            form: {
                inputs: {
                    filterAttribute: {
                        label: "Thuộc tính lọc",
                        placeholder: "Ví dụ: Tên, Mô tả, v.v.",
                        validations: {
                            empty: "Thuộc tính lọc là trường bắt buộc."
                        }
                    },
                    filterCondition: {
                        label: "Điều kiện lọc",
                        placeholder: "Ví dụ: Bắt đầu bằng, v.v.",
                        validations: {
                            empty: "Điều kiện lọc là trường bắt buộc."
                        }
                    },
                    filterValue: {
                        label: "Giá trị lọc",
                        placeholder: "Ví dụ: admin, wso2, v.v.",
                        validations: {
                            empty: "Giá trị lọc là trường bắt buộc."
                        }
                    }
                }
            },
            hints: {
                querySearch: {
                    actionKeys: "Shift + Enter",
                    label: "Để tìm kiếm theo truy vấn"
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
        applications: {
            advancedSearch: {
                form: {
                    inputs: {
                        filterAttribute: {
                            placeholder: "Ví dụ: Tên, Mô tả, v.v."
                        },
                        filterCondition: {
                            placeholder: "Ví dụ: Bắt đầu bằng, v.v."
                        },
                        filterValue: {
                            placeholder: "Nhập giá trị cần tìm"
                        }
                    }
                },
                placeholder: "Tìm theo tên ứng dụng"
            },
            all: {
                heading: "Tất cả ứng dụng"
            },
            favourite: {
                heading: "Yêu thích"
            },
            notifications: {
                fetchApplications: {
                    error: {
                        description: "{{description}}",
                        message: "Lỗi khi tải ứng dụng"
                    },
                    genericError: {
                        description: "Không thể tải ứng dụng",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã tải các ứng dụng.",
                        message: "Tải ứng dụng thành công"
                    }
                }
            },
            placeholders: {
                emptyList: {
                    action: "Làm mới danh sách",
                    subtitles: {
                        "0": "Danh sách ứng dụng trống.",
                        "1": "Có thể không có ứng dụng nào được bật chế độ cho phép tìm thấy.",
                        "2": "Vui lòng yêu cầu quản trị viên bật chế độ cho phép tìm thấy ứng dụng."
                    },
                    title: "Không có ứng dụng"
                }
            },
            recent: {
                heading: "Ứng dụng gần đây"
            }
        },
        changePassword: {
            forms: {
                passwordResetForm: {
                    inputs: {
                        confirmPassword: {
                            label: "Xác nhận mật khẩu",
                            placeholder: "Nhập mật khẩu mới",
                            validations: {
                                empty: "Xác nhận mật khẩu là trường bắt buộc",
                                mismatch: "Mật khẩu xác nhận không khớp"
                            }
                        },
                        currentPassword: {
                            label: "Mật khẩu hiện tại",
                            placeholder: "Nhập mật khẩu hiện tại",
                            validations: {
                                empty: "Mật khẩu hiện tại là trường bắt buộc",
                                invalid: "Mật khẩu hiện tại không hợp lệ"
                            }
                        },
                        newPassword: {
                            label: "Mật khẩu mới",
                            placeholder: "Nhập mật khẩu mới",
                            validations: {
                                empty: "Mật khẩu mới là trường bắt buộc"
                            }
                        }
                    },
                    validations: {
                        genericError: {
                            description: "Đã xảy ra lỗi. Vui lòng thử lại",
                            message: "Lỗi đổi mật khẩu"
                        },
                        invalidCurrentPassword: {
                            description: "Mật khẩu hiện tại bạn nhập không hợp lệ. Vui lòng thử lại",
                            message: "Lỗi đổi mật khẩu"
                        },
                        invalidNewPassword: {
                            description: "Mật khẩu không đáp ứng các yêu cầu bắt buộc.",
                            message: "Mật khẩu không hợp lệ"
                        },
                        passwordCaseRequirement: "Ít nhất {{minUpperCase}} chữ hoa và {{minLowerCase}} chữ thường",
                        passwordCharRequirement: "Ít nhất {{minSpecialChr}} ký tự đặc biệt",
                        passwordLengthRequirement: "Phải có từ {{min}} đến {{max}} ký tự",
                        passwordLowerCaseRequirement: "Ít nhất {{minLowerCase}} chữ thường",
                        passwordNumRequirement: "Ít nhất {{min}} chữ số",
                        passwordRepeatedChrRequirement: "Không quá {{repeatedChr}} ký tự lặp lại",
                        passwordUniqueChrRequirement: "Ít nhất {{uniqueChr}} ký tự khác nhau",
                        passwordUpperCaseRequirement: "Ít nhất {{minUpperCase}} chữ hoa",
                        submitError: {
                            description: "{{description}}",
                            message: "Lỗi đổi mật khẩu"
                        },
                        submitSuccess: {
                            description: "Đã đổi mật khẩu",
                            message: "Đặt lại mật khẩu thành công"
                        },
                        validationConfig: {
                            error: {
                                description: "{{description}}",
                                message: "Lỗi tải dữ liệu"
                            },
                            genericError: {
                                description: "Không thể tải dữ liệu cấu hình xác thực hợp lệ.",
                                message: "Đã xảy ra lỗi"
                            }
                        }
                    }
                }
            },
            modals: {
                confirmationModal: {
                    heading: "Xác nhận",
                    message: "Việc cập nhật mật khẩu có thể đăng xuất bạn khỏi mọi ứng dụng. Nếu bị đăng xuất, vui lòng đăng nhập lại bằng mật khẩu mới. Bạn có muốn tiếp tục không?"
                }
            }
        },
        consentManagement: {
            editConsent: {
                collectionMethod: "Phương thức thu thập",
                dangerZones: {
                    revoke: {
                        actionTitle: "Thu hồi",
                        header: "Thu hồi sự đồng ý",
                        subheader: "Bạn sẽ cần đồng ý lại cho ứng dụng này."
                    }
                },
                description: "Mô tả",
                piiCategoryHeading: "Quản lý sự đồng ý cho việc thu thập và chia sẻ thông tin cá nhân của bạn với ứng dụng. Bỏ chọn các thuộc tính muốn thu hồi rồi nhấn Cập nhật để lưu thay đổi, hoặc nhấn Thu hồi để rút lại sự đồng ý cho mọi thuộc tính.",
                state: "Trạng thái",
                version: "Phiên bản"
            },
            modals: {
                consentRevokeModal: {
                    heading: "Bạn có chắc chắn không?",
                    message: "Không thể hoàn tác thao tác này. Sự đồng ý cho mọi thuộc tính sẽ bị thu hồi vĩnh viễn. Bạn có chắc chắn muốn tiếp tục không?",
                    warning: "Bạn sẽ được chuyển đến trang đồng ý khi đăng nhập"
                }
            },
            notifications: {
                consentReceiptFetch: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi"
                    },
                    genericError: {
                        description: "Không thể tải thông tin về ứng dụng đã chọn",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã tải biên nhận đồng ý",
                        message: "Tải dữ liệu thành công"
                    }
                },
                consentedAppsFetch: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi"
                    },
                    genericError: {
                        description: "Không thể tải danh sách ứng dụng đã được đồng ý",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã tải danh sách ứng dụng đã được đồng ý",
                        message: "Tải dữ liệu thành công"
                    }
                },
                revokeConsentedApp: {
                    error: {
                        description: "{{description}}",
                        message: "Lỗi thu hồi sự đồng ý"
                    },
                    genericError: {
                        description: "Không thể thu hồi sự đồng ý cho ứng dụng",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã thu hồi sự đồng ý cho ứng dụng",
                        message: "Thu hồi sự đồng ý thành công"
                    }
                },
                updateConsentedClaims: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi"
                    },
                    genericError: {
                        description: "Không thể cập nhật các thuộc tính đã đồng ý chia sẻ cho ứng dụng",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã cập nhật các thuộc tính đồng ý chia sẻ cho ứng dụng",
                        message: "Cập nhật thuộc tính đồng ý chia sẻ thành công"
                    }
                }
            }
        },
        policyConsentManagement: {
            consentedOnLabel: "Đồng ý vào",
            dangerZones: {
                revoke: {
                    actionTitle: "Thu hồi",
                    header: "Thu hồi sự đồng ý với chính sách",
                    subheader: "Thao tác này sẽ thu hồi sự đồng ý của bạn với chính sách này. Bạn có thể được yêu cầu đồng ý lại vào lần truy cập dịch vụ tiếp theo."
                }
            },
            notifications: {
                fetch: {
                    error: {
                        description: "Đã xảy ra lỗi khi tải các chính sách bạn đã đồng ý.",
                        message: "Tải dữ liệu thất bại"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi tải các chính sách bạn đã đồng ý.",
                        message: "Tải dữ liệu thất bại"
                    },
                    success: {
                        description: "Đã tải các chính sách bạn đã đồng ý.",
                        message: "Tải dữ liệu thành công"
                    }
                },
                revoke: {
                    error: {
                        description: "Đã xảy ra lỗi khi thu hồi sự đồng ý với chính sách.",
                        message: "Thu hồi thất bại"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi thu hồi sự đồng ý với chính sách.",
                        message: "Thu hồi thất bại"
                    },
                    success: {
                        description: "Đã thu hồi sự đồng ý với chính sách.",
                        message: "Đã thu hồi sự đồng ý"
                    }
                }
            },
            policyUrlLabel: "Xem chính sách",
            versionLabel: "Phiên bản {{version}}"
        },
        preferenceManagement: {
            consentedOnLabel: "Đồng ý vào",
            elementsHeading: "Quản lý tùy chọn liên lạc. Bỏ chọn các thuộc tính muốn thu hồi rồi nhấn Cập nhật để lưu thay đổi, hoặc nhấn Thu hồi để rút lại sự đồng ý cho mọi thuộc tính.",
            dangerZones: {
                revoke: {
                    actionTitle: "Thu hồi",
                    header: "Thu hồi tùy chọn liên lạc",
                    subheader: "Thao tác này sẽ thu hồi sự đồng ý của bạn với tùy chọn liên lạc này."
                }
            },
            notifications: {
                fetch: {
                    error: {
                        description: "Đã xảy ra lỗi khi tải tùy chọn liên lạc của bạn.",
                        message: "Tải dữ liệu thất bại"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi tải tùy chọn liên lạc của bạn.",
                        message: "Tải dữ liệu thất bại"
                    },
                    success: {
                        description: "Đã tải tùy chọn liên lạc của bạn.",
                        message: "Tải dữ liệu thành công"
                    }
                },
                revoke: {
                    error: {
                        description: "Đã xảy ra lỗi khi thu hồi tùy chọn liên lạc.",
                        message: "Thu hồi thất bại"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi thu hồi tùy chọn liên lạc.",
                        message: "Thu hồi thất bại"
                    },
                    success: {
                        description: "Đã thu hồi tùy chọn liên lạc.",
                        message: "Đã thu hồi tùy chọn"
                    }
                },
                update: {
                    error: {
                        description: "Đã xảy ra lỗi khi cập nhật tùy chọn liên lạc.",
                        message: "Cập nhật thất bại"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi cập nhật tùy chọn liên lạc.",
                        message: "Cập nhật thất bại"
                    },
                    success: {
                        description: "Đã cập nhật tùy chọn liên lạc của bạn.",
                        message: "Đã cập nhật tùy chọn"
                    }
                }
            },
            policyUrlLabel: "Xem chính sách",
            versionLabel: "Phiên bản {{version}}"
        },
        cookieConsent: {
            confirmButton: "Đã hiểu",
            content: "Chúng tôi sử dụng cookie để mang đến trải nghiệm tốt nhất. Cookie giúp duy trì phiên liên tục và cung cấp dịch vụ mượt mà, phù hợp với bạn. Để tìm hiểu cách chúng tôi sử dụng cookie, hãy xem <1>Chính sách cookie</1>."
        },
        federatedAssociations: {
            deleteConfirmation: "Thao tác này sẽ gỡ tài khoản mạng xã hội đã liên kết khỏi tài khoản cục bộ. Bạn có muốn tiếp tục không?",
            notifications: {
                getFederatedAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi"
                    },
                    genericError: {
                        description: "Không thể tải các tài khoản mạng xã hội đã liên kết",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã tải các tài khoản mạng xã hội đã liên kết",
                        message: "Tải tài khoản mạng xã hội đã liên kết thành công"
                    }
                },
                removeAllFederatedAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi"
                    },
                    genericError: {
                        description: "Không thể gỡ các tài khoản mạng xã hội đã liên kết",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã gỡ mọi tài khoản mạng xã hội đã liên kết",
                        message: "Gỡ tài khoản mạng xã hội đã liên kết thành công"
                    }
                },
                removeFederatedAssociation: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi"
                    },
                    genericError: {
                        description: "Không thể gỡ tài khoản mạng xã hội đã liên kết",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã gỡ tài khoản mạng xã hội đã liên kết",
                        message: "Gỡ tài khoản mạng xã hội đã liên kết thành công"
                    }
                }
            }
        },
        footer: {
            copyright: "WSO2 Identity Server © {{year}}"
        },
        header: {
            appSwitch: {
                console: {
                    description: "Quản lý dành cho nhà phát triển hoặc quản trị viên",
                    name: "Bảng điều khiển"
                },
                myAccount: {
                    description: "Quản lý tài khoản của bạn",
                    name: "Tài khoản của tôi"
                },
                tooltip: "Ứng dụng"
            },
            dropdown: {
                footer: {
                    cookiePolicy: "Cookie",
                    privacyPolicy: "Quyền riêng tư",
                    termsOfService: "Điều khoản"
                }
            },
            organizationLabel: "Tài khoản này được quản lý bởi"
        },
        linkedAccounts: {
            accountTypes: {
                local: {
                    label: "Thêm tài khoản người dùng cục bộ"
                }
            },
            deleteConfirmation: "Thao tác này sẽ gỡ tài khoản đã liên kết khỏi tài khoản của bạn. Bạn có muốn tiếp tục không?",
            forms: {
                addAccountForm: {
                    inputs: {
                        password: {
                            label: "Mật khẩu",
                            placeholder: "Nhập mật khẩu",
                            validations: {
                                empty: "Mật khẩu là trường bắt buộc"
                            }
                        },
                        username: {
                            label: "Tên đăng nhập",
                            placeholder: "Nhập tên đăng nhập",
                            validations: {
                                empty: "Tên đăng nhập là trường bắt buộc"
                            }
                        }
                    }
                }
            },
            notifications: {
                addAssociation: {
                    error: {
                        description: "{{description}}",
                        message: "Lỗi khi tải tài khoản người dùng đã liên kết"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi thêm tài khoản liên kết",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã thêm tài khoản người dùng liên kết được yêu cầu",
                        message: "Thêm tài khoản người dùng liên kết thành công"
                    }
                },
                getAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "Lỗi khi tải tài khoản người dùng đã liên kết"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi tải tài khoản người dùng đã liên kết",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã tải thông tin hồ sơ người dùng được yêu cầu",
                        message: "Tải tài khoản người dùng liên kết thành công"
                    }
                },
                removeAllAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "Lỗi khi gỡ tài khoản người dùng đã liên kết"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi gỡ tài khoản người dùng đã liên kết",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã gỡ mọi tài khoản người dùng đã liên kết",
                        message: "Gỡ tài khoản liên kết thành công"
                    }
                },
                removeAssociation: {
                    error: {
                        description: "{{description}}",
                        message: "Lỗi khi gỡ tài khoản người dùng liên kết"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi gỡ tài khoản người dùng liên kết",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã gỡ các tài khoản người dùng đã liên kết",
                        message: "Gỡ tài khoản liên kết thành công"
                    }
                },
                switchAccount: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi khi chuyển tài khoản"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi chuyển tài khoản",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã chuyển tài khoản",
                        message: "Chuyển tài khoản thành công"
                    }
                }
            }
        },
        loginVerifyData: {
            description: "Dữ liệu này được dùng để xác minh thêm danh tính của bạn khi đăng nhập",
            heading: "Dữ liệu dùng để xác minh lần đăng nhập",
            modals: {
                clearTypingPatternsModal: {
                    heading: "Xác nhận",
                    message: "Thao tác này sẽ xóa mẫu gõ phím đã lưu trong TypingDNA. Bạn có muốn tiếp tục không?"
                }
            },
            notifications: {
                clearTypingPatterns: {
                    error: {
                        description: "Không thể xóa mẫu gõ phím. Vui lòng liên hệ quản trị viên",
                        message: "Xóa mẫu gõ phím thất bại"
                    },
                    success: {
                        description: "Đã xóa mẫu gõ phím của bạn trong TypingDNA",
                        message: "Xóa mẫu gõ phím thành công"
                    }
                }
            },
            typingdna: {
                description: "Bạn có thể xóa mẫu gõ phím tại đây",
                heading: "Mẫu gõ phím TypingDNA"
            }
        },
        mfa: {
            authenticatorApp: {
                addHint: "Cấu hình",
                configuredDescription: "Bạn có thể dùng mã TOTP từ ứng dụng xác thực đã cấu hình để xác thực hai yếu tố. Nếu không truy cập được ứng dụng, bạn có thể thiết lập ứng dụng xác thực mới tại đây.",
                deleteHint: "Gỡ bỏ",
                description: "Bạn có thể dùng ứng dụng xác thực để nhận mã xác minh cho xác thực hai yếu tố.",
                enableHint: "Bật/tắt xác thực TOTP",
                heading: "Xác thực TOTP",
                hint: "Xem",
                modals: {
                    delete: {
                        heading: "Xác nhận",
                        message: "Thao tác này sẽ xóa mã QR đã thêm vào hồ sơ của bạn. Bạn có muốn tiếp tục không?"
                    },
                    done: "Thành công! Giờ đây bạn có thể dùng ứng dụng xác thực để xác thực hai yếu tố",
                    heading: "Thiết lập ứng dụng xác thực",
                    scan: {
                        additionNote: "Đã thêm mã QR vào hồ sơ của bạn!",
                        authenticatorApps: "Ứng dụng xác thực",
                        copiedToClipboard: "Đã sao chép!",
                        copyToClipboard: "Sao chép",
                        generate: "Tạo mã mới",
                        heading: "Quét mã QR bên dưới bằng ứng dụng xác thực",
                        hideSecretKey: "Ẩn khóa bí mật",
                        manualEntryLabel: "Nhập mã thủ công",
                        messageBody: "Bạn có thể xem danh sách ứng dụng xác thực tại đây.",
                        messageHeading: "Bạn chưa cài ứng dụng xác thực?",
                        regenerateConfirmLabel: "Xác nhận tạo mã QR mới",
                        regenerateWarning: {
                            extended: "Khi tạo mã QR mới, bạn phải quét và thiết lập lại ứng dụng xác thực. Bạn sẽ không thể đăng nhập bằng mã QR cũ nữa.",
                            generic: "Khi tạo mã QR mới, bạn phải quét và thiết lập lại ứng dụng xác thực. Thiết lập cũ sẽ không còn hoạt động."
                        },
                        showSecretKey: "Hiện khóa bí mật"
                    },
                    toolTip: "Bạn chưa có ứng dụng xác thực? Hãy tải ứng dụng như Google Authenticator từ <1>App Store</1> hoặc <3>Google Play</3>",
                    verify: {
                        error: "Xác minh thất bại. Vui lòng thử lại.",
                        heading: "Nhập mã được tạo để xác minh",
                        label: "Mã xác minh",
                        placeholder: "Nhập mã xác minh của bạn",
                        reScan: "Quét lại",
                        reScanQuestion: "Bạn muốn quét lại mã QR?",
                        requiredError: "Nhập mã xác minh"
                    }
                },
                notifications: {
                    deleteError: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi xóa mã QR",
                            message: "Đã xảy ra lỗi"
                        }
                    },
                    deleteSuccess: {
                        genericMessage: "Đã gỡ bỏ",
                        message: "Đã gỡ cấu hình TOTP."
                    },
                    initError: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi tải mã QR",
                            message: "Đã xảy ra lỗi"
                        }
                    },
                    refreshError: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi lấy mã QR mới",
                            message: "Đã xảy ra lỗi"
                        }
                    },
                    updateAuthenticatorError: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi cập nhật danh sách phương thức xác thực đã bật",
                            message: "Đã xảy ra lỗi"
                        }
                    }
                },
                regenerate: "Tạo lại"
            },
            backupCode: {
                actions: {
                    add: "Thêm mã dự phòng",
                    delete: "Xóa mã dự phòng"
                },
                description: "Dùng mã dự phòng để truy cập tài khoản khi không thể nhận mã xác thực đa yếu tố. Bạn có thể tạo bộ mã mới khi cần.",
                download: {
                    heading: "Mã dự phòng cho {{productName}}",
                    info1: "Mỗi mã dự phòng chỉ dùng được một lần.",
                    info2: "Các mã này được tạo vào ",
                    subHeading: "Bạn có thể dùng các mã dự phòng này để đăng nhập {{productName}} khi không có điện thoại bên mình. Hãy cất giữ mã ở nơi an toàn và thuận tiện khi cần."
                },
                heading: "Mã dự phòng",
                messages: {
                    disabledMessage: "Bạn cần cấu hình thêm ít nhất một phương thức xác thực để bật mã dự phòng."
                },
                modals: {
                    actions: {
                        copied: "Đã sao chép",
                        copy: "Sao chép mã",
                        download: "Tải mã xuống",
                        regenerate: "Tạo lại"
                    },
                    delete: {
                        description: "Thao tác này sẽ xóa mã dự phòng và bạn không thể tiếp tục sử dụng chúng. Bạn có muốn tiếp tục không?",
                        heading: "Xác nhận"
                    },
                    description: "Dùng mã dự phòng để đăng nhập khi không có điện thoại bên mình.",
                    generate: {
                        description: "Bạn đã dùng hết mã dự phòng. Hãy tạo một bộ mã mới",
                        heading: "Tạo"
                    },
                    heading: "Mã dự phòng",
                    info: "Mỗi mã chỉ dùng được một lần. Bạn có thể tạo mã mới bất kỳ lúc nào để thay thế các mã này.",
                    regenerate: {
                        description: "Sau khi tạo mã mới, các mã cũ sẽ không còn hoạt động. Hãy lưu lại các mã mới ngay khi được tạo.",
                        heading: "Xác nhận"
                    },
                    subHeading: "Mã dùng một lần để đăng nhập",
                    warn: "Các mã này chỉ xuất hiện một lần. Hãy lưu ngay và cất giữ ở nơi an toàn, thuận tiện khi cần."
                },
                mutedHeader: "Tùy chọn khôi phục",
                notifications: {
                    deleteError: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi xóa mã dự phòng",
                            message: "Đã xảy ra lỗi"
                        }
                    },
                    deleteSuccess: {
                        genericMessage: "Đã gỡ bỏ",
                        message: "Đã xóa mã dự phòng."
                    },
                    downloadError: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi tải xuống mã dự phòng",
                            message: "Đã xảy ra lỗi"
                        }
                    },
                    downloadSuccess: {
                        genericMessage: {
                            description: "Đã tải xuống các mã dự phòng.",
                            message: "Tải xuống mã dự phòng thành công."
                        },
                        message: {
                            description: "{{message}}",
                            message: "Tải xuống mã dự phòng thành công."
                        }
                    },
                    refreshError: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi tạo mã dự phòng mới",
                            message: "Đã xảy ra lỗi"
                        }
                    },
                    retrieveAuthenticatorError: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi tải danh sách phương thức xác thực đã bật",
                            message: "Đã xảy ra lỗi"
                        }
                    },
                    retrieveError: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi tải mã dự phòng",
                            message: "Đã xảy ra lỗi"
                        }
                    },
                    updateAuthenticatorError: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi cập nhật danh sách phương thức xác thực đã bật",
                            message: "Đã xảy ra lỗi"
                        }
                    }
                },
                remaining: "còn lại"
            },
            fido: {
                description: "Bạn có thể dùng <1>khóa truy cập</1>, <1>khóa bảo mật FIDO</1> hoặc <1>sinh trắc học</1> trên thiết bị để đăng nhập tài khoản.",
                form: {
                    label: "Khóa truy cập",
                    placeholder: "Nhập tên cho khóa truy cập",
                    remove: "Gỡ khóa truy cập",
                    required: "Vui lòng nhập tên cho khóa truy cập"
                },
                heading: "Khóa truy cập",
                modals: {
                    deleteConfirmation: {
                        assertionHint: "Vui lòng xác nhận thao tác.",
                        content: "Không thể hoàn tác thao tác này. Khóa truy cập sẽ bị xóa vĩnh viễn.",
                        description: "Nếu xóa khóa truy cập này, bạn có thể không đăng nhập lại được vào tài khoản. Vui lòng cân nhắc trước khi tiếp tục.",
                        heading: "Bạn có chắc chắn không?"
                    },
                    deviceRegistrationErrorModal: {
                        description: "Quá trình đăng ký khóa truy cập bị gián đoạn. Nếu không chủ ý dừng, bạn có thể thử lại.",
                        heading: "Đăng ký khóa truy cập thất bại",
                        tryWithOlderDevice: "Bạn cũng có thể thử lại bằng khóa truy cập cũ."
                    }
                },
                noPassKeyMessage: "Bạn chưa đăng ký khóa truy cập nào.",
                notifications: {
                    removeDevice: {
                        error: {
                            description: "{{description}}",
                            message: "Đã xảy ra lỗi khi gỡ khóa truy cập"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi gỡ khóa truy cập",
                            message: "Đã xảy ra lỗi"
                        },
                        success: {
                            description: "Đã gỡ khóa truy cập khỏi danh sách",
                            message: "Gỡ khóa truy cập thành công"
                        }
                    },
                    startFidoFlow: {
                        error: {
                            description: "{{description}}",
                            message: "Đã xảy ra lỗi khi tải khóa truy cập"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi tải khóa truy cập",
                            message: "Đã xảy ra lỗi"
                        },
                        success: {
                            description: "Đã đăng ký khóa truy cập và bạn có thể dùng để xác thực.",
                            message: "Đăng ký khóa truy cập thành công"
                        }
                    },
                    updateDeviceName: {
                        error: {
                            description: "{{description}}",
                            message: "Đã xảy ra lỗi khi cập nhật tên khóa truy cập"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi cập nhật tên khóa truy cập",
                            message: "Đã xảy ra lỗi"
                        },
                        success: {
                            description: "Đã cập nhật tên khóa truy cập",
                            message: "Cập nhật tên khóa truy cập thành công"
                        }
                    }
                },
                tryButton: "Thử bằng khóa truy cập cũ"
            },
            pushAuthenticatorApp: {
                addHint: "Cấu hình",
                configuredDescription: "Bạn có thể dùng yêu cầu đăng nhập từ ứng dụng xác thực thông báo đẩy đã cấu hình để xác thực hai yếu tố. Nếu không truy cập được ứng dụng, bạn có thể thiết lập ứng dụng xác thực mới tại đây.",
                deleteHint: "Gỡ bỏ",
                description: "Bạn có thể dùng ứng dụng xác thực thông báo đẩy để nhận yêu cầu đăng nhập qua thông báo đẩy cho xác thực hai yếu tố.",
                deviceLimitReachedHint: "Đã đạt giới hạn tối đa {{limit}} thiết bị",
                heading: "Xác thực bằng thông báo đẩy",
                hint: "Xem",
                modals: {
                    deviceDeleteConfirmation: {
                        assertionHint: "Vui lòng xác nhận thao tác.",
                        content: "Không thể hoàn tác thao tác này. Thiết bị sẽ bị gỡ vĩnh viễn.",
                        description: "Nếu gỡ thiết bị này, bạn có thể không đăng nhập lại được vào tài khoản. Vui lòng cân nhắc trước khi tiếp tục.",
                        heading: "Bạn có chắc chắn không?"
                    },
                    scan: {
                        additionNote: "Đã thêm mã QR vào hồ sơ của bạn!",
                        done: "Thành công! Giờ đây bạn có thể dùng ứng dụng xác thực thông báo đẩy để xác thực hai yếu tố",
                        heading: "Thiết lập ứng dụng xác thực thông báo đẩy",
                        messageBody: "Bạn có thể xem danh sách ứng dụng xác thực tại đây.",
                        subHeading: "Quét mã QR bên dưới bằng ứng dụng xác thực thông báo đẩy"
                    }
                },
                notifications: {
                    configFetchError: {
                        genericError: {
                            description: "Đã xảy ra lỗi khi tải cấu hình xác thực thông báo đẩy.",
                            message: "Đã xảy ra lỗi"
                        }
                    },
                    delete: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi gỡ thiết bị đã đăng ký",
                            message: "Đã xảy ra lỗi"
                        },
                        success: {
                            description: "Đã gỡ thiết bị đã đăng ký",
                            message: "Xóa thiết bị thành công"
                        }
                    },
                    deviceListFetchError: {
                        error: {
                            description: "Đã xảy ra lỗi khi tải thiết bị đã đăng ký xác thực thông báo đẩy",
                            message: "Đã xảy ra lỗi"
                        }
                    },
                    initError: {
                        error: {
                            description: "{{error}}",
                            message: "Đã xảy ra lỗi"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi tải mã QR",
                            message: "Đã xảy ra lỗi"
                        }
                    }
                }
            },
            smsOtp: {
                descriptions: {
                    hint: "Bạn sẽ nhận được tin nhắn chứa mã xác minh dùng một lần"
                },
                heading: "Số điện thoại di động",
                notifications: {
                    updateMobile: {
                        error: {
                            description: "{{description}}",
                            message: "Đã xảy ra lỗi khi cập nhật số điện thoại"
                        },
                        genericError: {
                            description: "Đã xảy ra lỗi khi cập nhật số điện thoại",
                            message: "Đã xảy ra lỗi"
                        },
                        success: {
                            description: "Đã cập nhật số điện thoại trong hồ sơ người dùng",
                            message: "Cập nhật số điện thoại thành công"
                        }
                    }
                }
            }
        },
        mobileUpdateWizard: {
            done: "Thành công! Đã xác minh số điện thoại của bạn.",
            notifications: {
                resendError: {
                    error: {
                        description: "{{error}}",
                        message: "Đã xảy ra lỗi"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi lấy mã xác minh mới",
                        message: "Đã xảy ra lỗi"
                    }
                },
                resendSuccess: {
                    message: "Đã gửi yêu cầu gửi lại mã"
                }
            },
            submitMobile: {
                heading: "Nhập số điện thoại mới của bạn"
            },
            verificationSent: {
                heading: "Bạn sẽ sớm nhận được mã OTP trên điện thoại để xác minh"
            },
            verifySmsOtp: {
                didNotReceive: "Bạn chưa nhận được mã?",
                error: "Xác minh thất bại. Vui lòng thử lại.",
                heading: "Xác minh số điện thoại của bạn",
                label: "Nhập mã xác minh đã gửi đến số điện thoại của bạn",
                placeholder: "Nhập mã xác minh của bạn",
                requiredError: "Nhập mã xác minh",
                resend: "Gửi lại"
            }
        },
        overview: {
            widgets: {
                accountActivity: {
                    actionTitles: {
                        update: "Quản lý hoạt động tài khoản"
                    },
                    description: "Bạn đang đăng nhập từ thiết bị sau",
                    header: "Phiên đang hoạt động"
                },
                accountSecurity: {
                    actionTitles: {
                        update: "Cập nhật bảo mật tài khoản"
                    },
                    description: "Cài đặt và đề xuất giúp bảo vệ tài khoản của bạn",
                    header: "Bảo mật tài khoản"
                },
                accountStatus: {
                    complete: "Hồ sơ của bạn đã đầy đủ",
                    completedFields: "Trường đã hoàn thành",
                    completionPercentage: "Hồ sơ của bạn đã hoàn thành {{percentage}}%",
                    inComplete: "Hoàn thiện hồ sơ của bạn",
                    inCompleteFields: "Trường chưa hoàn thành",
                    mandatoryFieldsCompletion: "Đã hoàn thành {{completed}} trong {{total}} trường bắt buộc",
                    optionalFieldsCompletion: "Đã hoàn thành {{completed}} trong {{total}} trường tùy chọn"
                },
                consentManagement: {
                    actionTitles: {
                        manage: "Quản lý sự đồng ý"
                    },
                    description: "Kiểm soát dữ liệu bạn muốn chia sẻ với ứng dụng",
                    header: "Kiểm soát sự đồng ý"
                },
                profileStatus: {
                    completionPercentage: "Hồ sơ của bạn đã hoàn thành {{percentage}}%",
                    description: "Quản lý hồ sơ của bạn",
                    header: "Hồ sơ của bạn",
                    profileText: "Thông tin hồ sơ cá nhân của bạn",
                    readOnlyDescription: "Xem hồ sơ của bạn",
                    userSourceText: "(Đăng ký qua {{source}})"
                }
            }
        },
        profile: {
            actions: {
                deleteEmail: "Xóa địa chỉ email",
                deleteMobile: "Xóa số điện thoại",
                verifyEmail: "Xác minh địa chỉ email",
                verifyMobile: "Xác minh số điện thoại"
            },
            fields: {
                "Account Confirmed Time": "Thời điểm xác nhận tài khoản",
                "Account Disabled": "Tài khoản bị vô hiệu hóa",
                "Account Locked": "Tài khoản bị khóa",
                "Account State": "Trạng thái tài khoản",
                Active: "Đang hoạt động",
                "Address - Street": "Địa chỉ - Đường",
                "Ask Password": "Yêu cầu đặt mật khẩu",
                "Backup Code Enabled": "Đã bật mã dự phòng",
                "Backup Codes": "Mã dự phòng",
                "Birth Date": "Ngày sinh",
                Country: "Quốc gia",
                "Created Time": "Thời gian tạo",
                "Disable EmailOTP": "Tắt OTP qua email",
                "Disable SMSOTP": "Tắt OTP qua SMS",
                "Display Name": "Tên hiển thị",
                Email: "Email",
                "Email Addresses": "Địa chỉ email",
                "Email Verified": "Email đã xác minh",
                "Enabled Authenticators": "Phương thức xác thực đã bật",
                "Existing Lite User": "Người dùng Lite hiện có",
                "External ID": "Mã định danh bên ngoài",
                "Failed Attempts Before Success": "Số lần thất bại trước khi thành công",
                "Failed Backup Code Attempts": "Số lần nhập mã dự phòng thất bại",
                "Failed Email OTP Attempts": "Số lần nhập OTP email thất bại",
                "Failed Lockout Count": "Số lần khóa do thất bại",
                "Failed Login Attempts": "Số lần đăng nhập thất bại",
                "Failed Password Recovery Attempts": "Số lần khôi phục mật khẩu thất bại",
                "Failed SMS OTP Attempts": "Số lần nhập OTP SMS thất bại",
                "Failed TOTP Attempts": "Số lần nhập TOTP thất bại",
                "First Name": "Tên",
                "Force Password Reset": "Buộc đặt lại mật khẩu",
                "Full Name": "Họ và tên",
                Gender: "Giới tính",
                Groups: "Nhóm",
                "Identity Provider Type": "Loại nhà cung cấp định danh",
                "Last Logon": "Lần đăng nhập cuối",
                "Last Modified Time": "Thời gian sửa đổi cuối",
                "Last Name": "Họ",
                "Last Password Update": "Lần cập nhật mật khẩu cuối",
                "Lite User": "Người dùng Lite",
                "Lite User ID": "Mã người dùng Lite",
                Local: "Cục bộ",
                "Local Credential Exists": "Có thông tin xác thực cục bộ",
                Locality: "Khu vực",
                Location: "Vị trí",
                "Locked Reason": "Lý do khóa",
                "Manager - Name": "Người quản lý - Tên",
                "Middle Name": "Tên đệm",
                Mobile: "Điện thoại di động",
                "Mobile Numbers": "Số điện thoại di động",
                "Nick Name": "Biệt danh",
                "Phone Verified": "Điện thoại đã xác minh",
                "Photo - Thumbnail": "Ảnh - Hình thu nhỏ",
                "Photo URL": "URL ảnh",
                "Postal Code": "Mã bưu chính",
                "Preferred Channel": "Kênh ưu tiên",
                "Read Only User": "Người dùng chỉ đọc",
                Region: "Vùng",
                "Resource Type": "Loại tài nguyên",
                Roles: "Vai trò",
                "Secret Key": "Khóa bí mật",
                "TOTP Enabled": "Đã bật TOTP",
                "Time Zone": "Múi giờ",
                URL: "URL",
                "Unlock Time": "Thời gian mở khóa",
                "User Account Type": "Loại tài khoản người dùng",
                "User ID": "Mã người dùng",
                "User Metadata - Version": "Siêu dữ liệu người dùng - Phiên bản",
                "User Source": "Nguồn người dùng",
                "User Source ID": "Mã nguồn người dùng",
                Username: "Tên đăng nhập",
                "Verification Pending Email": "Email chờ xác minh",
                "Verification Pending Mobile Number": "Số điện thoại chờ xác minh",
                "Verified Email Addresses": "Địa chỉ email đã xác minh",
                "Verified Mobile Numbers": "Số điện thoại đã xác minh",
                "Verify Email": "Xác minh email",
                "Verify Mobile": "Xác minh điện thoại",
                "Verify Secret Key": "Xác minh khóa bí mật",
                "Website URL": "URL trang web",
                emails: "Email",
                generic: {
                    default: "Thêm {{fieldName}}"
                },
                nameFamilyName: "Họ",
                nameGivenName: "Tên",
                phoneNumbers: "Số điện thoại",
                profileImage: "Ảnh hồ sơ",
                profileUrl: "URL",
                userName: "Tên đăng nhập"
            },
            forms: {
                countryChangeForm: {
                    inputs: {
                        country: {
                            placeholder: "Chọn quốc gia của bạn"
                        }
                    }
                },
                dateChangeForm: {
                    inputs: {
                        date: {
                            validations: {
                                futureDateError: "Ngày bạn nhập cho trường {{field}} không hợp lệ.",
                                invalidFormat: "Vui lòng nhập {{fieldName}} hợp lệ theo định dạng YYYY-MM-DD."
                            }
                        }
                    }
                },
                emailChangeForm: {
                    inputs: {
                        email: {
                            label: "Email",
                            note: "LƯU Ý: Thay đổi này sẽ cập nhật địa chỉ email liên kết với tài khoản. Địa chỉ email này cũng được dùng để khôi phục tài khoản.",
                            placeholder: "Nhập địa chỉ email của bạn",
                            validations: {
                                empty: "Địa chỉ email là trường bắt buộc",
                                invalidFormat: "Vui lòng nhập địa chỉ email hợp lệ. Bạn có thể dùng chữ cái, chữ số, ký tự Unicode, dấu gạch dưới (_), dấu gạch ngang (-), dấu chấm (.) và ký hiệu @."
                            }
                        }
                    }
                },
                generic: {
                    dropdown: {
                        placeholder: "Chọn {{fieldName}} của bạn"
                    },
                    inputs: {
                        placeholder: "Nhập {{fieldName}} của bạn",
                        readonly: {
                            placeholder: "Giá trị này đang trống",
                            popup: "Liên hệ quản trị viên để cập nhật {{fieldName}} của bạn"
                        },
                        validations: {
                            duplicate: "{{fieldName}} không được có giá trị trùng lặp",
                            empty: "{{fieldName}} là trường bắt buộc",
                            invalidFormat: "Định dạng {{fieldName}} đã nhập không hợp lệ"
                        }
                    },
                    radioGroup: {
                        optionNone: "Không có"
                    }
                },
                mobileChangeForm: {
                    inputs: {
                        mobile: {
                            label: "Số điện thoại di động",
                            note: "LƯU Ý: Thao tác này sẽ thay đổi số điện thoại trong hồ sơ của bạn",
                            placeholder: "Nhập số điện thoại di động của bạn",
                            validations: {
                                empty: "Số điện thoại là trường bắt buộc",
                                invalidFormat: "Vui lòng nhập số điện thoại hợp lệ theo định dạng [+][mã quốc gia][mã vùng][số điện thoại]."
                            }
                        }
                    }
                },
                nameChangeForm: {
                    inputs: {
                        firstName: {
                            label: "Tên",
                            placeholder: "Nhập tên",
                            validations: {
                                empty: "Tên là trường bắt buộc"
                            }
                        },
                        lastName: {
                            label: "Họ",
                            placeholder: "Nhập họ",
                            validations: {
                                empty: "Họ là trường bắt buộc"
                            }
                        }
                    }
                },
                organizationChangeForm: {
                    inputs: {
                        organization: {
                            label: "Tổ chức",
                            placeholder: "Nhập tổ chức của bạn",
                            validations: {
                                empty: "Tổ chức là trường bắt buộc"
                            }
                        }
                    }
                }
            },
            messages: {
                emailConfirmation: {
                    content: "Vui lòng xác nhận cập nhật địa chỉ email để thêm email mới vào hồ sơ của bạn.",
                    header: "Đang chờ xác nhận!"
                },
                emailVerification: {
                    content: "Địa chỉ email này được dùng để gửi email xác minh khi bật xác thực hai yếu tố và gửi mã khôi phục tên đăng nhập/mật khẩu. Để cập nhật, bạn phải xác minh email mới bằng mã được gửi đến địa chỉ mới. Nhấn Cập nhật nếu muốn tiếp tục."
                },
                mobileVerification: {
                    content: "Số điện thoại này được dùng để gửi OTP qua SMS khi bật xác thực hai yếu tố và gửi mã khôi phục tên đăng nhập/mật khẩu. Để cập nhật, bạn phải xác minh số mới bằng mã được gửi đến số đó. Nhấn Cập nhật nếu muốn tiếp tục."
                }
            },
            modals: {
                customMultiAttributeDeleteConfirmation: {
                    assertionHint: "Vui lòng xác nhận thao tác.",
                    content: "Không thể hoàn tác thao tác này. Giá trị đã chọn sẽ bị xóa vĩnh viễn.",
                    description: "Nếu xóa giá trị đã chọn, giá trị đó sẽ bị gỡ vĩnh viễn khỏi hồ sơ của bạn.",
                    heading: "Bạn có chắc chắn không?"
                },
                emailAddressDeleteConfirmation: {
                    assertionHint: "Vui lòng xác nhận thao tác.",
                    content: "Không thể hoàn tác thao tác này. Địa chỉ email sẽ bị xóa vĩnh viễn.",
                    description: "Nếu xóa địa chỉ email này, địa chỉ đó sẽ bị gỡ vĩnh viễn khỏi hồ sơ của bạn.",
                    heading: "Bạn có chắc chắn không?"
                },
                mobileNumberDeleteConfirmation: {
                    assertionHint: "Vui lòng xác nhận thao tác.",
                    content: "Không thể hoàn tác thao tác này. Số điện thoại sẽ bị xóa vĩnh viễn.",
                    description: "Nếu xóa số điện thoại này, số đó sẽ bị gỡ vĩnh viễn khỏi hồ sơ của bạn.",
                    heading: "Bạn có chắc chắn không?"
                }
            },
            notifications: {
                getProfileCompletion: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi đánh giá mức độ hoàn thiện hồ sơ",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã đánh giá mức độ hoàn thiện hồ sơ",
                        message: "Tính toán thành công"
                    }
                },
                getProfileInfo: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi khi tải thông tin hồ sơ"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi tải thông tin hồ sơ",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã tải thông tin hồ sơ người dùng được yêu cầu",
                        message: "Đã tải hồ sơ người dùng"
                    }
                },
                getUserReadOnlyStatus: {
                    genericError: {
                        description: "Đã xảy ra lỗi khi tải trạng thái chỉ đọc của người dùng",
                        message: "Đã xảy ra lỗi"
                    }
                },
                updateProfileInfo: {
                    error: {
                        description: "{{description}}",
                        message: "Cập nhật hồ sơ thất bại"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi cập nhật thông tin hồ sơ",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã cập nhật thông tin hồ sơ người dùng được yêu cầu",
                        message: "Cập nhật hồ sơ người dùng thành công"
                    }
                },
                verifyEmail: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi khi gửi email xác minh"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi gửi email xác minh",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã gửi email xác minh. Vui lòng kiểm tra hộp thư đến",
                        message: "Gửi email xác minh thành công"
                    }
                },
                verifyMobile: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi khi gửi mã xác minh"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi gửi mã xác minh",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã gửi mã xác minh. Vui lòng kiểm tra điện thoại",
                        message: "Gửi mã xác minh thành công"
                    }
                }
            },
            placeholders: {
                SCIMDisabled: {
                    heading: "Tính năng này không khả dụng cho tài khoản của bạn"
                }
            }
        },
        profileExport: {
            notifications: {
                downloadProfileInfo: {
                    error: {
                        description: "{{description}}",
                        message: "Đã xảy ra lỗi khi tải xuống thông tin hồ sơ người dùng"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi tải xuống thông tin hồ sơ người dùng",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã bắt đầu tải xuống tệp chứa thông tin hồ sơ người dùng được yêu cầu",
                        message: "Đã bắt đầu tải thông tin hồ sơ người dùng"
                    }
                }
            }
        },
        selfSignUp: {
            preference: {
                notifications: {
                    error: {
                        description: "{{description}}.",
                        message: "Lỗi khi tải tùy chọn tự đăng ký"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi tải tùy chọn tự đăng ký.",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã tải tùy chọn tự đăng ký.",
                        message: "Tải tùy chọn tự đăng ký thành công"
                    }
                }
            }
        },
        systemNotificationAlert: {
            resend: "Gửi lại",
            selfSignUp: {
                awaitingAccountConfirmation: "Tài khoản của bạn chưa được kích hoạt. Chúng tôi đã gửi liên kết kích hoạt đến địa chỉ email đã đăng ký. Bạn cần liên kết mới?",
                notifications: {
                    resendError: {
                        description: "Đã xảy ra lỗi khi gửi lại email xác nhận tài khoản.",
                        message: "Đã xảy ra lỗi"
                    },
                    resendSuccess: {
                        description: "Đã gửi lại email xác nhận tài khoản.",
                        message: "Gửi lại email xác nhận tài khoản thành công"
                    }
                }
            }
        },
        userAvatar: {
            infoPopover: "Ảnh này được lấy từ dịch vụ <1>Gravatar</1>.",
            urlUpdateHeader: "Nhập URL ảnh để đặt ảnh hồ sơ"
        },
        userSessions: {
            browserAndOS: "{{browser}} trên {{os}} {{version}}",
            dangerZones: {
                terminate: {
                    actionTitle: "Kết thúc",
                    header: "Kết thúc phiên",
                    subheader: "Bạn sẽ bị đăng xuất khỏi phiên trên thiết bị này."
                }
            },
            lastAccessed: "Truy cập lần cuối {{date}}",
            modals: {
                terminateActiveUserSessionModal: {
                    heading: "Kết thúc các phiên đang hoạt động",
                    message: "Thay đổi tùy chọn xác thực hai yếu tố (2FA) sẽ không áp dụng cho các phiên đang hoạt động. Bạn nên kết thúc các phiên này.",
                    primaryAction: "Kết thúc tất cả",
                    secondaryAction: "Xem lại và kết thúc"
                },
                terminateAllUserSessionsModal: {
                    heading: "Xác nhận",
                    message: "Thao tác này sẽ đăng xuất bạn khỏi phiên này và mọi phiên khác trên tất cả thiết bị. Bạn có muốn tiếp tục không?"
                },
                terminateUserSessionModal: {
                    heading: "Xác nhận",
                    message: "Thao tác này sẽ đăng xuất bạn khỏi phiên trên thiết bị này. Bạn có muốn tiếp tục không?"
                }
            },
            notifications: {
                fetchSessions: {
                    error: {
                        description: "{{description}}",
                        message: "Lỗi khi tải phiên đang hoạt động"
                    },
                    genericError: {
                        description: "Không thể tải phiên đang hoạt động",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã tải các phiên đang hoạt động",
                        message: "Tải phiên đang hoạt động thành công"
                    }
                },
                terminateAllUserSessions: {
                    error: {
                        description: "{{description}}",
                        message: "Không thể kết thúc các phiên đang hoạt động"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi kết thúc các phiên đang hoạt động",
                        message: "Không thể kết thúc các phiên đang hoạt động"
                    },
                    success: {
                        description: "Đã kết thúc mọi phiên đang hoạt động",
                        message: "Đã kết thúc mọi phiên đang hoạt động"
                    }
                },
                terminateUserSession: {
                    error: {
                        description: "{{description}}",
                        message: "Không thể kết thúc phiên đang hoạt động"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi kết thúc phiên đang hoạt động",
                        message: "Không thể kết thúc phiên đang hoạt động"
                    },
                    success: {
                        description: "Đã kết thúc phiên đang hoạt động",
                        message: "Kết thúc phiên thành công"
                    }
                }
            }
        },
        verificationOnUpdate: {
            modal: {
                common: {
                    step2: {
                        hint: "Bạn chưa nhận được mã?",
                        resend: "Gửi lại",
                        resendSuccess: "Đã gửi yêu cầu gửi lại mã",
                        validation: {
                            otpRequired: "Nhập mã xác minh"
                        },
                        verificationFailure: "Xác minh thất bại. Vui lòng thử lại."
                    }
                },
                email: {
                    step1: {
                        content: {
                            label: "Nhập địa chỉ email mới của bạn"
                        },
                        heading: "Xác minh địa chỉ email của bạn",
                        validation: {
                            invalidFormat: "Vui lòng nhập địa chỉ email hợp lệ",
                            required: "Địa chỉ email là bắt buộc"
                        }
                    },
                    step2: {
                        content: {
                            label: "Mã xác minh đã được gửi đến email của bạn. Vui lòng nhập mã bên dưới để xác minh địa chỉ email."
                        },
                        heading: "Xác minh địa chỉ email của bạn"
                    },
                    step3: {
                        content: "Thành công! Đã xác minh địa chỉ email của bạn."
                    }
                },
                notifications: {
                    resendError: {
                        description: "Đã xảy ra lỗi khi gửi lại mã xác minh",
                        message: "Đã xảy ra lỗi"
                    }
                },
                sms: {
                    step1: {
                        content: {
                            label: "Nhập số điện thoại mới của bạn"
                        },
                        heading: "Xác minh số điện thoại của bạn",
                        validation: {
                            invalidFormat: "Vui lòng nhập số điện thoại hợp lệ",
                            required: "Số điện thoại là bắt buộc"
                        }
                    },
                    step2: {
                        content: {
                            label: "Mã xác minh đã được gửi đến số điện thoại của bạn. Vui lòng nhập mã bên dưới để xác minh số điện thoại."
                        },
                        heading: "Xác minh số điện thoại của bạn"
                    },
                    step3: {
                        content: "Thành công! Đã xác minh số điện thoại của bạn."
                    }
                }
            },
            preference: {
                notifications: {
                    error: {
                        description: "{{description}}",
                        message: "Lỗi khi tải tùy chọn xác minh khi cập nhật"
                    },
                    genericError: {
                        description: "Đã xảy ra lỗi khi tải tùy chọn xác minh khi cập nhật",
                        message: "Đã xảy ra lỗi"
                    },
                    success: {
                        description: "Đã tải tùy chọn xác minh khi cập nhật",
                        message: "Tải tùy chọn xác minh khi cập nhật thành công"
                    }
                }
            }
        }
    },
    modals: {
        editAvatarModal: {
            content: {
                gravatar: {
                    errors: {
                        noAssociation: {
                            content: "Email đã chọn chưa được đăng ký trên Gravatar. Hãy đăng ký tài khoản tại <1>trang web chính thức của Gravatar</1> hoặc dùng một trong các tùy chọn sau.",
                            header: "Không tìm thấy ảnh Gravatar phù hợp!"
                        }
                    },
                    heading: "Gravatar dựa trên "
                },
                hostedAvatar: {
                    heading: "Ảnh từ URL",
                    input: {
                        errors: {
                            http: {
                                content: "URL đã chọn trỏ đến ảnh được cung cấp qua HTTP không an toàn. Vui lòng cân nhắc trước khi tiếp tục.",
                                header: "Nội dung không an toàn!"
                            },
                            invalid: {
                                content: "Vui lòng nhập URL ảnh hợp lệ"
                            }
                        },
                        hint: "Nhập URL hợp lệ của ảnh được lưu trữ tại bên thứ ba.",
                        placeholder: "Nhập URL của ảnh.",
                        warnings: {
                            dataURL: {
                                content: "Data URL có quá nhiều ký tự có thể gây sự cố cơ sở dữ liệu. Vui lòng cân nhắc trước khi tiếp tục.",
                                header: "Kiểm tra kỹ Data URL đã nhập!"
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
            description: null,
            heading: "Cập nhật ảnh hồ sơ",
            primaryButton: "Lưu",
            secondaryButton: "Hủy"
        },
        sessionTimeoutModal: {
            description: "Khi bạn nhấn <1>Quay lại</1>, chúng tôi sẽ cố khôi phục phiên nếu có. Nếu không có phiên đang hoạt động, bạn sẽ được chuyển đến trang đăng nhập.",
            heading: "Có vẻ bạn đã không hoạt động trong một thời gian dài.",
            loginAgainButton: "Đăng nhập lại",
            primaryButton: "Quay lại",
            secondaryButton: "Đăng xuất",
            sessionTimedOutDescription: "Vui lòng đăng nhập lại để tiếp tục từ nơi bạn đã dừng.",
            sessionTimedOutHeading: "Phiên người dùng đã hết hạn do không hoạt động."
        }
    },
    pages: {
        applications: {
            subTitle: "Khám phá và truy cập ứng dụng của bạn",
            title: "Ứng dụng"
        },
        consents: {
            subTitle: "Xem và quản lý sự đồng ý với các ứng dụng và chính sách bạn đã chấp nhận",
            title: "Sự đồng ý"
        },
        overview: {
            subTitle: "Quản lý thông tin cá nhân, bảo mật tài khoản và cài đặt quyền riêng tư",
            title: "Xin chào, {{firstName}}"
        },
        personalInfo: {
            subTitle: "Chỉnh sửa hoặc xuất hồ sơ cá nhân và quản lý tài khoản liên kết",
            title: "Thông tin cá nhân"
        },
        personalInfoWithoutExportProfile: {
            subTitle: "Xem và quản lý thông tin cá nhân của bạn",
            title: "Thông tin cá nhân"
        },
        personalInfoWithoutLinkedAccounts: {
            subTitle: "Chỉnh sửa hoặc xuất hồ sơ cá nhân",
            title: "Thông tin cá nhân"
        },
        privacy: {
            subTitle: "",
            title: "Chính sách quyền riêng tư của WSO2 Identity Server"
        },
        readOnlyProfileBanner: "Bạn không thể sửa hồ sơ từ cổng này. Vui lòng liên hệ quản trị viên để biết thêm thông tin.",
        security: {
            subTitle: "Bảo vệ tài khoản bằng cách quản lý sự đồng ý, phiên và cài đặt bảo mật",
            title: "Bảo mật"
        }
    },
    placeholders: {
        "404": {
            action: "Về trang chủ",
            subtitles: {
                "0": "Không tìm thấy trang bạn yêu cầu.",
                "1": "Vui lòng kiểm tra URL hoặc nhấn nút bên dưới để quay về trang chủ."
            },
            title: "Không tìm thấy trang"
        },
        accessDeniedError: {
            action: "Về trang chủ",
            subtitles: {
                "0": "Có vẻ bạn không được phép truy cập trang này.",
                "1": "Vui lòng thử đăng nhập bằng tài khoản khác."
            },
            title: "Không được cấp quyền truy cập"
        },
        emptySearchResult: {
            action: "Xóa truy vấn tìm kiếm",
            subtitles: {
                "0": "Không tìm thấy kết quả cho \"{{query}}\"",
                "1": "Vui lòng thử từ khóa khác."
            },
            title: "Không tìm thấy kết quả"
        },
        genericError: {
            action: "Làm mới trang",
            subtitles: {
                "0": "Đã xảy ra lỗi khi hiển thị trang này.",
                "1": "Xem bảng điều khiển trình duyệt để biết chi tiết kỹ thuật."
            },
            title: "Đã xảy ra lỗi"
        },
        loginError: {
            action: "Tiếp tục đăng xuất",
            subtitles: {
                "0": "Có vẻ bạn không có quyền sử dụng cổng này.",
                "1": "Vui lòng đăng nhập bằng tài khoản khác."
            },
            title: "Bạn không được cấp quyền"
        },
        sessionStorageDisabled: {
            subtitles: {
                "0": "Để sử dụng ứng dụng này, bạn cần bật cookie trong cài đặt trình duyệt.",
                "1": "Để biết cách bật cookie, hãy xem phần trợ giúp của trình duyệt."
            },
            title: "Cookie đang bị tắt trong trình duyệt của bạn."
        }
    },
    sections: {
        accountRecovery: {
            description: "Quản lý thông tin giúp bạn khôi phục mật khẩu",
            emptyPlaceholderText: "Không có tùy chọn khôi phục tài khoản",
            heading: "Khôi phục tài khoản"
        },
        changePassword: {
            actionTitles: {
                change: "Đổi mật khẩu của bạn"
            },
            description: "Cập nhật mật khẩu thường xuyên và dùng mật khẩu khác với các mật khẩu khác của bạn.",
            heading: "Đổi mật khẩu"
        },
        consentManagement: {
            actionTitles: {
                empty: "Bạn chưa đồng ý cho ứng dụng nào"
            },
            description: "Xem lại sự đồng ý đã cấp cho từng ứng dụng và thu hồi khi cần.",
            heading: "Quản lý sự đồng ý",
            placeholders: {
                emptyConsentList: {
                    heading: "Bạn chưa đồng ý cho ứng dụng nào"
                }
            }
        },
        preferenceManagement: {
            description: "Xem và quản lý tùy chọn liên lạc của bạn.",
            heading: "Tùy chọn liên lạc",
            placeholders: {
                emptyConsentList: {
                    heading: "Bạn chưa thiết lập tùy chọn liên lạc nào"
                }
            }
        },
        policyConsentManagement: {
            description: "Xem lại các chính sách bạn đã đồng ý.",
            heading: "Sự đồng ý với chính sách",
            placeholders: {
                emptyConsentList: {
                    heading: "Bạn chưa đồng ý với chính sách nào"
                }
            }
        },
        createPassword: {
            actionTitles: {
                create: "Tạo mật khẩu"
            },
            description: "Tạo mật khẩu trong {{productName}}. Bạn có thể dùng mật khẩu này để đăng nhập {{productName}} ngoài cách đăng nhập qua mạng xã hội.",
            heading: "Tạo mật khẩu"
        },
        federatedAssociations: {
            description: "Xem tài khoản từ các kết nối khác đã liên kết với tài khoản này",
            heading: "Tài khoản mạng xã hội đã liên kết"
        },
        linkedAccounts: {
            actionTitles: {
                add: "Thêm tài khoản"
            },
            description: "Liên kết tài khoản khác để truy cập liền mạch mà không cần đăng nhập lại",
            heading: "Tài khoản liên kết"
        },
        mfa: {
            description: "Cấu hình phương thức xác thực bổ sung để đăng nhập dễ dàng hoặc tăng cường bảo mật tài khoản.",
            heading: "Xác thực bổ sung"
        },
        profile: {
            description: "Quản lý hồ sơ cá nhân của bạn",
            heading: "Hồ sơ"
        },
        profileExport: {
            actionTitles: {
                export: "Tải hồ sơ xuống"
            },
            description: "Tải xuống toàn bộ dữ liệu hồ sơ, gồm dữ liệu cá nhân và tài khoản liên kết",
            heading: "Xuất hồ sơ"
        },
        userSessions: {
            actionTitles: {
                empty: "Không có phiên đang hoạt động",
                terminateAll: "Kết thúc mọi phiên"
            },
            description: "Xem lại mọi phiên đang hoạt động của tài khoản",
            heading: "Phiên đang hoạt động",
            placeholders: {
                emptySessionList: {
                    heading: "Người dùng này không có phiên đang hoạt động"
                }
            }
        }
    }
};
