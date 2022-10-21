import { ResourceType } from "../../../types";
import { Field, FieldOptions } from "./Field";

export interface CheckboxOptions extends FieldOptions {
    name: string;
    text?: string;
    required?: boolean;
    checked?: boolean;
    value?: string;
    uncheckedValue?: string;
}

export class Checkbox extends Field {
    constructor(tag = "checkbox", options?: CheckboxOptions) {
        super(tag, ResourceType.CHECKBOX);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof CheckboxOptions]);
        }
    }
}
