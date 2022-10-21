import { Field, FieldOptions } from "./Field";
export interface DatePickerOptions extends FieldOptions {
    displayedFormat: string;
    disabled?: boolean;
    fieldLabel?: string;
    fieldDescription?: string;
    type: string;
    typeHint: string;
}
export declare class DatePicker extends Field {
    options: DatePickerOptions;
    constructor(tag?: string, options?: DatePickerOptions);
}
