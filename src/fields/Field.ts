import { AemNode } from "../AemNode";
import { ResourceType } from "../types";

export interface FieldOptions {
    name: string,
    fieldLabel?: string,
    fieldDescription?: string,
    renderHidden?: boolean,
    wrapperClass?: string,
    tooltipPosition?: 'left' | 'top' | 'bottom',
    "granite:class"?: string,
}
export class Field extends AemNode {
    options: FieldOptions = { name: "columns" };

    constructor(options: FieldOptions) {
        super(options.name, ResourceType.FIELD);
        for (const key in options) {
            this.addProp(key, options[key as keyof FieldOptions]);
        }
    }
}
