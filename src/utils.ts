import { Prop } from "./types";

export function formatXml(xml: string) {
    let formatted = "";
    const reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, "$1\r\n$2$3");
    let pad = 0;

    xml.split("\r\n").forEach(function (node) {
        let indent = 0;
        if (node.match(/.+<\/\w[^>]*>$/)) {
            indent = 0;
        } else if (node.match(/^<\/\w/)) {
            if (pad != 0) {
                pad -= 1;
            }
        } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
            indent = 1;
        } else {
            indent = 0;
        }

        let padding = "";
        for (let i = 0; i < pad; i++) {
            padding += "  ";
        }

        formatted += padding + node + "\r\n";
        pad += indent;
    });

    return formatted;
}

export function getName(name: string) {
    if (name.startsWith("./")) {
        return name;
    }

    return `./${name}`;
}

export function aembool(b: boolean): string {
    if (b) {
        return "{Boolean}true";
    }

    return "{Boolean}false";
}

export function prop(field: string, value: string): Prop {
    return { field, value };
}
