import { ResourceType } from "../types";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
import { Orientation, TabsSize } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";

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

export class Tabs extends GraniteContainer<ITabs> {
    constructor(tag: string, options?: ITabs) {
        super(tag, options, ResourceType.TABS);
    }
}

export class TabsItem extends GraniteContainer<ITabsItem> {
    constructor(tag: string, options?: ITabsItem) {
        super(tag, options);
    }
}

export class TabsItemParentconfig extends GraniteContainer<ITabsItemParentconfig> {
    constructor(tag: string, options?: ITabsItemParentconfig) {
        super(tag, options);
    }
}
