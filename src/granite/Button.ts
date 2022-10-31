import { IconSize } from "../icons";
import { ResourceType } from "../types";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { ButtonType, Autocomplete, ButtonSize, ButtonVariant } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";

export interface IButton extends ICommonAttributes, IRenderCondition {
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

export class Button extends GraniteContainer<IButton> {
    constructor(tag: string, options: IButton) {
        super(tag, options, ResourceType.BUTTON);
    }
}
