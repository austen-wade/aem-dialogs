import { AemNode } from "../AemNode";

export interface SelectOptionOptions {
    text: string;
    value: string;
}
export class SelectOption extends AemNode {
    options: SelectOptionOptions = {
        text: "Item",
        value: "item",
    };

    constructor(tag = "item", options?: SelectOptionOptions) {
        super(tag, "");

        for (const key in options) {
            this.addProp(key, options[key as keyof SelectOptionOptions]);
        }
    }
}
