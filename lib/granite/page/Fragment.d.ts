import { GraniteContainer } from "../GraniteContainer";
import { GraniteNode } from "../GraniteNode";
export interface IPageFragment {
    content: GraniteNode | GraniteNode[];
}
export declare class Fragment extends GraniteContainer<IPageFragment> {
    constructor(tag: string, options?: IPageFragment);
}
