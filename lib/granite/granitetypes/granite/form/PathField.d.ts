import { Filter } from "../LiteralTypes";
import { IFormField } from "./Field";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/pathfield";
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
