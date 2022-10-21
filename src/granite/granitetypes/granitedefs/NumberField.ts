import { FormField } from "./Field";

export const resourceType = " /libs/granite/ui/components/coral/foundation/form/numberfield";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface FormNumberField extends FormField {
    name?: string;

    value?: string;

    disabled?: boolean;

    typeHint?: string;

    required?: boolean;

    validation?: string[];

    min?: number;

    max?: number;

    step?: string; // ="1"
}
