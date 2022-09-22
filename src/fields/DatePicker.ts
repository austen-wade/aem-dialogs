import { AemNode, BaseOptions } from '../AemNode';
import { ResourceType } from '../types';

export interface DatePickerOptions extends BaseOptions {
    name: string;
    displayedFormat: string;
    disabled?: boolean;
    fieldLabel?: string;
    fieldDescription?: string;
    type: string;
    typeHint: string;
}
export class DatePicker extends AemNode {
    options: DatePickerOptions = {
        name: 'date',
        displayedFormat: 'MM-DD-YYYY HH:mm',
        type: 'datetime',
        typeHint: 'Date',
    };

    constructor(options: DatePickerOptions) {
        super(options.name, ResourceType.DATE_PICKER);
        for (const key in options) {
            this.addProp(key, options[key as keyof DatePickerOptions]);
        }
    }
}
