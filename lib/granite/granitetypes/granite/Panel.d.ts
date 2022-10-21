import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
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
