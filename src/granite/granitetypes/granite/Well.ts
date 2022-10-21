import { ResourceType } from "../../../types";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";

export interface IWell extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    margin?: boolean;
}

export class Well extends GraniteContainer<IWell> {
    constructor(tag: string, options?: IWell) {
        super(tag, options, ResourceType.WELL);
    }
}
