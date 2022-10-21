import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IFormField } from "./Field";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/radiogroup";
export interface IFormRadioGroup extends IFormField, IGraniteContainer {
    name?: string;
    deleteHint?: boolean;
    required?: boolean;
    validation?: string[];
    ignoreData?: boolean;
    vertical?: boolean;
}
export interface IFormRadioGroupItem extends ICommonAttributes {
    value?: string;
    fieldDescription?: string;
    disabled?: boolean;
    checked?: boolean;
    text?: string;
    wrapperClass?: string;
}
