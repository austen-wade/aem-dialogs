import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";
import { SelectVariant, StatusVariant } from "../LiteralTypes";
import { IFormField } from "./Field";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/select";
export interface IFormSelect extends IFormField, IGraniteContainer {
    name?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    validation?: string[];
    multiple?: boolean;
    translateOptions?: boolean;
    ordered?: boolean;
    emptyOption?: boolean;
    variant?: SelectVariant;
    deleteHint?: boolean;
    forceIgnoreFreshness?: boolean;
}
export interface IFormSelectItem extends ICommonAttributes, IRenderCondition {
    value: string;
    disabled?: boolean;
    selected?: boolean;
    text?: string;
    icon?: string;
    statusIcon?: string;
    statusText?: string;
    statusVariant?: StatusVariant;
}
