import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface DatePickerOptions extends FieldOptions {
    displayedFormat: string;
    disabled?: boolean;
    fieldLabel?: string;
    fieldDescription?: string;
    type: string;
    typeHint: string;
}
export class DatePicker extends AemNode {
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
            this.addProp(key, options[key as keyof DatePickerOptions]);
        }
    }
}
