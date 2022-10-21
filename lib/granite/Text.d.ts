import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
export interface IText extends ICommonAttributes, IRenderCondition {
    text?: string;
}
export declare class Text extends GraniteContainer<IText> {
    constructor(tag: string, options?: IText);
}
