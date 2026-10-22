/**
 * LGSP dev tool: translate en-US portals to vi-VN through one global string table.
 *
 *   vite-node scripts/vi-tool.ts init            build translations-src/vi-VN/strings.en.json (+ seed from existing vi-VN)
 *   vite-node scripts/vi-tool.ts todo <from> <n> print untranslated entries "id<TAB>english"
 *   vite-node scripts/vi-tool.ts merge <file>    merge {"id": "vi"} into strings.vi.json (placeholder-checked)
 *   vite-node scripts/vi-tool.ts status          translated/total per namespace
 *   vite-node scripts/vi-tool.ts build           write src/translations/vi-VN/portals/*.ts from the table
 *
 * Source of truth: translations-src/vi-VN/*.json. Strings with no entry stay English, so partial runs are shippable.
 */
/* eslint-disable no-console */
import * as fs from "fs";
import * as path from "path";
import * as enPortals from "../src/translations/en-US/portals";
import * as viPortals from "../src/translations/vi-VN/portals";

const ROOT: string = path.resolve(__dirname, "..");
const SRC: string = path.join(ROOT, "translations-src/vi-VN");
const EN_DIR: string = path.join(ROOT, "src/translations/en-US/portals");
const VI_DIR: string = path.join(ROOT, "src/translations/vi-VN/portals");
const EN_FILE: string = path.join(SRC, "strings.en.json");
const VI_FILE: string = path.join(SRC, "strings.vi.json");
// Hand-written, fully reviewed bundles: used as a seed, never regenerated.
// Console "extensions" namespace lives in the app, not in the i18n module.
const EXT_DIR: string = path.resolve(ROOT, "../../apps/console/src/extensions/i18n/resources");
// Loaded lazily from a computed path so Nx does not infer an i18n -> console project dependency (it would be circular).
let enExtensions: Record<string, unknown> = {};
const HAND_WRITTEN: string[] = [ "common", "commonUsers", "myAccount" ];
// Translate the screens people use daily first.
const ORDER: string[] = [
    "users", "user", "groups", "roles", "applicationRoles", "invite", "parentOrgInvitations", "claims", "userstores",
    "remoteUserStores", "validation", "pages", "consoleSettings", "branding", "emailTemplates", "emailLocale",
    "smsProviders", "smsTemplates", "transferList", "organizations", "suborganizations", "organizationDiscovery",
    "authenticationFlow", "flows", "flowExtension", "governanceConnectors", "serverConfigs", "sessionManagement",
    "impersonation", "certificates", "secrets", "actions", "webhooks", "approvalWorkflows", "workflowRequests",
    "authenticationProvider", "applications", "idp", "applicationTemplates", "templateCore", "oidcScopes",
    "apiResources", "saml2Config", "wsFederationConfig", "console"
];

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };
type Leaf = { path: string[]; value: string };

const PLACEHOLDER: RegExp = /{{.*?}}|<\/?[A-Za-z0-9]+[^>]*>/g;
const hasLetters = (s: string): boolean => /[A-Za-z]/.test(s.replace(PLACEHOLDER, "").replace(/\\u[0-9a-f]{4}/gi, ""));
const tokens = (s: string): string[] => (s.match(PLACEHOLDER) ?? []).sort();

const leaves = (node: Json, trail: string[] = [], out: Leaf[] = []): Leaf[] => {
    if (typeof node === "string") {
        out.push({ path: trail, value: node });
    } else if (node && typeof node === "object") {
        Object.entries(node).forEach(([ key, value ]: [ string, Json ]) => leaves(value, [ ...trail, key ], out));
    }

    return out;
};

const readJson = <T>(file: string, fallback: T): T =>
    fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) as T : fallback;

const namespaces = (): string[] => {
    const names: string[] = Object.keys(enPortals).filter((n: string) => !HAND_WRITTEN.includes(n));

    return [ ...ORDER.filter((n: string) => names.includes(n)), ...names.filter((n: string) => !ORDER.includes(n)) ];
};

