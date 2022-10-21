import { ResourceType } from "../../types";
import { IFormField, FormField } from "./Field";

export interface IFormPassword extends IFormField {
    name?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string; // ='off'
    autofocus?: boolean;
    retype?: string;
    validation?: string[];
}

export class Password extends FormField<IFormPassword> {
    constructor(tag: string, options?: IFormPassword) {
        super(tag, options, ResourceType.PASSWORD);
    }
}
