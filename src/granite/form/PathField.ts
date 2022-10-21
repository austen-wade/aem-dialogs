import { ResourceType } from "../../types";
import { Filter } from "../LiteralTypes";
import { IFormField, FormField } from "./Field";

export interface IFormPathField extends IFormField {
    name?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    validation?: string[];
    multiple?: boolean;
    forceSelection?: boolean;
    deleteHint?: boolean; // =true
    suggestionSrc?: string;
    pickerSrc?: string;
    rootPath: string; // ='/'
    filter: Filter;
}

export class PathField extends FormField<IFormPathField> {
    constructor(tag: string, options?: IFormPathField) {
        super(tag, options, ResourceType.PATH_FIELD);
    }
}
