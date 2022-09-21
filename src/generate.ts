import { AemNode } from "./AemNode";
import { formatXml } from "./utils";
import { writeFileSync } from "fs";

export function generate(path: string, xml: AemNode) {
    let output = xml.xml(true);
    output = formatXml(output);
    writeFileSync('./output.xml', output, {});
};