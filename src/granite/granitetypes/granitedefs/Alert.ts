import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";
import { AlertSize, StatusVariant } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/alert";

export interface Alert extends CommonAttributes, RenderCondition {
    variant?: StatusVariant;

    size?: AlertSize;

    "jcr:title"?: string;

    text?: string;
}
