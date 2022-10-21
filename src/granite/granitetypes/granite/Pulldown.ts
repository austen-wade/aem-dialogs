import { IconSize } from "../../../icons";
import { CommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { RenderCondition } from "./RenderCondition";
import { ActionBarSize, PulldownVariant } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/pulldown";

export interface Pulldown extends CommonAttributes, RenderCondition, GraniteContainer {
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
