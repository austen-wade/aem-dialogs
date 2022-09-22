import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface TextFieldOptions extends FieldOptions {
    emptyText?: string;
    required?: boolean;
}

export class TextField extends AemNode {
    options: TextFieldOptions = {};

    constructor(tag = "text", options?: TextFieldOptions) {
        super(tag, ResourceType.TEXTFIELD);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.addProp(key, options[key as keyof TextFieldOptions]);
        }
    }
}
