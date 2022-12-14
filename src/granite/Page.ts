import { ResourceType } from "../types";
import { GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";

export interface IPage {
    consoleId?: string;
    "jcr:title"?: string;
    redirector?: GraniteNode | GraniteNode[];
    head?: GraniteNode | GraniteNode[];
    body?: GraniteNode | GraniteNode[];
}

export class Page extends GraniteContainer<IPage> {
    constructor(tag: string, options?: IPage) {
        super(tag, options, ResourceType.PAGE);
    }
}
