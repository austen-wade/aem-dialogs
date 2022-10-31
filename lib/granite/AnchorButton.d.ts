import { IconSize } from "../icons";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { LinkCheckerSkip, ActionBarSize, AnchorVariant } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";
export interface IAnchorButton extends ICommonAttributes, IRenderCondition {
    href?: string;
    href_i18n?: string;
    target?: string;
    text?: string;
    hideText?: boolean;
    "x-cq-linkchecker"?: LinkCheckerSkip;
    icon?: string;
    iconSize?: IconSize;
    size?: ActionBarSize;
    block?: boolean;
    variant?: AnchorVariant;
    command?: string;
    actionConfigName?: string;
}
export declare class AnchorButton extends GraniteContainer<IAnchorButton> {
    constructor(tag: string, options?: IAnchorButton);
}
