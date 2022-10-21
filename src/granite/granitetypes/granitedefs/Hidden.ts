import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/form/hidden";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface FormHidden extends CommonAttributes, RenderCondition {
    name?: string;

    disabled?: boolean;

    value?: string;
}
