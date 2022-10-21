import { IconSize } from "../../../../icons";
import { GraniteNode } from "../../../GraniteNode";
import { ICommonAttributes } from "../CommonAttributes";
import { IRenderCondition } from "../RenderCondition";
import { ActiveSelectionCount, RelScope } from "../LiteralTypes";

export interface ICollectionActionLink extends ICommonAttributes, IRenderCondition {
    target?: string;

    activeCount?: number; // = ">=0"

    activeSelectionCount?: ActiveSelectionCount;

    activeCondition?: string;

    action?: string;

    command?: string;

    actionConfigName?: string;

    relScope?: RelScope;

    ignoreRel?: boolean;

    text?: string;

    text_commentI18n?: string;

    hideText?: boolean;

    icon?: string;

    href?: string;

    rel?: string;

    iconSize?: IconSize;

    trackingFeature?: string;

    trackingElement?: string;

    trackingWidgetName?: string;

    data?: GraniteNode | GraniteNode[];
}
