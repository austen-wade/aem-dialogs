import { ResourceType } from "../../../types";
import { Field, FieldOptions } from "./Field";

export interface MultifieldOptions extends FieldOptions {
    composite?: boolean;
    deleteHint?: boolean;
    typeHint?: string;
    required?: boolean;
    validation?: string;
}
export class Multifield extends Field {
    options: MultifieldOptions = {};

    constructor(tag = "multifield", options?: MultifieldOptions) {
        super(tag, ResourceType.MULTIFIELD);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof MultifieldOptions]);
        }
    }
}
