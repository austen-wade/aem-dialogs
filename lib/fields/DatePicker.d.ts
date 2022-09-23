import { AemNode } from "../AemNode";
import { FieldOptions } from "./Field";
export interface DatePickerOptions extends FieldOptions {
    displayedFormat: string;
    disabled?: boolean;
    fieldLabel?: string;
    fieldDescription?: string;
    type: string;
    typeHint: string;
}
export declare class DatePicker extends AemNode {
    options: DatePickerOptions;
    constructor(tag?: string, options?: DatePickerOptions);
}
