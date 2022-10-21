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

export class DatePicker extends FormField<IFormDatePicker> {
    constructor(tag: string, options?: IFormDatePicker) {
        super(tag, options, ResourceType.DATE_PICKER);
    }
}
