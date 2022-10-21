import { CommonAttributes } from "./CommonAttributes";
import { RenderCondition } from "./RenderCondition";
import { HeadingLevel } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/heading";

export interface Heading extends CommonAttributes, RenderCondition {
    level?: HeadingLevel;

    text?: string;
}
