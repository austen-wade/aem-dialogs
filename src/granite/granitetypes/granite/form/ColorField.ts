import { ResourceType } from "../../../../types";
import { GraniteContainer } from "../GraniteContainer";
import { FormField, IFormField } from "./Field";

export interface IFormColorField extends IFormField {
    name?: string;
    value?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    variant?: string; // ='default'
    autogenerateColors?: string; // ='off'
    showSwatches?: boolean;
    showProperties?: boolean;
    showDefaultColors?: boolean;
    validation?: string[];
}
export interface IFormColorFieldItem {
    value?: string;
}

export class ColorField extends FormField<IFormColorField> {
    constructor(tag: string, options?: IFormColorField) {
        super(tag, options, ResourceType.FORM_COLOR_FIELD);
    }
}
export class ColorFieldItem extends GraniteContainer<IFormColorFieldItem> {
    constructor(tag: string, options?: IFormColorFieldItem) {
        super(tag, options);
    }
}
