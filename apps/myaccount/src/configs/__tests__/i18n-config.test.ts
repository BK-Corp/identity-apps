import { createInstance, i18n } from "i18next";
import { I18n } from "@wso2is/i18n";
import { Config } from "../app";

vi.mock("../../constants", async () => ({
    I18nConstants: (await import("../../constants/i18n-constants")).I18nConstants
}));
vi.mock("../../constants/app-constants", () => ({ AppConstants: {} }));
vi.mock("../../constants/user-management-constants", () => ({ UserManagementConstants: {} }));
vi.mock("../../extensions/configs/scim", () => ({ SCIMConfigs: {} }));
vi.mock("../../init/app-utils", () => ({ AppUtils: {} }));
vi.mock("../../store", () => ({ store: {} }));

const initialize = async (): Promise<i18n> => {
    const instance: i18n = createInstance();

    I18n.instance = instance;
    await I18n.init({
        ...Config.generateModuleInitOptions({}),
        defaultNS: "common",
        ns: [ "common" ],
        resources: {
            "en-US": { common: { welcome: "Welcome" } },
            "vi-VN": { common: { welcome: "Xin chào" } }
        }
    }, false, true, false);

    return instance;
};

describe("My Account default language", () => {
    beforeEach(() => {
        localStorage.clear();
        document.cookie = "i18next=; Max-Age=0; path=/";
        document.cookie = "ui_lang=en_US; path=/";
        window.history.replaceState({}, "", "/");
        vi.spyOn(window.navigator, "languages", "get").mockReturnValue([ "en-US" ]);
    });

    afterEach(() => {
        localStorage.clear();
        vi.restoreAllMocks();
    });

    it("defaults to Vietnamese even when the browser and login cookie prefer English", async () => {
        const instance: i18n = await initialize();

        expect(instance.language).toBe("vi-VN");
        expect(instance.t("welcome")).toBe("Xin chào");
    });

    it("keeps a saved English choice and allows switching back to Vietnamese", async () => {
        localStorage.setItem("i18nextLng", "en-US");
        const instance: i18n = await initialize();

        expect(instance.t("welcome")).toBe("Welcome");
        await instance.changeLanguage("vi-VN");
        expect(instance.t("welcome")).toBe("Xin chào");
        expect(localStorage.getItem("i18nextLng")).toBe("vi-VN");
    });

    it("honors an explicit query string language", async () => {
        window.history.replaceState({}, "", "/?lng=en-US");
        const instance: i18n = await initialize();

        expect(instance.language).toBe("en-US");
    });
});
