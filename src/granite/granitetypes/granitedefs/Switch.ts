import { FormField } from "./Field";

export const resourceType = " /libs/granite/ui/components/coral/foundation/form/switch";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface FormSwitch extends FormField {
    name?: string;

    deleteHint?: boolean; // =true

    value?: string; // ='true'

    uncheckedValue?: string; // ='false'

    disabled?: boolean;

    required?: boolean;

    validation?: string[];

    checked?: boolean;

    ignoreData?: boolean;

    wrapperClass?: string;
}
