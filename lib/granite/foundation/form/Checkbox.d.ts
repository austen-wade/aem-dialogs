import { Field, FieldOptions } from "./Field";
export interface CheckboxOptions extends FieldOptions {
    name: string;
    text?: string;
    required?: boolean;
    checked?: boolean;
    value?: string;
    uncheckedValue?: string;
}
export declare class Checkbox extends Field {
    constructor(tag?: string, options?: CheckboxOptions);
}
