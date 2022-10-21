import { CommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { RenderCondition } from "./RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/container";
export interface Container extends CommonAttributes, RenderCondition, GraniteContainer {
    margin?: boolean;

    maximized?: boolean;
}
