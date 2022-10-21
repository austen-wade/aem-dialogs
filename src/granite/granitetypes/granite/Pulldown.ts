import { IconSize } from "../../../icons";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { ActionBarSize, PulldownVariant } from "./LiteralTypes";
import { ResourceType } from "../../../types";

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
