import { ResourceType } from "../types";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { StatusVariant, AlertSize } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";

export interface IAlert extends ICommonAttributes, IRenderCondition {
    variant?: StatusVariant;
    size?: AlertSize;
    "jcr:title"?: string;
    text?: string;
}

export class Alert extends GraniteContainer<IAlert> {
    constructor(tag: string, options?: IAlert) {
        super(tag, options, ResourceType.ALERT);
    }
}
