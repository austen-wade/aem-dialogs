import { Field, FieldOptions } from "./Field";
export declare type SelectOptions = FieldOptions;
export declare class Select extends Field {
    options: SelectOptions;
    constructor(tag?: string, options?: SelectOptions);
}
