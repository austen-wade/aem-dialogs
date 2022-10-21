import { IconSize } from "../../../icons";
import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";
import { ActionBarSize, ActionVariant, ActiveSelectionCount, RelScope } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/collection/action";

export interface CollectionAction extends CommonAttributes, RenderCondition {
    target?: string;

    activeCount?: number; // = ">=0"

    activeSelectionCount?: ActiveSelectionCount;

    activeCondition?: string;

    action?: string;

    command?: string;

    actionConfigName?: string;

    relScope?: RelScope;

    ignoreRel?: boolean;

    disabled?: boolean;

    text?: string;

    text_commentI18n?: string;

    hideText?: boolean;

    icon?: string;

    iconSize?: IconSize;

    size?: ActionBarSize;

    block?: boolean;

    variant?: ActionVariant;

    trackingFeature?: string;

    trackingElement?: string;

    trackingWidgetName?: string;

    data?: GraniteNode | GraniteNode[];
}
