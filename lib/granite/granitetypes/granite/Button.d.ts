import { IconSize } from "../../../icons";
import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";
import { Autocomplete, ButtonSize, ButtonType, ButtonVariant } from "./LiteralTypes";
import { GraniteContainer } from "./GraniteContainer";
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
export declare class Button extends GraniteContainer<IButton> {
    constructor(tag: string, options: IButton);
}
