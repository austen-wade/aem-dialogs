import { GraniteContainer } from "../GraniteContainer";
import { FormField, IFormField } from "./Field";
export interface IFormColorField extends IFormField {
    name?: string;
    value?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    variant?: string;
    autogenerateColors?: string;
    showSwatches?: boolean;
    showProperties?: boolean;
    showDefaultColors?: boolean;
    validation?: string[];
}
export interface IFormColorFieldItem {
    value?: string;
}
export declare class ColorField extends FormField<IFormColorField> {
    constructor(tag: string, options?: IFormColorField);
}
export declare class ColorFieldItem extends GraniteContainer<IFormColorFieldItem> {
    constructor(tag: string, options?: IFormColorFieldItem);
}
