import { IconSize } from "../../icons";
import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer } from "../GraniteContainer";
import { GraniteNode } from "../GraniteNode";
import { ActiveSelectionCount, RelScope } from "../LiteralTypes";
import { IRenderCondition } from "../RenderCondition";
export interface ICollectionActionLink extends ICommonAttributes, IRenderCondition {
    target?: string;
    activeCount?: number;
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
export declare class CollectionActionLink extends GraniteContainer<ICollectionActionLink> {
    constructor(tag: string, options?: ICollectionActionLink);
}
