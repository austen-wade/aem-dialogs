import { ResourceType } from "../../../types";
import { GraniteNode } from "../../GraniteNode";
import { Container } from "./Container";
import { IDialog } from "./Dialog";

export type IGraniteContainer = Record<any, any>;

export class GraniteContainer<T> extends GraniteNode {
    constructor(tag: string, options?: T, resourceType?: string, items?: GraniteNode[], datasource?: GraniteNode) {
        super(tag, resourceType);

        if (items && items.length > 0) {
            this.items(items);
        } else if (datasource) {
            this.child(datasource);
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof T]);
        }
    }
}

class Dialog extends GraniteContainer<IDialog> {
    constructor(tag: string, options: IDialog) {
        super(tag, options, ResourceType.DIALOG);
    }
}

const graniteNode = new Dialog("dialog", {
    "jcr:title": "Properties",
});

console.log("out", graniteNode.xml());
