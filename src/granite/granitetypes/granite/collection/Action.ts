import { IconSize } from "../../../../icons";
import { ResourceType } from "../../../../types";
import { GraniteNode } from "../../../GraniteNode";
import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer } from "../GraniteContainer";
import { ActiveSelectionCount, RelScope, ActionBarSize, ActionVariant } from "../LiteralTypes";
import { IRenderCondition } from "../RenderCondition";

export interface ICollectionAction extends ICommonAttributes, IRenderCondition {
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

export class CollectionAction extends GraniteContainer<ICollectionAction> {
    constructor(tag: string, options?: ICollectionAction) {
        super(tag, options, ResourceType.COLLECTION_ACTION);
    }
}
