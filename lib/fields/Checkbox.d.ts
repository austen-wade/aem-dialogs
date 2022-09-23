import { AemNode } from "../AemNode";
import { FieldOptions } from "./Field";
export interface CheckboxOptions extends FieldOptions {
    name: string;
    text?: string;
    required?: boolean;
    checked?: boolean;
    value?: string;
    uncheckedValue?: string;
}
export declare class Checkbox extends AemNode {
    constructor(tag?: string, options?: CheckboxOptions);
}
