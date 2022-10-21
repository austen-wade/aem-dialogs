import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";
import { HeadingLevel } from "./LiteralTypes";
import { GraniteContainer } from "./GraniteContainer";
export interface IHeading extends ICommonAttributes, IRenderCondition {
    level?: HeadingLevel;
    text?: string;
}
export declare class Heading extends GraniteContainer<IHeading> {
    constructor(tag: string, options?: IHeading);
}
