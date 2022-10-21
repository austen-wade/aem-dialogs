import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { HeadingLevel } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";
export interface IHeading extends ICommonAttributes, IRenderCondition {
    level?: HeadingLevel;
    text?: string;
}
export declare class Heading extends GraniteContainer<IHeading> {
    constructor(tag: string, options?: IHeading);
}
