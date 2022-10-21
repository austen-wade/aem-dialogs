import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/mode/form";

export interface ModeForm extends CommonAttributes, RenderCondition, GraniteContainer {
    mode?: string; // < 'default', 'edit'

    group?: string;

    margin?: boolean;

    maximized?: boolean;
}
