import { Prop } from "./types";
import { aembool, getName } from "./utils";

export interface BaseOptions {
    tag?: string;
    name?: string;
}

export class AemNode {
    readonly tag: string;
    props: Prop[];
    readonly children: AemNode[] = [];

    constructor(tag: string, resourceType?: string, props?: Prop[]) {
        this.props = props || [];
        this.addProp("jcr:primaryType", "nt:unstructured");
        this.addProp("sling:resourceType", resourceType);
        this.tag = tag;
    }

    addChild(child: AemNode) {
        this.children.push(child);
    }

    addProp(field: string, value: any) {
        if (typeof value !== undefined) {
            if (typeof value === "boolean") {
                value = aembool(value);
            } else if (field === "name") {
                value = getName(value);
            } else if (Array.isArray(value)) {
                value = value.join(", ");
            }
            this.props.push({ field: field, value: value });
        }
    }

    xml(isRoot?: boolean): string {
        let attributesString = "";

        for (const prop of this.props) {
            if (!prop.value) {
                continue;
            }
            attributesString += ` ${prop.field}="${prop.value}"`;
        }

        let output = `<${this.tag}${attributesString}`;
        if (isRoot) {
            output = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + output;
        }
        if (this.children.length) {
            output += ">";
            for (const child of this.children) {
                output += `${child.xml(false)}`;
            }
            output += `</${this.tag}>`;
        } else {
            output += "/>";
        }

        return output;
    }

    items(children?: AemNode[]): AemNode {
        const items = new AemNode("items");
        this.addChild(items);

        children?.forEach((c) => items.addChild(c));

        return items;
    }
}
