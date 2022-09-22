import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface NumberFieldOptions extends FieldOptions {
    value?: string;
    disabled?: boolean;
    typeHint?: string;
    required?: boolean;
    min?: number;
    max?: number;
    step: number;
}
export class NumberField extends AemNode {
    options: NumberFieldOptions = { step: 1 };

    constructor(tag = "numberfield", options?: NumberFieldOptions) {
        super(tag, ResourceType.NUMBER_FIELD);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.addProp(key, options[key as keyof NumberFieldOptions]);
        }
    }
}
