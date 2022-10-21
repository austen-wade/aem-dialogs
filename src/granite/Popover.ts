import { ResourceType } from "../types";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";

export interface IPopover extends ICommonAttributes, IRenderCondition, IGraniteContainer {}

export class Popover extends GraniteContainer<IPopover> {
    constructor(tag: string, options?: IPopover) {
        super(tag, options, ResourceType.POPOVER);
    }
}
