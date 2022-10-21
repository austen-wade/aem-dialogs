import { GraniteNode } from "../../GraniteNode";

export interface SelectOptionOptions {
    text: string;
    value: string;
}
export class SelectOption extends GraniteNode {
    options: SelectOptionOptions = {
        text: "Item",
        value: "item",
    };

    constructor(tag = "item", options?: SelectOptionOptions) {
        super(tag, "");

        for (const key in options) {
            this.setProp(key, options[key as keyof SelectOptionOptions]);
        }
    }
}
