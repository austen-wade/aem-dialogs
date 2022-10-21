import { GraniteNode } from "../../../GraniteNode";
import { GraniteContainer } from "../GraniteContainer";
export interface IPageFragment {
    content: GraniteNode | GraniteNode[];
}
export declare class Fragment extends GraniteContainer<IPageFragment> {
    constructor(tag: string, options?: IPageFragment);
}
