import { ResourceType } from "../../types";
import { GraniteNode } from "../GraniteNode";
import { IFormField, FormField } from "./Field";

export interface IFormMultifield extends IFormField {
    composite?: boolean; // =false
    deleteHint?: boolean; // =true
    typeHint?: string;
    required?: boolean;
    validation?: string[];
    field: GraniteNode;
}

export class Multifield extends FormField<IFormMultifield> {
    constructor(tag: string, options?: IFormMultifield) {
        super(tag, options, ResourceType.MULTIFIELD);
    }
}
