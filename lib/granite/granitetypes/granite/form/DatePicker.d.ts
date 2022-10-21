import { DatePickerType } from "../LiteralTypes";
import { FormField, IFormField } from "./Field";
export interface IFormDatePicker extends IFormField {
    name?: string;
    typeHint?: string;
    value?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    validation?: string[];
    type?: DatePickerType;
    displayedFormat?: string;
    valueFormat: string;
    minDate?: string;
    maxDate?: string;
    displayTimezoneMessage?: boolean;
    beforeSelector?: string;
    afterSelector?: string;
}
export declare class DatePicker extends FormField<IFormDatePicker> {
    constructor(tag: string, options?: IFormDatePicker);
}
