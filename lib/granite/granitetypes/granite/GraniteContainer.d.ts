import { GraniteNode } from "../../GraniteNode";
export declare type IGraniteContainer = Record<any, any>;
export declare class GraniteContainer<T> extends GraniteNode {
    constructor(tag: string, options?: T, resourceType?: string, datasource?: GraniteNode, ...items: GraniteNode[]);
}
