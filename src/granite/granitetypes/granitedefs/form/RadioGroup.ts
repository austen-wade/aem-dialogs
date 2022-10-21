import { CommonAttributes } from "../../granite/CommonAttributes";
import { GraniteContainer } from "../../granite/GraniteContainer";
import { FormField } from "./Field";

export const resourceType = " /libs/granite/ui/components/coral/foundation/form/radiogroup";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface FormRadioGroup extends FormField, GraniteContainer {
    name?: string;

    deleteHint?: boolean; // =true

    required?: boolean;

    validation?: string[];

    ignoreData?: boolean;

    vertical?: boolean;
}
export interface FormRadioGroupItem extends CommonAttributes {
    value?: string;

    fieldDescription?: string;

    disabled?: boolean;

    checked?: boolean;

    text?: string;

    wrapperClass?: string;
}
