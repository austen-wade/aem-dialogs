import { AemNode, BaseOptions } from "../AemNode";
import { FieldOptions } from "./Field";
export interface RadioGroupOptions extends BaseOptions {
    name?: string;
    composite?: boolean;
    deleteHint?: boolean;
    ignoreData?: boolean;
    required?: boolean;
    validation?: string;
    vertical?: boolean;
}
export declare class RadioGroup extends AemNode {
    options: RadioGroupOptions;
    constructor(tag?: string, options?: RadioGroupOptions);
}
export interface RadioGroupItemOptions extends FieldOptions {
    value?: string;
    disabled?: boolean;
    checked?: boolean;
    text?: string;
    wrapperClass?: string;
}
export declare class RadioGroupItem extends AemNode {
    options: RadioGroupItemOptions;
    constructor(tag?: string, options?: RadioGroupItemOptions);
}
