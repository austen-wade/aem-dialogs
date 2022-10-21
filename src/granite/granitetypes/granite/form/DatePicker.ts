import { DatePickerType } from "../LiteralTypes";
import { IFormField } from "./Field";

export const resourceType = "/libs/granite/ui/components/coral/foundation/form/datepicker";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface IFormDatePicker extends IFormField {
    name?: string;

    typeHint?: string; // ='Date'

    value?: string;

    emptyText?: string;

    disabled?: boolean;

    required?: boolean;

    validation?: string[];

    type?: DatePickerType;

    displayedFormat?: string;

    valueFormat: string; // = 'YYYY-MM-DD[T]HH:mm?:ss.SSSZ'

    minDate?: string;

    maxDate?: string;

    displayTimezoneMessage?: boolean;

    beforeSelector?: string;

    afterSelector?: string;
}