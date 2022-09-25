import { Prop } from "./types";
import { aembool, getName } from "./utils";

export interface BaseOptions {
    "granite:class"?: string;
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

    child(child: AemNode | AemNode[]): AemNode {
        if (Array.isArray(child)) {
            child.forEach(c => this.children.push(c));
        } else {
            this.children.push(child);
        }

        return this;
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

    /* TODO: Items should not allow duplicate items */
    items(children?: AemNode[]): AemNode {
        const items = new AemNode("items");
        this.child(items);

        children?.forEach((c) => items.child(c));

        return this;
    }
}
