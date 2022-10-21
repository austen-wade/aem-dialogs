import { FormField, IFormField } from "./Field";
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
export declare class NumberField extends FormField<IFormNumberField> {
    constructor(tag: string, options?: IFormNumberField);
}
