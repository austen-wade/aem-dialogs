// import { RichText } from "../granite/form";
import { Prop } from "../types";
import { aembool, getName } from "../utils";

export interface BaseOptions {
    tag?: string;
}

export class AemNode {
    readonly tag: string;
    props: Prop[];
    readonly children: AemNode[] = [];

    constructor(tag: string, resourceType?: string, props?: Prop[]) {
        this.props = props || [];
        if (!props?.find(prop => prop.field === "jcr:primaryType")) {
            this.setProp("jcr:primaryType", "nt:unstructured");
        }
        this.setProp("sling:resourceType", resourceType);
        this.tag = tag;
    }

    private addChild(child: AemNode) {
        if (!this.children.find((c) => c.tag === child.tag)) {
            this.children.push(child);
        }
    }

    child(child: AemNode | AemNode[]): AemNode {
        if (Array.isArray(child)) {
            child.forEach((c) => this.addChild(c));
        } else {
            this.addChild(child);
        }

        return this;
    }

    items(children?: AemNode[]): AemNode {
        const items = new AemNode("items");
        this.child(items);

        children?.forEach((c) => items.child(c));

        return this;
    }

    setProp(field: string, value: any) {
        if (typeof value !== undefined) {
            if (typeof value === "boolean") {
                value = aembool(value);
            } else if (field === "name") {
                value = getName(value);
            } else if (Array.isArray(value)) {
                value = value.join(", ");
            }
            
            if (typeof value === "string") {
                value = value.replace(/&/g, "&amp;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&apos;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
            }

            this.removeProp(field);
            this.props.push({ field, value });
        }
    }

    removeProp(field: string) {
        this.props = this.props.filter((prop) => prop.field !== field);
    }

    private renderXmlTree(tagName: string, attributes: Prop[], children: AemNode[], isRoot?: boolean) {
        let attributesString = "";

        for (const prop of attributes) {
            if (!prop.value) {
                continue;
            }
            attributesString += ` ${prop.field}="${prop.value}"`;
        }

        let output = `<${tagName}${attributesString}`;

        if (isRoot) {
            output = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + output;
        }

        if (children.length) {
            output += ">";

            for (const child of children) {
                output += `${child.xml(false)}`;
            }
            output += `</${tagName}>`;
        } else {
            output += "/>";
        }

        return output;
    }

    xml(isRoot?: boolean): string {
        // if (this instanceof RichText) {
        //     this.child(this.generateConfig());
        // }

        return this.renderXmlTree(this.tag, this.props, this.children, isRoot);
    }
}
