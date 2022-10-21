import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/alert";

export interface Alert extends CommonAttributes, RenderCondition {
    variant?: string; // < 'error', 'warning', 'success', 'help', 'info'

    size?: string; // < 'S', 'L'

    "jcr:title"?: string;

    text?: string;
}
