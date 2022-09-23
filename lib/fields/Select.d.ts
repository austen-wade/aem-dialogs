import { AemNode } from "../AemNode";
import { FieldOptions } from "./Field";
export declare type SelectOptions = FieldOptions;
export declare class Select extends AemNode {
    options: SelectOptions;
    constructor(tag?: string, options?: SelectOptions);
}
