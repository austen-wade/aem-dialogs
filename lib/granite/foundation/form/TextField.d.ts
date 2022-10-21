import { Field, FieldOptions } from "./Field";
export interface TextFieldOptions extends FieldOptions {
    emptyText?: string;
    required?: boolean;
}
export declare class TextField extends Field {
    options: TextFieldOptions;
    constructor(tag?: string, options?: TextFieldOptions);
}
