import { AemNode, BaseOptions } from "../AemNode";
export interface FieldOptions extends BaseOptions {
    name?: string;
    fieldLabel?: string;
    fieldDescription?: string;
    renderHidden?: boolean;
    wrapperClass?: string;
    tooltipPosition?: "left" | "top" | "bottom";
    "granite:class"?: string;
}
export declare class Field extends AemNode {
    options: FieldOptions;
    constructor(tag: string, options?: FieldOptions);
}
