import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { RenderCondition } from "./RenderCondition";
import { Orientation, TabsSize } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/tabs";
export interface Tabs extends CommonAttributes, RenderCondition, GraniteContainer {
    orientation?: Orientation;
    size?: TabsSize;
    margin?: boolean;
    maximized?: boolean;
    trackingFeature?: string;
    trackingWidgetName?: string;
}

export interface TabsItem {
    "jcr:title": string;
    trackingElement?: string;
    parentConfig?: GraniteNode | GraniteNode[];
}

export interface TabsItemParentconfig {
    active?: boolean;
    icon?: string;
}
