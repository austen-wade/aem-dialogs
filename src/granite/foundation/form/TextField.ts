import { ResourceType } from "../../../types";
import { Field, FieldOptions } from "./Field";

export interface TextFieldOptions extends FieldOptions {
    emptyText?: string;
    required?: boolean;
}

export class TextField extends Field {
    options: TextFieldOptions = {};

    constructor(tag = "text", options?: TextFieldOptions) {
        super(tag, ResourceType.TEXTFIELD);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof TextFieldOptions]);
        }
    }
}
