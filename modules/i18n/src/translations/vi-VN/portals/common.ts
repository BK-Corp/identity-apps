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

import { CommonNS } from "../../../models";

/* eslint-disable max-len */
export const common: CommonNS = {
    access: "Truy cập",
    actions: "Thao tác",
    activate: "Kích hoạt",
    active: "Đang hoạt động",
    add: "Thêm",
    addKey: "Thêm khóa bí mật",
    addURL: "Thêm URL",
    all: "Tất cả",
    applicationName: "Tên ứng dụng",
    applications: "Ứng dụng",
    approvalStatus: "Trạng thái phê duyệt",
    approvals: "Phê duyệt",
    approvalsPage: {
        list: {
            columns: {
                actions: "Thao tác",
                name: "Tên"
            }
        },
        modals: {
            description: "Bạn có thể phê duyệt hoặc từ chối tác vụ tại đây.",
            header: "Tác vụ phê duyệt",
            subHeader: "Xem lại thông tin của tác vụ phê duyệt."
        },
        notifications: {
            fetchApprovalDetails: {
                error: {
                    description: "{{description}}",
                    message: "Lỗi khi tải thông tin phê duyệt"
                },
                genericError: {
                    description: "Không thể tải thông tin phê duyệt.",
                    message: "Đã xảy ra lỗi"
                }
            },
            fetchPendingApprovals: {
                error: {
                    description: "{{description}}",
                    message: "Lỗi khi tải yêu cầu chờ phê duyệt"
                },
                genericError: {
                    description: "Không thể tải các yêu cầu chờ phê duyệt.",
                    message: "Đã xảy ra lỗi"
                }
            },
            statusUpdate: {
                approved: {
                    description: "Yêu cầu đã được phê duyệt.",
                    message: "Đã phê duyệt yêu cầu"
                },
                claimed: {
                    description: "Yêu cầu phê duyệt đã được nhận xử lý.",
                    message: "Đã nhận xử lý yêu cầu phê duyệt"
                },
                rejected: {
                    description: "Yêu cầu phê duyệt đã bị từ chối.",
                    message: "Đã từ chối yêu cầu phê duyệt"
                },
                released: {
                    description: "Yêu cầu phê duyệt đã được trả lại hàng đợi.",
                    message: "Đã trả lại yêu cầu phê duyệt"
                }
            },
            updatePendingApprovals: {
                error: {
                    description: "{{description}}",
                    message: "Lỗi khi cập nhật yêu cầu phê duyệt"
                },
                genericError: {
                    description: "Không thể cập nhật yêu cầu chờ phê duyệt.",
                    message: "Đã xảy ra lỗi"
                },
                success: {
                    description: "Đã cập nhật yêu cầu phê duyệt.",
                    message: "Cập nhật thành công"
                }
            }
        },
        operationTypes: {
            addRole: "Thêm vai trò",
            addUser: "Thêm người dùng",
            all: "Tất cả thao tác",
            deleteRole: "Xóa vai trò",
            deleteUser: "Xóa người dùng",
            selfRegisterUser: "Người dùng tự đăng ký",
            updateGroupsOfUser: "Cập nhật nhóm của người dùng",
            updateRolesOfUser: "Cập nhật vai trò của người dùng"
        },
        placeholders: {
            emptyApprovalFilter: {
                action: "Xem tất cả",
                subtitle: "Hiện không có yêu cầu phê duyệt ở trạng thái {{status}}.",
                title: "Không tìm thấy kết quả"
            },
            emptyApprovalList: {
                action: "",
                subtitle: "Hiện không có yêu cầu phê duyệt cần xem xét.",
                title: "Không có yêu cầu phê duyệt"
            },
            emptySearchResults: {
                action: "Xem tất cả",
                subtitles: {
                    "0": "Không tìm thấy quy trình bạn tìm kiếm.",
                    "1": "Vui lòng kiểm tra xem quy trình có tên đó có trong",
                    "2": "hệ thống hay không."
                },
                title: "Không có yêu cầu phê duyệt"
            },
            searchApprovals: "Tìm theo tên quy trình"
        },
        propertyMessages: {
            assignedUsersDeleted: "Người dùng được chỉ định đã bị xóa.",
            roleDeleted: "Vai trò đã bị xóa.",
            selfRegistration: "Tự đăng ký",
            unassignedUsersDeleted: "Người dùng chưa được chỉ định đã bị xóa."
        },
        search: {
            placeholder: "Tìm theo mã yêu cầu"
        },
        subTitle: "Xem xét các tác vụ cần bạn phê duyệt",
        title: "Phê duyệt"
    },
    approve: "Phê duyệt",
    approved: "Đã phê duyệt",
    apps: "Ứng dụng",
    assignYourself: "Nhận xử lý",
    assignee: "Người được giao",
    assignees: "Những người được giao",
    asyncOperationErrorMessage: {
        description: "Đã xảy ra lỗi",
        message: "Đã xảy ra lỗi không mong đợi. Vui lòng thử lại sau."
    },
    authentication: "Xác thực",
    authenticator: "Phương thức xác thực",
    authenticator_plural: "Các phương thức xác thực",
    back: "Quay lại",
    beta: "Thử nghiệm Beta",
    browser: "Trình duyệt",
    cancel: "Hủy",
    challengeQuestionNumber: "Câu hỏi bảo mật {{number}}",
    change: "Thay đổi",
    chunkLoadErrorMessage: {
        description: "Đã xảy ra lỗi khi tải ứng dụng. Vui lòng tải lại ứng dụng.",
        heading: "Đã xảy ra lỗi",
        primaryActionText: "Tải lại ứng dụng"
    },
    clear: "Xóa nội dung",
    clientId: "Mã định danh ứng dụng khách",
    close: "Đóng",
    comingSoon: "Sắp ra mắt",
    completed: "Đã hoàn thành",
    configure: "Cấu hình",
    confirm: "Xác nhận",
    consents: "Sự đồng ý",
    contains: "Chứa",
    continue: "Tiếp tục",
    copied: "Đã sao chép!",
    copyToClipboard: "Sao chép vào bộ nhớ tạm",
    create: "Tạo",
    createdOn: "Ngày tạo",
    dangerZone: "Vùng thao tác nguy hiểm",
    darkMode: "Chế độ tối",
    default: "Mặc định",
    delete: "Xóa",
    deprecated: "Cấu hình này đã lỗi thời và sẽ bị loại bỏ trong phiên bản sau.",
    description: "Mô tả",
    deviceModel: "Mẫu thiết bị",
    disable: "Tắt",
    disabled: "Đã tắt",
    docs: "Tài liệu",
    documentation: "Tài liệu hướng dẫn",
    done: "Xong",
    download: "Tải xuống",
    drag: "Kéo",
    duplicateURLError: "Giá trị này đã được thêm",
    edit: "Chỉnh sửa",
    enable: "Bật",
    enabled: "Đã bật",
    endsWith: "Kết thúc bằng",
    equals: "Bằng",
    exitFullScreen: "Thoát toàn màn hình",
    experimental: "Thử nghiệm",
    explore: "Khám phá",
    export: "Xuất",
    featureAvailable: "Tính năng này sẽ sớm ra mắt!",
    filter: "Lọc",
    finish: "Hoàn tất",
    generatePassword: "Tạo mật khẩu",
    goBackHome: "Về trang chủ",
    goFullScreen: "Toàn màn hình",
    good: "Tốt",
    greaterThanOrEqual: "Lớn hơn hoặc bằng",
    help: "Trợ giúp",
    hide: "Ẩn",
    hidePassword: "Ẩn mật khẩu",
    identityProviders: "Nhà cung cấp định danh",
    import: "Nhập",
    initiator: "Người khởi tạo",
    ipAddress: "Địa chỉ IP",
    issuer: "Bên phát hành",
    lastAccessed: "Lần truy cập cuối",
    lastModified: "Lần sửa đổi cuối",
    lastSeen: "Lần xuất hiện cuối",
    lastUpdatedOn: "Lần cập nhật cuối",
    learnMore: "Tìm hiểu thêm",
    lessThanOrEqual: "Nhỏ hơn hoặc bằng",
    lightMode: "Chế độ sáng",
    loading: "Đang tải",
    localeDropdown: {
        groups: {
            default: {
                heading: "Ngôn ngữ tích hợp",
                hint: "Các ngôn ngữ này được hỗ trợ trên mọi màn hình xác thực, khôi phục tài khoản và cổng Tài khoản của tôi.",
                subHeading: "Các ngôn ngữ được hỗ trợ mặc định"
            },
            other: {
                heading: "Ngôn ngữ bổ sung",
                subHeading: "Các ngôn ngữ khác có sẵn cho mẫu này"
            }
        },
        label: "Ngôn ngữ và khu vực",
        placeholder: "Chọn ngôn ngữ và khu vực"
    },
    loginTime: "Thời gian đăng nhập",
    logout: "Đăng xuất",
    makePrimary: "Đặt làm chính",
    maxValidation: "Giá trị này phải nhỏ hơn hoặc bằng {{max}}.",
    maximize: "Phóng to",
    metaAttributes: "Thuộc tính siêu dữ liệu",
    minValidation: "Giá trị này phải lớn hơn hoặc bằng {{min}}.",
    minimize: "Thu nhỏ",
    minutes: "phút",
    more: "Thêm",
    myAccount: "Tài khoản của tôi",
    name: "Tên",
    networkErrorMessage: {
        description: "Vui lòng đăng nhập lại.",
        heading: "Phiên của bạn đã hết hạn",
        primaryActionText: "Đăng nhập"
    },
    new: "Mới",
    next: "Tiếp theo",
    noResultsFound: "Không tìm thấy kết quả",
    none: "Không có",
    okay: "Đồng ý",
    operatingSystem: "Hệ điều hành",
    operationType: "Loại thao tác",
    operations: "Thao tác",
    or: "HOẶC",
    organizationName: "Tổ chức {{orgName}}",
    overview: "Tổng quan",
    parameter: "Tham số",
    pending: "Đang chờ",
    personalInfo: "Thông tin cá nhân",
    pin: "Ghim",
    pinned: "Đã ghim",
    premium: "Cao cấp",
    pressEnterPrompt: "Nhấn <1>Enter</1> để chọn",
    preview: "Xem trước",
    previous: "Trước",
    primary: "Chính",
    priority: "Mức ưu tiên",
    privacy: "Quyền riêng tư",
    properties: "Thuộc tính",
    publish: "Xuất bản",
    ready: "Sẵn sàng",
    regenerate: "Tạo lại",
    register: "Đăng ký",
    reject: "Từ chối",
    rejected: "Đã từ chối",
    remove: "Gỡ bỏ",
    removeAll: "Gỡ bỏ tất cả",
    required: "Trường này là bắt buộc.",
    reserved: "Dành riêng",
    resetFilters: "Đặt lại bộ lọc",
    retry: "Thử lại",
    revert: "Hoàn tác",
    revoke: "Thu hồi",
    revokeAll: "Thu hồi tất cả",
    samples: "Mẫu",
    save: "Lưu",
    saveDraft: "Lưu bản nháp",
    sdks: "SDK",
    search: "Tìm kiếm",
    searching: "Đang tìm kiếm",
    security: "Bảo mật",
    selectAll: "Chọn tất cả",
    selectNone: "Bỏ chọn tất cả",
    services: "Dịch vụ",
    settings: "Cài đặt",
    setup: "Thiết lập",
    show: "Hiển thị",
    showAll: "Hiển thị tất cả",
    showLess: "Thu gọn",
    showMore: "Xem thêm",
    showPassword: "Hiện mật khẩu",
    skip: "Bỏ qua",
    startsWith: "Bắt đầu bằng",
    step: "Bước",
    strong: "Mạnh",
    submit: "Gửi",
    switch: "Chuyển đổi",
    technologies: "Công nghệ",
    terminate: "Kết thúc",
    terminateAll: "Kết thúc tất cả",
    terminateSession: "Kết thúc phiên",
    tooShort: "Quá ngắn",
    type: "Loại",
    unassign: "Bỏ giao",
    unpin: "Bỏ ghim",
    unpinned: "Đã bỏ ghim",
    update: "Cập nhật",
    user: "Người dùng",
    verified: "Đã xác minh",
    verify: "Xác minh",
    view: "Xem",
    viewDetails: "Xem chi tiết",
    weak: "Yếu",
    weakPassword: "Mật khẩu phải có độ mạnh ít nhất ở mức tốt."
};
