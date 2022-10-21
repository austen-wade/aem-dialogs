import { ResourceType } from "../../../types";
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
export class RadioGroup extends Field {
    options: RadioGroupOptions = {};

    constructor(tag = "radiogroup", options?: RadioGroupOptions) {
        super(tag, ResourceType.RADIO_GROUP);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof RadioGroupOptions]);
        }
    }
}

export interface RadioGroupItemOptions extends GraniteOptions {
    value?: string;
    disabled?: boolean;
    checked?: boolean;
    text?: string;
    wrapperClass?: string;
}
export class RadioGroupItem extends GraniteNode {
    options: RadioGroupItemOptions = {};

    constructor(tag = "radiogroupitem", options?: RadioGroupItemOptions) {
        super(tag, "");

        for (const key in options) {
            this.setProp(key, options[key as keyof RadioGroupItemOptions]);
        }
    }
}
