import { FormField } from "./Field";

const resourceType = " /libs/granite/ui/components/coral/foundation/form/colorfield";
export interface FormColorField extends FormField {
    name?: string;

    value?: string;

    emptyText?: string;

    disabled?: boolean;

    required?: boolean;

    variant?: string; // ='default'

    autogenerateColors?: string; // ='off'

    showSwatches?: boolean;

    showProperties?: boolean;

    showDefaultColors?: boolean;

    validation?: string[];
}
export interface FormColorFieldItem {
    value?: string;
}
