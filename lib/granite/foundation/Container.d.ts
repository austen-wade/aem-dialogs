import { GraniteNode, GraniteOptions } from "../GraniteNode";
export interface ContainerOptions extends GraniteOptions {
    margin?: boolean;
    maximized?: boolean;
}
export declare class Container extends GraniteNode {
    constructor(tag?: string, options?: ContainerOptions);
}
