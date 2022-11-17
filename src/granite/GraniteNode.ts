import { AemNode } from "../base/AemNode";

export interface GraniteOptions {
    "granite:class"?: string;
}

export class GraniteNode extends AemNode {
    constructor(tag: string, resourceType?: string, options?: GraniteOptions) {
        super(tag, resourceType);

        for (const key in options) {
            this.setProp(key, options[key as keyof GraniteOptions]);
        }
    }
}
