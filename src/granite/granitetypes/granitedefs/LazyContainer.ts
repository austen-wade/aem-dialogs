import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/wizard/lazycontainer";
export interface WizardLazyContainer extends CommonAttributes, RenderCondition {
    src?: string;

    margin?: boolean;

    maximized?: boolean;
}
