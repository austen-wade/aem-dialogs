import { CommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { RenderCondition } from "./RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/list";
export interface List extends CommonAttributes, RenderCondition, GraniteContainer {}
