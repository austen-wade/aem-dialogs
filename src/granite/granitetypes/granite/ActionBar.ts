import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";
import { ActionBarSize } from "./LiteralTypes";

export interface IActionBar extends ICommonAttributes, IRenderCondition {
    margin?: boolean;

    size?: ActionBarSize;

    primary: GraniteNode | GraniteNode[];

    secondary?: GraniteNode | GraniteNode[];
}
