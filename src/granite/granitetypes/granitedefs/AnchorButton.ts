import { IconSize } from "../../../icons";
import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";
import { ActionBarSize, AnchorVariant, LinkCheckerSkip } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/anchorbutton";

export interface AnchorButton extends CommonAttributes, RenderCondition {
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
