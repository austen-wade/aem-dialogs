import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { DisplayMode } from "./LiteralTypes";
export interface ICycleButton extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    displayMode?: DisplayMode;
    variant?: string;
}
export interface ICycleButtonItem extends ICommonAttributes, IRenderCondition {
    selected?: boolean;
    text?: string;
    text_commentI18n?: string;
    icon?: string;
}
export declare class CycleButton extends GraniteContainer<ICycleButton> {
    constructor(tag: string, options?: ICycleButton);
}
export declare class CycleButtonItem extends GraniteContainer<ICycleButtonItem> {
    constructor(tag: string, options?: ICycleButtonItem);
}
