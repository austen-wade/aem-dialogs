import { GraniteNode, GraniteOptions } from "../../GraniteNode";
export interface FieldOptions extends GraniteOptions {
    name?: string;
    fieldLabel?: string;
    fieldDescription?: string;
    renderHidden?: boolean;
    wrapperClass?: string;
    tooltipPosition?: "left" | "top" | "bottom";
}
export declare class Field extends GraniteNode {
    options: FieldOptions;
    constructor(tag: string, resourceType?: string, options?: FieldOptions);
}
