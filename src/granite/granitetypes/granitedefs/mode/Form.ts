import { CommonAttributes } from "../../granite/CommonAttributes";
import { GraniteContainer } from "../../granite/GraniteContainer";
import { RenderCondition } from "../../granite/RenderCondition";
import { Mode } from "../LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/mode/form";

export interface ModeForm extends CommonAttributes, RenderCondition, GraniteContainer {
    mode?: Mode;

    group?: string;

    margin?: boolean;

    maximized?: boolean;
}
