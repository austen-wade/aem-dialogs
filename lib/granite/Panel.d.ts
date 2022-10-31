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
export declare class Panel extends GraniteContainer<IPanel> {
    constructor(tag: string, options?: IPanel);
}
export declare class PanelRailParentconfig extends GraniteContainer<IPanelRailParentconfig> {
    constructor(tag: string, options?: IPanelRailParentconfig);
}
