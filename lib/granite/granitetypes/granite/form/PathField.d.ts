import { Filter } from "../LiteralTypes";
import { FormField, IFormField } from "./Field";
export interface IFormPathField extends IFormField {
    name?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    validation?: string[];
    multiple?: boolean;
    forceSelection?: boolean;
    deleteHint?: boolean;
    suggestionSrc?: string;
    pickerSrc?: string;
    rootPath: string;
    filter: Filter;
}
export declare class PathField extends FormField<IFormPathField> {
    constructor(tag: string, options?: IFormPathField);
}
