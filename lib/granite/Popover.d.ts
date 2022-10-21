import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
export interface IPopover extends ICommonAttributes, IRenderCondition, IGraniteContainer {
}
export declare class Popover extends GraniteContainer<IPopover> {
    constructor(tag: string, options?: IPopover);
}
