import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer } from "./GraniteContainer";
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
