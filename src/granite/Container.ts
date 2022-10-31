import { ResourceType } from "../types";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";

interface IContainer extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    margin?: boolean;
    maximized?: boolean;
}

export class Container extends GraniteContainer<IContainer> {
    constructor(tag: string, options?: IContainer) {
        super(tag, options, ResourceType.CONTAINER);
    }
}
