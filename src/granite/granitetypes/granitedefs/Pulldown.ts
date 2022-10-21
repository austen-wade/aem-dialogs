import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/pulldown";

export interface Pulldown extends CommonAttributes, RenderCondition, GraniteContainer {
    text?: string;

    hideText?: boolean;

    icon?: string;

    iconSize?: string; // < 'XS', 'S', 'M', 'L'

    size?: string; // < 'M', 'L'

    block?: boolean;

    variant?: string; // < 'primary', 'warning', 'quiet', 'minimal', 'actionBar'

    trackingFeature?: string;

    trackingElement?: string;
}
