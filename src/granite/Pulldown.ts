import { IconSize } from "../icons";
import { ResourceType } from "../types";
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

export class Pulldown extends GraniteContainer<IPulldown> {
    constructor(tag: string, options?: IPulldown) {
        super(tag, options, ResourceType.PULLDOWN);
    }
}
