import { AemNode, BaseOptions } from "../AemNode";
import { ResourceType } from "../types";

export interface FieldOptions extends BaseOptions {
    name?: string;
    fieldLabel?: string;
    fieldDescription?: string;
    renderHidden?: boolean;
    wrapperClass?: string;
    tooltipPosition?: "left" | "top" | "bottom";
    "granite:class"?: string;
}
export class Field extends AemNode {
    options: FieldOptions = { name: "columns" };

    constructor(tag: string, options?: FieldOptions) {
        super(tag, ResourceType.FIELD);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.addProp(key, options[key as keyof FieldOptions]);
        }
    }
}
