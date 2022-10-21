import { Field, FieldOptions } from "./Field";
export interface TextareaOptions extends FieldOptions {
    value?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: "off" | "on";
    autofocus?: boolean;
    maxlength?: number;
    cols?: number;
    rows?: number;
    resize?: "none" | "both" | "horizontal" | "vertical";
}
export declare class Textarea extends Field {
    options: TextareaOptions;
    constructor(tag?: string, options?: TextareaOptions);
}
