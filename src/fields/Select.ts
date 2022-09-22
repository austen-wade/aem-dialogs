import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface SelectOptions extends FieldOptions {
    name: string,
}
export class Select extends AemNode {
    options: SelectOptions = { name: 'select' };

    constructor(options: SelectOptions) {
        super(options.name, ResourceType.SELECT);

        for (const key in options) {
            this.addProp(key, options[key as keyof SelectOptions]);
        }
    }
}