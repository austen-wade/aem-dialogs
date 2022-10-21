import { CommonAttributes } from "./CommonAttributes";
import { RenderCondition } from "./RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/text";
export interface Text extends CommonAttributes, RenderCondition {
    text?: string;
}
