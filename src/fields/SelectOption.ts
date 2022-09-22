import { AemNode } from "../AemNode";

export interface SelectOptionOptions {
    name: string,
    text: string,
    value: string,
}
export class SelectOption extends AemNode {
    options: SelectOptionOptions = {
        name: "item",
        text: "Item",
        value: "item"
    };

    constructor(options: SelectOptionOptions) {
        super(options.name, "");
        for (const key in options) {
            this.addProp(key, options[key as keyof SelectOptionOptions]);
        }
    }
}
