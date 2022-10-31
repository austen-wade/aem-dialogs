import { IconSize } from "../../icons";
import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "../GraniteContainer";
import { IFormField, FormField } from "./Field";
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
export declare class ButtonGroup extends FormField<IFormButtonGroup> {
    constructor(tag: string, options?: IFormButtonGroup);
}
export declare class ButtonGroupItem extends GraniteContainer<IFormButtonGroupItem> {
    constructor(tag: string, options?: IFormButtonGroupItem);
}
export {};
