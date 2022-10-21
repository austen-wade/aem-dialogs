import { CommonAttributes } from "../CommonAttributes";
import { RenderCondition } from "../RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/wizard/lazycontainer";
export interface WizardLazyContainer extends CommonAttributes, RenderCondition {
    src?: string;

    margin?: boolean;

    maximized?: boolean;
}
