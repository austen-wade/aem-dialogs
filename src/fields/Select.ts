import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export type SelectOptions = FieldOptions;
export class Select extends AemNode {
    options: SelectOptions = {};

    constructor(tag = "select", options?: SelectOptions) {
        super(tag, ResourceType.SELECT);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.addProp(key, options[key as keyof SelectOptions]);
        }
    }
}
