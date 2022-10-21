import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/mode/switcher";
export interface ModeSwitcher extends CommonAttributes, RenderCondition, GraniteContainer {
    active?: string;

    group?: string;

    margin?: boolean;

    maximized?: boolean;
}
