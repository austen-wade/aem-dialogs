import { AemNode } from "../base/AemNode";
export interface GraniteOptions {
    "granite:class"?: string;
}
export declare class GraniteNode extends AemNode {
    constructor(tag: string, resourceType?: string, options?: GraniteOptions);
}