const init = (): void => {
    const table: string[] = readJson<string[]>(EN_FILE, []);
    const known: Set<string> = new Set(table);
    const seed: Record<string, string> = readJson<Record<string, string>>(VI_FILE, {});
    const added: string[] = [];

    for (const ns of [ ...HAND_WRITTEN, ...namespaces() ]) {
        const en: Leaf[] = leaves(enPortals[ns] as Json);
        const vi: Map<string, string> = new Map(leaves((viPortals[ns] ?? {}) as Json).map(
            (l: Leaf) => [ l.path.join("\u0001"), l.value ]
        ));

        for (const leaf of en) {
            if (!hasLetters(leaf.value)) continue;
            if (!known.has(leaf.value)) {
                known.add(leaf.value);
                table.push(leaf.value);
                added.push(leaf.value);
            }
            const translated: string | undefined = vi.get(leaf.path.join("\u0001"));
            const id: string = String(table.indexOf(leaf.value));

            if (translated && translated !== leaf.value && !seed[id] && tokens(translated).join() === tokens(leaf.value).join()) {
                seed[id] = translated;
            }
        }
    }
    for (const leaf of leaves(enExtensions as unknown as Json)) {
        if (hasLetters(leaf.value) && !known.has(leaf.value)) {
            known.add(leaf.value);
            table.push(leaf.value);
            added.push(leaf.value);
        }
    }
    fs.mkdirSync(SRC, { recursive: true });
    fs.writeFileSync(EN_FILE, JSON.stringify(table, null, 0).replace(/","/g, "\",\n\""));
    fs.writeFileSync(VI_FILE, JSON.stringify(seed, null, 0).replace(/","/g, "\",\n\""));
    console.log(`strings: ${ table.length } (+${ added.length }), translated: ${ Object.keys(seed).length }`);
};

const table = (): string[] => readJson<string[]>(EN_FILE, []);
const vi = (): Record<string, string> => readJson<Record<string, string>>(VI_FILE, {});

const todo = (from: number, count: number): void => {
    const done: Record<string, string> = vi();
    const entries: string[] = table().map((s: string, i: number) => `${ i }\t${ s.replace(/\n/g, "\\n") }`)
        .filter((_: string, i: number) => !done[i]);

    console.log(entries.slice(from, from + count).join("\n"));
    console.log(`# remaining: ${ entries.length }`);
};

const merge = (file: string): void => {
    const strings: string[] = table();
    const done: Record<string, string> = vi();
    const incoming: Record<string, string> = JSON.parse(fs.readFileSync(file, "utf8"));
    let ok: number = 0;

    for (const [ id, text ] of Object.entries(incoming)) {
        const english: string | undefined = strings[Number(id)];

        if (english === undefined) { console.error(`bad id ${ id }`); continue; }
        if (tokens(text).join() !== tokens(english).join()) {
            console.error(`PLACEHOLDER MISMATCH ${ id }: ${ english }  =>  ${ text }`);
            continue;
        }
        done[id] = text;
        ok++;
    }
    fs.writeFileSync(VI_FILE, JSON.stringify(done, null, 0).replace(/","/g, "\",\n\""));
    console.log(`merged ${ ok }/${ Object.keys(incoming).length }; total ${ Object.keys(done).length }/${ strings.length }`);
};

const status = (): void => {
    const strings: string[] = table();
    const done: Record<string, string> = vi();
    const index: Map<string, number> = new Map(strings.map((s: string, i: number) => [ s, i ]));
    let all: number = 0;
    let translated: number = 0;

    for (const ns of [ ...namespaces(), "extensions" ]) {
        const l: Leaf[] = leaves((ns === "extensions" ? enExtensions : enPortals[ns]) as unknown as Json).filter((x: Leaf) => hasLetters(x.value));
        const t: number = l.filter((x: Leaf) => done[index.get(x.value) as number]).length;

        all += l.length;
        translated += t;
        console.log(`${ ns.padEnd(28) } ${ String(t).padStart(5) }/${ String(l.length).padEnd(5) }`);
    }
    console.log(`TOTAL ${ translated }/${ all }`);
};

const key = (k: string): string => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) || /^(0|[1-9][0-9]*)$/.test(k)
    ? k : JSON.stringify(k);

const render = (node: Json, map: (s: string) => string, depth: number): string => {
    const pad: string = "    ".repeat(depth + 1);

    if (typeof node === "string") return JSON.stringify(map(node));
    if (Array.isArray(node)) {
        return `[ ${ node.map((n: Json) => render(n, map, depth + 1)).join(", ") } ]`;
    }
    if (node && typeof node === "object") {
        const body: string[] = Object.entries(node).map(
            ([ k, v ]: [ string, Json ]) => `${ pad }${ key(k) }: ${ render(v, map, depth + 1) }`
        );

        return body.length ? `{\n${ body.join(",\n") }\n${ "    ".repeat(depth) }}` : "{}";
    }

    return JSON.stringify(node);
};

