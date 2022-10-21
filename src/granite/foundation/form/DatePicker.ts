import { ResourceType } from "../../../types";
import { Field, FieldOptions } from "./Field";

export interface DatePickerOptions extends FieldOptions {
    displayedFormat: string;
    disabled?: boolean;
    fieldLabel?: string;
    fieldDescription?: string;
    type: string;
    typeHint: string;
}
export class DatePicker extends Field {
    options: DatePickerOptions = {
        displayedFormat: "MM-DD-YYYY HH:mm",
        type: "datetime",
        typeHint: "Date",
    };

    constructor(tag = "datepicker", options?: DatePickerOptions) {
        super(tag, ResourceType.DATE_PICKER);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof DatePickerOptions]);
        }
    }
}
