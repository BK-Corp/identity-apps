import * as fs from "fs";
import * as path from "path";
import { EN_US, VI_VN } from "../translations";
import { I18nModuleConstants } from "../constants";

const flatten = (value: unknown, prefix: string = ""): Record<string, unknown> => {
    if (value !== null && typeof value === "object") {
        return Object.fromEntries(Object.entries(value).flatMap(([ key, child ]: [string, unknown]) =>
            Object.entries(flatten(child, prefix ? `${prefix}.${key}` : key))));
    }

    return { [prefix]: value };
};

describe("Vietnamese My Account translations", () => {
    it("registers Vietnamese for the three My Account namespaces", () => {
        expect(VI_VN.meta).toMatchObject({ code: "vi-VN", direction: "ltr", flag: "vn" });
        expect(VI_VN.meta.namespaces).toEqual(expect.arrayContaining([
            I18nModuleConstants.COMMON_NAMESPACE,
            I18nModuleConstants.MY_ACCOUNT_NAMESPACE,
            I18nModuleConstants.COMMON_USERS_NAMESPACE
        ]));
        expect(VI_VN.meta.namespaces).toEqual(EN_US.meta.namespaces);
    });

    it.each(Object.keys(EN_US.resources.portals))("%s has the en-US keys and placeholders", (namespace: string) => {
        const english: Record<string, unknown> = flatten(EN_US.resources.portals[namespace]);
        const vietnamese: Record<string, unknown> = flatten(VI_VN.resources.portals[namespace]);

        expect(Object.keys(vietnamese).sort()).toEqual(Object.keys(english).sort());
        for (const [ key, value ] of Object.entries(english)) {
            if (typeof value !== "string") {
                expect(vietnamese[key]).toEqual(value);
                continue;
            }
            const translated: string = vietnamese[key] as string;

            expect(typeof translated, key).toBe("string");
            expect(translated.match(/{{.*?}}|<\/?\d+>/g)?.sort() ?? [], key)
                .toEqual(value.match(/{{.*?}}|<\/?\d+>/g)?.sort() ?? []);
            if (value.trim()) {
                expect(translated.trim().length, key).toBeGreaterThan(0);
            }
        }
    });

    it("has a Vietnamese entry for every string in the translation table", () => {
        const english: string[] = JSON.parse(fs.readFileSync(path.join(__dirname, "../../translations-src/vi-VN/strings.en.json"), "utf8"));
        const vietnamese: Record<string, string> = JSON.parse(
            fs.readFileSync(path.join(__dirname, "../../translations-src/vi-VN/strings.vi.json"), "utf8"));

        expect(english.map((_: string, id: number) => String(id)).filter((id: string) => !vietnamese[id])).toEqual([]);
    });

    it("uses Vietnamese labels on the main navigation and security flows", () => {
        expect(VI_VN.resources.portals.common.myAccount).toBe("Tài khoản của tôi");
        expect(VI_VN.resources.portals.common.security).toBe("Bảo mật");
        expect(VI_VN.resources.portals.common.personalInfo).toBe("Thông tin cá nhân");
        expect(VI_VN.resources.portals.myAccount.sections.changePassword.heading).toBe("Đổi mật khẩu");
    });
});
