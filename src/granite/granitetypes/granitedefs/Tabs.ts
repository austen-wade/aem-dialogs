import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";
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
