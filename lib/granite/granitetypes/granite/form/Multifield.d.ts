import { IFormField } from "./Field";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/multifield";
export interface IFormMultifield extends IFormField {
    composite?: boolean;
    deleteHint?: boolean;
    typeHint?: string;
    required?: boolean;
    validation?: string;
    multiple: any;
    field: any;
}
