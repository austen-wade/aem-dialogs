import { AemNode } from "../AemNode";
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
export declare class NumberField extends AemNode {
    options: NumberFieldOptions;
    constructor(tag?: string, options?: NumberFieldOptions);
}
