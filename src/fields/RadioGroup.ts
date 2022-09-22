import { AemNode, BaseOptions } from "../AemNode";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface RadioGroupOptions extends BaseOptions {
    name: string;
    composite?: boolean;
    deleteHint?: boolean;
    ignoreData?: boolean;
    required?: boolean;
    validation?: string;
    vertical?: boolean;
}
export class RadioGroup extends AemNode {
    options: RadioGroupOptions = { name: "radiogroup" };

    constructor(options: RadioGroupOptions) {
        super(options.name, ResourceType.RADIO_GROUP);

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
    options: RadioGroupItemOptions = { name: "radiogroupItem" };

    constructor(options: RadioGroupItemOptions) {
        super(options.name, "");

        for (const key in options) {
            this.addProp(key, options[key as keyof RadioGroupItemOptions]);
        }
    }
}
