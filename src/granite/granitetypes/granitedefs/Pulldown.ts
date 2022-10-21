import { IconSize } from "../../../icons";
import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";
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
