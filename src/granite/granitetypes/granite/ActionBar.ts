import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";
import { ActionBarSize } from "./LiteralTypes";
import { GraniteContainer } from "./GraniteContainer";
import { ResourceType } from "../../../types";
import { GraniteNode } from "../../GraniteNode";

export interface IActionBar extends ICommonAttributes, IRenderCondition {
    margin?: boolean;
    size?: ActionBarSize;
    primary: GraniteNode | GraniteNode[];
    secondary?: GraniteNode | GraniteNode[];
}

export class ActionBar extends GraniteContainer<IActionBar> {
    constructor(tag: string, options: IActionBar) {
        super(tag, options, ResourceType.ACTION_BAR, undefined);
    }
}
