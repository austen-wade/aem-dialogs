import { GraniteNode } from "../../GraniteNode";

export type IGraniteContainer = Record<any, any>;

export class GraniteContainer<T> extends GraniteNode {
    constructor(tag: string, options?: T, resourceType?: string, datasource?: GraniteNode, ...items: GraniteNode[]) {
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
