import { ResourceType } from "../../../../types";
import { Resize } from "../LiteralTypes";
import { FormField, IFormField } from "./Field";

export interface IFormTextarea extends IFormField {
    name?: string;
    value?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string; // ='off'
    autofocus?: boolean;
    validation?: string[];
    maxlength?: number;
    cols?: number;
    rows?: number; // =5
    resize: Resize;
}

export class Textarea extends FormField<IFormTextarea> {
    constructor(tag: string, options?: IFormTextarea) {
        super(tag, options, ResourceType.TEXTAREA);
    }
}
