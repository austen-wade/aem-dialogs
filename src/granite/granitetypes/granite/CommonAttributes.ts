import { GraniteNode } from "../../GraniteNode";

export interface CommonAttributes {
    id?: string;
    rel?: string;
    class?: string;
    title?: string;
    hidden?: boolean;
    itemscope?: boolean;
    itemtype?: string;
    itemprop?: string;
    data?: GraniteNode | GraniteNode[];
}
