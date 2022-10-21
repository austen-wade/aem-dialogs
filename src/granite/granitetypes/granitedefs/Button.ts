import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/button";

export interface Button extends CommonAttributes, RenderCondition {
    type?: string; // < 'button', 'submit', 'reset'

    disabled?: boolean;

    autocomplete?: string; // < 'on', 'off'

    formId?: string;

    text?: string;

    text_commentI18n?: string;

    hideText?: boolean;

    active?: boolean;

    icon?: string;

    iconSize?: string; // < 'XS', 'S', 'M', 'L'

    size?: string; // < 'M', 'L'

    block?: boolean;

    variant?: string; // < 'primary', 'warning', 'quiet', 'minimal', 'actionBar'

    command?: string;

    actionConfigName?: string;

    trackingFeature?: string;

    trackingElement?: string;
}
