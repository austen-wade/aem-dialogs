import { AemNode } from "../base/AemNode";
import { Prop } from "../types";
export interface GraniteOptions {
    "granite:class"?: string;
}
export declare class GraniteNode extends AemNode {
    constructor(tag: string, resourceType?: string, props?: Prop[], options?: GraniteOptions);
}
