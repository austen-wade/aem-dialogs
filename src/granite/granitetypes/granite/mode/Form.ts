import { CommonAttributes } from "../CommonAttributes";
import { GraniteContainer } from "../GraniteContainer";
import { RenderCondition } from "../RenderCondition";
import { Mode } from "../LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/mode/form";

export interface ModeForm extends CommonAttributes, RenderCondition, GraniteContainer {
    mode?: Mode;

    group?: string;

    margin?: boolean;

    maximized?: boolean;
}
