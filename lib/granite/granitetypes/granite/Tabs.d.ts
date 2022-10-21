import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { Orientation, TabsSize } from "./LiteralTypes";
export interface ITabs extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    orientation?: Orientation;
    size?: TabsSize;
    margin?: boolean;
    maximized?: boolean;
    trackingFeature?: string;
    trackingWidgetName?: string;
}
export interface ITabsItem {
    "jcr:title": string;
    trackingElement?: string;
    parentConfig?: GraniteNode | GraniteNode[];
}
export interface ITabsItemParentconfig {
    active?: boolean;
    icon?: string;
}
export declare class Tabs extends GraniteContainer<ITabs> {
    constructor(tag: string, options?: ITabs);
}
export declare class TabsItem extends GraniteContainer<ITabsItem> {
    constructor(tag: string, options?: ITabsItem);
}
export declare class TabsItemParentconfig extends GraniteContainer<ITabsItemParentconfig> {
    constructor(tag: string, options?: ITabsItemParentconfig);
}
