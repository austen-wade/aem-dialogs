import { IFormField } from "./Field";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/numberfield";
export interface IFormNumberField extends IFormField {
    name?: string;
    value?: string;
    disabled?: boolean;
    typeHint?: string;
    required?: boolean;
    validation?: string[];
    min?: number;
    max?: number;
    step?: string;
}
