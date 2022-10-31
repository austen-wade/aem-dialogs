import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
import { ActionBarSize } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";
export interface IActionBar extends ICommonAttributes, IRenderCondition {
    margin?: boolean;
    size?: ActionBarSize;
    primary: GraniteNode | GraniteNode[];
    secondary?: GraniteNode | GraniteNode[];
}
export declare class ActionBar extends GraniteContainer<IActionBar> {
    constructor(tag: string, options: IActionBar);
}
