import { FormField, IFormField } from "./Field";
export interface IFormPassword extends IFormField {
    name?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string;
    autofocus?: boolean;
    retype?: string;
    validation?: string[];
}
export declare class Password extends FormField<IFormPassword> {
    constructor(tag: string, options?: IFormPassword);
}
