import { ResourceType } from "./types";

type Attributes = Record<string, string>;

export class AemNode {
    name: string;
    attributes: Attributes = {};
    children: AemNode[] = [];

    constructor(theName: string, theAttributes?: Attributes, resourceType?: ResourceType) {
        this.name = theName;

        if (theAttributes) {
            this.attributes = theAttributes;
        }
        this.setAttribute('jcr:primaryType', 'nt:unstructured');

        if (resourceType && !this.attributes['sling:resourceType']) {
            this.setResourceType(resourceType);
        }
    }

    addChild(child: AemNode) {
        this.children.push(child);
    }

    setAttribute(name: string, value: string) {
        this.attributes[name] = value;
    }

    setResourceType(value: ResourceType) {
        this.attributes["sling:resourceType"] = value;
    }

    xml(isRoot?: boolean): string {
        let attributesString: string = "";

        for (const prop in this.attributes) {
            attributesString += ` ${prop}="${this.attributes[prop]}"`
        }

        let output = `<${this.name}${attributesString}`
        if (isRoot) {
            output = `<?xml version="1.0" encoding="UTF-8"?>` + output
        }
        if (this.children.length) {
            output += `>`;
            for (const child of this.children) {
                output += `${child.xml(false)}`;
            }
            output += `</${this.name}>`;
        } else {
            output += `/>`;
        }

        return output;
    }

    items(children?: AemNode[]): AemNode {
        let items = new AemNode('items');
        this.addChild(items);

        children?.forEach(c =>
            items.addChild(c)
        );

        return items;
    }
}