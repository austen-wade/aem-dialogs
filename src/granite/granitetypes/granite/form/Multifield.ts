import { IFormField } from "./Field";

export const resourceType = "/libs/granite/ui/components/coral/foundation/form/multifield";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface IFormMultifield extends IFormField {
    composite?: boolean; // =false

    deleteHint?: boolean; // =true

    typeHint?: string;

    required?: boolean;

    validation?: string;
    multiple;

    field;
}
