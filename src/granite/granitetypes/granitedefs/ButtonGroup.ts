import { IconSize } from "../../../icons";
import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { FormField } from "./Field";

export const resourceType = " /libs/granite/ui/components/coral/foundation/form/buttongroup";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field

type SelectionModes = "none" | "single" | "multiple";
export interface FormButtonGroup extends FormField, GraniteContainer {
    name?: string;

    selectionMode: SelectionModes; // = 'none'

    deleteHint?: boolean; // = true

    required?: boolean;

    validation?: string[];

    ignoreData?: boolean;
}
export interface FormButtonGroupItem extends CommonAttributes {
    value?: string;

    disabled?: boolean;

    checked?: boolean;

    text?: string;

    hideText?: boolean;

    icon?: string;

    iconSize?: IconSize;
}
