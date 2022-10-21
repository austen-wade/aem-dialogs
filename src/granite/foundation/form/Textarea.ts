import { ResourceType } from "../../../types";
import { Field, FieldOptions } from "./Field";

export interface TextareaOptions extends FieldOptions {
    value?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: "off" | "on";
    autofocus?: boolean;
    maxlength?: number;
    cols?: number;
    rows?: number;
    resize?: "none" | "both" | "horizontal" | "vertical";
}
export class Textarea extends Field {
    options: TextareaOptions = {};

    constructor(tag = "textarea", options?: TextareaOptions) {
        super(tag, ResourceType.TEXTAREA);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof TextareaOptions]);
        }
    }
}
