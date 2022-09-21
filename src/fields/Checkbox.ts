import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { aembool, getName } from "../utils";

export interface CheckboxOptions {
    name: string,
    text?: string,
    fieldDescription?: string,
    required?: boolean,
    tooltipPosition?: "right" | "left" | "top" | "bottom",
    checked?: boolean,
    value?: string,
    uncheckedValue?: string,
}

export class Checkbox extends AemNode {
    options: CheckboxOptions = { name: "./checkbox" };

    constructor(theOptions: CheckboxOptions) {
        super(theOptions.name, {}, ResourceType.CHECKBOX);
        this.setAttribute('name', getName(theOptions.name));

        if (theOptions.text) {
            this.setAttribute('text', theOptions.text);
        }
        if (theOptions.fieldDescription) {
            this.setAttribute('fieldDescription', theOptions.fieldDescription);
        }
        if (theOptions.required) {
            this.setAttribute('required', aembool(theOptions.required));
        }
        if (theOptions.tooltipPosition) {
            this.setAttribute('tooltipPosition', theOptions.tooltipPosition);
        }
        if (theOptions.checked) {
            this.setAttribute('checked', aembool(theOptions.checked))
        }
        if (theOptions.value) {
            this.setAttribute('checked', theOptions.value);
        }
        if (theOptions.uncheckedValue) {
            this.setAttribute('checked', theOptions.uncheckedValue);
        }
    }
}
