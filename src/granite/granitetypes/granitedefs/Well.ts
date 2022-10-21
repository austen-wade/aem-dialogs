import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/well";
export interface Well extends CommonAttributes, RenderCondition, GraniteContainer {
    margin?: boolean;
}
