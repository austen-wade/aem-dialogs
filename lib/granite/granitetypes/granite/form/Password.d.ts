import { IFormField } from "./Field";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/password";
export interface IFormPassword extends IFormField {
    name?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string;
    autofocus?: boolean;
    retype?: string;
    validation?: string;
    multiple: any;
}
