import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";
import { AlertSize, StatusVariant } from "./LiteralTypes";
import { GraniteContainer } from "./GraniteContainer";
import { ResourceType } from "../../../types";

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
