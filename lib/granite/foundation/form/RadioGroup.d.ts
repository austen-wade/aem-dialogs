import { GraniteNode, GraniteOptions } from "../../GraniteNode";
import { Field, FieldOptions } from "./Field";
export interface RadioGroupOptions extends FieldOptions {
    name?: string;
    composite?: boolean;
    deleteHint?: boolean;
    ignoreData?: boolean;
    required?: boolean;
    validation?: string;
    vertical?: boolean;
}
export declare class RadioGroup extends Field {
    options: RadioGroupOptions;
    constructor(tag?: string, options?: RadioGroupOptions);
}
export interface RadioGroupItemOptions extends GraniteOptions {
    value?: string;
    disabled?: boolean;
    checked?: boolean;
    text?: string;
    wrapperClass?: string;
}
export declare class RadioGroupItem extends GraniteNode {
    options: RadioGroupItemOptions;
    constructor(tag?: string, options?: RadioGroupItemOptions);
}
