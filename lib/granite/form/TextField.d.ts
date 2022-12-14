import { IFormField, FormField } from "./Field";
export declare const FormTextField = "/libs/granite/ui/components/coral/foundation/form/textfield";
export interface IFormTextField extends IFormField {
    name?: string;
    value?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string;
    autofocus?: boolean;
    validation?: string[];
    maxlength?: number;
}
export declare class TextField extends FormField<IFormTextField> {
    constructor(tag: string, options?: IFormTextField);
}
