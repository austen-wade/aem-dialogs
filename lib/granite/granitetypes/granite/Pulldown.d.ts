import { IconSize } from "../../../icons";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { ActionBarSize, PulldownVariant } from "./LiteralTypes";
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
