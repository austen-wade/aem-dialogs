import { CommonAttributes } from "../CommonAttributes";
import { GraniteContainer } from "../GraniteContainer";
import { RenderCondition } from "../RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/mode/switcher";
export interface ModeSwitcher extends CommonAttributes, RenderCondition, GraniteContainer {
    active?: string;

    group?: string;

    margin?: boolean;

    maximized?: boolean;
}
