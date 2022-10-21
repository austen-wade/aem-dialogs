import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/text";
export interface Text extends CommonAttributes, RenderCondition {
    text?: string;
}
