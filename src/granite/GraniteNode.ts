import { AemNode } from "../base/AemNode";
import { Prop } from "../types";

export interface GraniteOptions {
    "granite:class"?: string;
}

export class GraniteNode extends AemNode {
    constructor(tag: string, resourceType?: string, props?: Prop[], options?: GraniteOptions) {
        super(tag, resourceType);

        for (const key in options) {
            this.setProp(key, options[key as keyof GraniteOptions]);
        }
    }
}
