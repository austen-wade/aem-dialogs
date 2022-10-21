import { ResourceType } from "../../../types";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";

interface IContainer extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    margin?: boolean;
    maximized?: boolean;
}

export function Container(tag: string, options?: IContainer): GraniteContainer<IContainer> {
    return new GraniteContainer<IContainer>(tag, options, ResourceType.CONTAINER);
}
