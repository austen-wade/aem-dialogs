import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IFormField } from "./Field";

export const resourceType = "/libs/granite/ui/components/coral/foundation/form/radiogroup";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface IFormRadioGroup extends IFormField, IGraniteContainer {
    name?: string;

    deleteHint?: boolean; // =true

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
