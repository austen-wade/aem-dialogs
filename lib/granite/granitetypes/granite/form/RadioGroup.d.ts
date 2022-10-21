import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "../GraniteContainer";
import { FormField, IFormField } from "./Field";
export interface IFormRadioGroup extends IFormField, IGraniteContainer {
    name?: string;
    deleteHint?: boolean;
    required?: boolean;
    validation?: string[];
    ignoreData?: boolean;
    vertical?: boolean;
}
export interface IFormRadioGroupItem extends ICommonAttributes {
    value?: string;
    fieldDescription?: string;
    disabled?: boolean;
    checked?: boolean;
    text?: string;
    wrapperClass?: string;
}
export declare class RadioGroup extends FormField<IFormRadioGroup> {
    constructor(tag: string, options?: IFormRadioGroup);
}
export declare class RadioGroupItem extends GraniteContainer<IFormRadioGroupItem> {
    constructor(tag: string, options?: IFormRadioGroupItem);
}
