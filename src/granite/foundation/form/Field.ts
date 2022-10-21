import { ResourceType } from "../../../types";
import { GraniteNode, GraniteOptions } from "../../GraniteNode";

export interface FieldOptions extends GraniteOptions {
    name?: string;
    fieldLabel?: string;
    fieldDescription?: string;
    renderHidden?: boolean;
    wrapperClass?: string;
    tooltipPosition?: "left" | "top" | "bottom";
}

export class Field extends GraniteNode {
    options: FieldOptions = { name: "columns" };

    constructor(tag: string, resourceType?: string, options?: FieldOptions) {
        super(tag, ResourceType.FIELD);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof FieldOptions]);
        }
    }
}
