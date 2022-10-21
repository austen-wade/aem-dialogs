import { FormField } from "./Field";

const resourceType = " /libs/granite/ui/components/coral/foundation/form/textfield";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface FormTextField extends FormField {
    name?: string;

    value?: string;

    emptyText?: string;

    disabled?: boolean;

    required?: boolean;

    autocomplete?: string; // ='off'

    autofocus?: boolean;

    validation?: string[];

    maxlength?: number;
}
