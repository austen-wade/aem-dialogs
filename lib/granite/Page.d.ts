import { GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
export interface IPage {
    consoleId?: string;
    "jcr:title"?: string;
    redirector?: GraniteNode | GraniteNode[];
    head?: GraniteNode | GraniteNode[];
    body?: GraniteNode | GraniteNode[];
}
export declare class Page extends GraniteContainer<IPage> {
    constructor(tag: string, options?: IPage);
}
