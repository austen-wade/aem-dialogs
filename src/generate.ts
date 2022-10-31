import { AemNode } from "./base/AemNode";
import { formatXml } from "./utils";
import { existsSync, mkdirSync, writeFileSync } from "fs";

export function generate(dirPath: string, xml: AemNode) {
    let output = xml.xml(true);
    output = formatXml(output);

    if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
    }
    writeFileSync(`${dirPath}/.content.xml`, output, {});
}
