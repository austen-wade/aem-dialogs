import { DatePickerType } from "../LiteralTypes";
import { IFormField } from "./Field";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/datepicker";
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
