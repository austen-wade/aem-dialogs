import { IFormField } from "./Field";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/switch";
export interface IFormSwitch extends IFormField {
    name?: string;
    deleteHint?: boolean;
    value?: string;
    uncheckedValue?: string;
    disabled?: boolean;
    required?: boolean;
    validation?: string[];
    checked?: boolean;
    ignoreData?: boolean;
    wrapperClass?: string;
}
