import { ResourceType } from "../../types";
import { GraniteContainer } from "../GraniteContainer";
import { GraniteNode } from "../GraniteNode";

export interface IPageFragment {
    content: GraniteNode | GraniteNode[];
}

export class Fragment extends GraniteContainer<IPageFragment> {
    constructor(tag: string, options?: IPageFragment) {
        super(tag, options, ResourceType.PAGE_FRAGMENT);
    }
}
