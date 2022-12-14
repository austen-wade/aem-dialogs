import { GraniteNode } from "../GraniteNode";
import { IFormField, FormField } from "./Field";
export interface IFormMultifield extends IFormField {
    composite?: boolean;
    deleteHint?: boolean;
    typeHint?: string;
    required?: boolean;
    validation?: string[];
    field?: GraniteNode;
}
export declare class Multifield extends FormField<IFormMultifield> {
    constructor(tag: string, options?: IFormMultifield);
}
