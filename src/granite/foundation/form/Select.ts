import { ResourceType } from "../../../types";
import { Field, FieldOptions } from "./Field";

export type SelectOptions = FieldOptions;

export class Select extends Field {
    options: SelectOptions = {};

    constructor(tag = "select", options?: SelectOptions) {
        super(tag, ResourceType.SELECT);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof SelectOptions]);
        }
    }
}
