import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/cyclebutton";

export interface CycleButton extends CommonAttributes, RenderCondition, GraniteContainer {
    displayMode?: string; // < 'icon', 'text', 'icontext'

    variant?: string; // < 'actionBar'
}
export interface CycleButtonItem extends CommonAttributes, RenderCondition {
    selected?: boolean;

    text?: string;

    text_commentI18n?: string;

    icon?: string;
}
