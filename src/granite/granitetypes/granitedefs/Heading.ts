import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/heading";

export interface Heading extends CommonAttributes, RenderCondition {
    level?: number; // < 1, 2, 3, 4, 5, 6

    text?: string;
}
