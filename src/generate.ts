import { AemNode } from "./base/AemNode";
import { formatXml } from "./utils";
import { existsSync, mkdirSync, writeFileSync } from "fs";

export function generate(dirPath: string, xml: AemNode, filename?: string) {
    let output = xml.xml(true);
    const finalFilename = filename || ".content.xml";

    output = formatXml(output);

    if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
    }
    writeFileSync(`${dirPath}/${finalFilename}`, output, {});
}
