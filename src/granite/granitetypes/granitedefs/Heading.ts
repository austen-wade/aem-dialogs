import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";
import { HeadingLevel } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/heading";

export interface Heading extends CommonAttributes, RenderCondition {
    level?: HeadingLevel;

    text?: string;
}
