import { CommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { RenderCondition } from "./RenderCondition";
import { DisplayMode } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/cyclebutton";

export interface CycleButton extends CommonAttributes, RenderCondition, GraniteContainer {
    displayMode?: DisplayMode;

    variant?: string; // < 'actionBar'
}
export interface CycleButtonItem extends CommonAttributes, RenderCondition {
    selected?: boolean;

    text?: string;

    text_commentI18n?: string;

    icon?: string;
}
