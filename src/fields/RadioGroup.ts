import { AemNode, BaseOptions } from "../AemNode";
import { ResourceType } from "../types";
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
export class RadioGroup extends AemNode {
    options: RadioGroupOptions = {};

    constructor(tag = "radiogroup", options?: RadioGroupOptions) {
        super(tag, ResourceType.RADIO_GROUP);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.addProp(key, options[key as keyof RadioGroupOptions]);
        }
    }
}

export interface RadioGroupItemOptions extends FieldOptions {
    value?: string;
    disabled?: boolean;
    checked?: boolean;
    text?: string;
    wrapperClass?: string;
}
export class RadioGroupItem extends AemNode {
    options: RadioGroupItemOptions = {};

    constructor(tag = "radiogroupitem", options?: RadioGroupItemOptions) {
        super(tag, "");

        for (const key in options) {
            this.addProp(key, options[key as keyof RadioGroupItemOptions]);
        }
    }
}
