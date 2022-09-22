import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface NumberFieldOptions extends FieldOptions {
    name: string;
    value?: string;
    disabled?: boolean;
    typeHint?: string;
    required?: boolean;
    min?: number;
    max?: number;
    step: number;
}
export class NumberField extends AemNode {
    options: NumberFieldOptions = { name: "numberfield", step: 1 };

    constructor(options: NumberFieldOptions) {
        super(options.name, ResourceType.NUMBER_FIELD);
        for (const key in options) {
            this.addProp(key, options[key as keyof NumberFieldOptions]);
        }
    }
}
