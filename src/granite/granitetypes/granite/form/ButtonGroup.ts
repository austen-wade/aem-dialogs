import { IconSize } from "../../../../icons";
import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IFormField } from "./Field";

export const resourceType = "/libs/granite/ui/components/coral/foundation/form/buttongroup";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field

type SelectionModes = "none" | "single" | "multiple";
export interface IFormButtonGroup extends IFormField, IGraniteContainer {
    name?: string;

    selectionMode: SelectionModes; // = 'none'

    deleteHint?: boolean; // = true

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
