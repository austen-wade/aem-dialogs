import { IconSize } from "../icons";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { ActionBarSize, PulldownVariant } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";
export interface IPulldown extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    text?: string;
    hideText?: boolean;
    icon?: string;
    iconSize?: IconSize;
    size?: ActionBarSize;
    block?: boolean;
    variant?: PulldownVariant;
    trackingFeature?: string;
    trackingElement?: string;
}
export declare class Pulldown extends GraniteContainer<IPulldown> {
    constructor(tag: string, options?: IPulldown);
}
