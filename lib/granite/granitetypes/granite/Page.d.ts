import { GraniteNode } from "../../GraniteNode";
export interface IPage {
    consoleId?: string;
    "jcr:title"?: string;
    redirector?: GraniteNode | GraniteNode[];
    head?: GraniteNode | GraniteNode[];
    body?: GraniteNode | GraniteNode[];
}
