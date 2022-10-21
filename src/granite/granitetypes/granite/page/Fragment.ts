import { ResourceType } from "../../../../types";
import { GraniteNode } from "../../../GraniteNode";
import { GraniteContainer } from "../GraniteContainer";

export interface IPageFragment {
    content: GraniteNode | GraniteNode[];
}

export class Fragment extends GraniteContainer<IPageFragment> {
    constructor(tag: string, options?: IPageFragment) {
        super(tag, options, ResourceType.PAGE_FRAGMENT);
    }
}
