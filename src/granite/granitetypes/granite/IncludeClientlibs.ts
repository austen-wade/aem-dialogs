import { ResourceType } from "../../../types";
import { GraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";

export interface IIncludeClientlibs extends IRenderCondition {
    categories?: string[];
    js?: string[];
    css?: string[];
}

export class IncludeClientlibs extends GraniteContainer<IIncludeClientlibs> {
    constructor(tag: string, options?: IIncludeClientlibs) {
        super(tag, options, ResourceType.INCLUDE_CLIENTLIBS);
    }
}
