import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";
import { AlertSize, StatusVariant } from "./LiteralTypes";

export interface IAlert extends ICommonAttributes, IRenderCondition {
    variant?: StatusVariant;

    size?: AlertSize;

    "jcr:title"?: string;

    text?: string;
}
