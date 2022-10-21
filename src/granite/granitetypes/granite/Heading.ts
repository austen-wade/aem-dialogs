import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";
import { HeadingLevel } from "./LiteralTypes";
import { GraniteContainer } from "./GraniteContainer";
import { ResourceType } from "../../../types";

export interface IHeading extends ICommonAttributes, IRenderCondition {
    level?: HeadingLevel;
    text?: string;
}
export class Heading extends GraniteContainer<IHeading> {
    constructor(tag: string, options?: IHeading) {
        super(tag, options, ResourceType.HEADING);
    }
}
