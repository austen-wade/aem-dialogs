import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";

export interface IText extends ICommonAttributes, IRenderCondition {
    text?: string;
}
