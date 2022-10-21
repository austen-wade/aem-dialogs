import { Filter } from "../LiteralTypes";
import { IFormField } from "./Field";

export const resourceType = "/libs/granite/ui/components/coral/foundation/form/pathfield";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
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
