import { Resize } from "../LiteralTypes";
import { IFormField, FormField } from "./Field";
export interface IFormTextarea extends IFormField {
    name?: string;
    value?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string;
    autofocus?: boolean;
    validation?: string[];
    maxlength?: number;
    cols?: number;
    rows?: number;
    resize: Resize;
}
export declare class Textarea extends FormField<IFormTextarea> {
    constructor(tag: string, options?: IFormTextarea);
}
