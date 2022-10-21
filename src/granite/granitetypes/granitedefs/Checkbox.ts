import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/form/checkbox";
//   :supertype?: /libs/granite/ui/components/coral/foundation/form/field

export interface FormCheckbox extends CommonAttributes, RenderCondition {
    name?: string;

    deleteHint?: boolean; // =true

    value?: string;

    uncheckedValue?: string;

    disabled?: boolean;

    required?: boolean;

    validation?: string[];

    checked?: boolean;

    ignoreData?: boolean;

    text?: string;

    autosubmit?: boolean;

    fieldDescription?: string;

    tooltipPosition?: string; // ='right' < 'left', 'right', 'top', 'bottom'

    renderReadOnly?: boolean;

    showEmptyInReadOnly?: boolean;

    wrapperClass?: string;
}
