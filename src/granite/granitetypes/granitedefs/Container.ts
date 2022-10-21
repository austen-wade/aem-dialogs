import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/container";
export interface Container extends CommonAttributes, RenderCondition, GraniteContainer {
    margin?: boolean;

    maximized?: boolean;
}
