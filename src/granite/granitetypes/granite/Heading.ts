import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";
import { HeadingLevel } from "./LiteralTypes";

export interface IHeading extends ICommonAttributes, IRenderCondition {
    level?: HeadingLevel;

    text?: string;
}
