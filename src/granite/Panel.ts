import { ResourceType } from "../types";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
import { IRenderCondition } from "./RenderCondition";

export interface IPanel extends ICommonAttributes, IRenderCondition {
    margin?: boolean;
    header?: GraniteNode | GraniteNode[];
    body: GraniteNode | GraniteNode[];
    rail?: GraniteNode | GraniteNode[];
    footer?: GraniteNode | GraniteNode[];
}
export interface IPanelRailParentconfig {
    active?: boolean;
}

export class Panel extends GraniteContainer<IPanel> {
    constructor(tag: string, options?: IPanel) {
        super(tag, options, ResourceType.PANEL);
    }
}
export class PanelRailParentconfig extends GraniteContainer<IPanelRailParentconfig> {
    constructor(tag: string, options?: IPanelRailParentconfig) {
        super(tag, options);
    }
}
