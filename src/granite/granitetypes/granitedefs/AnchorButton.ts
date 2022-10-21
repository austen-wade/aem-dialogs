import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/anchorbutton";

export interface AnchorButton extends CommonAttributes, RenderCondition {
    href?: string;

    href_i18n?: string;

    target?: string;

    text?: string;

    hideText?: boolean;

    "x-cq-linkchecker"?: string; // < 'skip', 'valid'

    icon?: string;

    iconSize?: string; // < 'XS', 'S', 'M', 'L'

    size?: string; // < 'M', 'L'

    block?: boolean;

    variant?: string; // < 'primary', 'warning', 'quiet', 'minimal', 'actionBar'

    command?: string;

    actionConfigName?: string;
}
