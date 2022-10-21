import { ResourceType } from "../../../types";
import { Field, FieldOptions } from "./Field";

export interface NumberFieldOptions extends FieldOptions {
    value?: string;
    disabled?: boolean;
    typeHint?: string;
    required?: boolean;
    min?: number;
    max?: number;
    step: number;
}
export class NumberField extends Field {
    options: NumberFieldOptions = { step: 1 };

    constructor(tag = "numberfield", options?: NumberFieldOptions) {
        super(tag, ResourceType.NUMBER_FIELD);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof NumberFieldOptions]);
        }
    }
}