const build = (): void => {
    const strings: string[] = table();
    const done: Record<string, string> = vi();
    const index: Map<string, number> = new Map(strings.map((s: string, i: number) => [ s, i ]));
    const files: string[] = fs.readdirSync(EN_DIR).filter((f: string) => f.endsWith(".ts") && f !== "index.ts");
    const exports: string[] = [ ...HAND_WRITTEN.map((n: string) => n) ];
    const stems: string[] = [];

    for (const file of files) {
        const text: string = fs.readFileSync(path.join(EN_DIR, file), "utf8");
        const decl: RegExpMatchArray | null = text.match(/export const (\w+)\s*:\s*(\w+)\s*=/);

        if (!decl || HAND_WRITTEN.includes(decl[1])) continue;
        const name: string = decl[1];
        const head: string = text.slice(0, text.indexOf("export const")).replace(/\/\*\*\n \* NOTES[\s\S]*?\*\/\n/, "");
        const body: string = render(enPortals[name] as Json, (s: string) => done[index.get(s) as number] ?? s, 0);
        const license: string = text.slice(0, text.indexOf("*/") + 2);
        const imports: string = head.slice(license.length).trim();

        fs.writeFileSync(path.join(VI_DIR, file),
            `${ license }\n\n${ imports }\n\n` +
            "/* Generated by scripts/vi-tool.ts from translations-src/vi-VN. Do not edit by hand. */\n" +
            "/* eslint-disable max-len, sort-keys */\n" +
            `export const ${ name }: ${ decl[2] } = ${ body };\n`);
        stems.push(file.replace(/\.ts$/, ""));
        exports.push(name);
    }
    const extText: string = fs.readFileSync(path.join(EXT_DIR, "en-US/extensions.ts"), "utf8");
    const extDecl: RegExpMatchArray | null = extText.match(/export const (\w+)\s*:\s*(\w+)\s*=/);

    if (extDecl) {
        const license: string = extText.slice(0, extText.indexOf("*/") + 2);
        const imports: string = extText.slice(license.length, extText.indexOf("export const"))
            .replace(/\/\*\*\n \* NOTES[\s\S]*?\*\/\n/, "").trim();
        const body: string = render(enExtensions as unknown as Json, (v: string) => done[index.get(v) as number] ?? v, 0);

        fs.mkdirSync(path.join(EXT_DIR, "vi-VN"), { recursive: true });
        fs.writeFileSync(path.join(EXT_DIR, "vi-VN/extensions.ts"),
            `${ license }\n\n${ imports }\n\n` +
            "/* Generated by modules/i18n/scripts/vi-tool.ts from translations-src/vi-VN. Do not edit by hand. */\n" +
            "/* eslint-disable max-len, sort-keys */\n" +
            `export const extensions: ${ extDecl[2] } = ${ body };\n`);
        fs.writeFileSync(path.join(EXT_DIR, "vi-VN/index.ts"),
            `${ license }\n\nimport { extensions } from "./extensions";\nimport { ExtensionsBundle } from "../../models";\n\n` +
            "export const viVn: ExtensionsBundle = {\n    extensions: extensions,\n    name: \"vi-VN\"\n};\n");
        const rootIndex: string = path.join(EXT_DIR, "index.ts");
        const rootText: string = fs.readFileSync(rootIndex, "utf8");

        if (!rootText.includes("./vi-VN")) {
            fs.writeFileSync(rootIndex, rootText.trimEnd() + "\nexport * from \"./vi-VN\";\n");
        }
    }
    const handFiles: string[] = [ "common", "common-users", "myaccount" ];
    const lines: string[] = [ ...handFiles, ...stems ].sort().map((s: string) => `export * from "./${ s }";`);
    const indexFile: string = path.join(VI_DIR, "index.ts");
    const indexText: string = fs.readFileSync(indexFile, "utf8");

    fs.writeFileSync(indexFile, `${ indexText.slice(0, indexText.indexOf("*/") + 2) }\n\n${ lines.join("\n") }\n`);
    console.log(`wrote ${ stems.length } vi-VN namespace files`);
};

const [ , , command, a, b ] = process.argv;

(async (): Promise<void> => {
    enExtensions = (await import(path.join(EXT_DIR, "en-US", "extensions"))).extensions;
    ({
        build,
        init,
        merge: () => merge(a),
        status,
        todo: () => todo(Number(a ?? 0), Number(b ?? 100))
    }[command] ?? (() => console.error("usage: init|todo|merge|status|build")))();
})();
