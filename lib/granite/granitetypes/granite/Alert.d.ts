import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";
import { AlertSize, StatusVariant } from "./LiteralTypes";
import { GraniteContainer } from "./GraniteContainer";
export interface IAlert extends ICommonAttributes, IRenderCondition {
    variant?: StatusVariant;
    size?: AlertSize;
    "jcr:title"?: string;
    text?: string;
}
export declare class Alert extends GraniteContainer<IAlert> {
    constructor(tag: string, options?: IAlert);
}
