import { IconSize } from "../../../icons";
import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";
import { Autocomplete, ButtonSize, ButtonType, ButtonVariant } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/button";

export interface Button extends CommonAttributes, RenderCondition {
    type?: ButtonType;

    disabled?: boolean;

    autocomplete?: Autocomplete;

    formId?: string;

    text?: string;

    text_commentI18n?: string;

    hideText?: boolean;

    active?: boolean;

    icon?: string;

    iconSize?: IconSize;

    size?: ButtonSize;

    block?: boolean;

    variant?: ButtonVariant;

    command?: string;

    actionConfigName?: string;

    trackingFeature?: string;

    trackingElement?: string;
}
