import { AemNode } from "../AemNode";
import { FieldOptions } from "./Field";
export interface TextFieldOptions extends FieldOptions {
    emptyText?: string;
    required?: boolean;
}
export declare class TextField extends AemNode {
    options: TextFieldOptions;
    constructor(tag?: string, options?: TextFieldOptions);
}
