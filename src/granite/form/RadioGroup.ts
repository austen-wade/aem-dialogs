import { ResourceType } from "../../types";
import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "../GraniteContainer";
import { IFormField, FormField } from "./Field";

export interface IFormRadioGroup extends IFormField, IGraniteContainer {
    name?: string;
    deleteHint?: boolean; // =true
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

export class RadioGroup extends FormField<IFormRadioGroup> {
    constructor(tag: string, options?: IFormRadioGroup) {
        super(tag, options, ResourceType.RADIO_GROUP);
    }
}

export class RadioGroupItem extends GraniteContainer<IFormRadioGroupItem> {
    constructor(tag: string, options?: IFormRadioGroupItem) {
        super(tag, options);
    }
}
