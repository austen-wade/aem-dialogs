import { IconSize } from "../../../../icons";
import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IFormField } from "./Field";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/buttongroup";
declare type SelectionModes = "none" | "single" | "multiple";
export interface IFormButtonGroup extends IFormField, IGraniteContainer {
    name?: string;
    selectionMode: SelectionModes;
    deleteHint?: boolean;
    required?: boolean;
    validation?: string[];
    ignoreData?: boolean;
}
export interface IFormButtonGroupItem extends ICommonAttributes {
    value?: string;
    disabled?: boolean;
    checked?: boolean;
    text?: string;
    hideText?: boolean;
    icon?: string;
    iconSize?: IconSize;
}
export {};
