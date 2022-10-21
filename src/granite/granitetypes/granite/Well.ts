import { CommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { RenderCondition } from "./RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/well";
export interface Well extends CommonAttributes, RenderCondition, GraniteContainer {
    margin?: boolean;
}
