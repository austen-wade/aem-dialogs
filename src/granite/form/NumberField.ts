import { ResourceType } from "../../types";
import { IFormField, FormField } from "./Field";

export interface IFormNumberField extends IFormField {
    name?: string;
    value?: string;
    disabled?: boolean;
    typeHint?: string;
    required?: boolean;
    validation?: string[];
    min?: number;
    max?: number;
    step?: string; // ="1"
}

export class NumberField extends FormField<IFormNumberField> {
    constructor(tag: string, options?: IFormNumberField) {
        super(tag, options, ResourceType.NUMBER_FIELD);
    }
}
