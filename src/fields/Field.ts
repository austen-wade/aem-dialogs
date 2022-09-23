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

/**
 * Base class for form components.
 * Should not be confused with the commonly seen "field" node that uses sling:resourceType="granite/ui/components/coral/foundation/container"
 *
 * @date 9/22/2022 - 8:36:00 PM
 *
 * @export
 * @class Field
 * @typedef {Field}
 * @extends {AemNode}
 */
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
