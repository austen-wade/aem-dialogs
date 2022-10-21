import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";
import { FormField } from "./Field";
import { SelectVariant, StatusVariant } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/form/select";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface FormSelect extends FormField, GraniteContainer {
    name?: string;

    emptyText?: string;

    disabled?: boolean;

    required?: boolean;

    validation?: string[];

    multiple?: boolean;

    translateOptions?: boolean; // =true

    ordered?: boolean; // =false

    emptyOption?: boolean; // =false

    variant?: SelectVariant;

    deleteHint?: boolean; // =true

    forceIgnoreFreshness?: boolean;
}
export interface FormSelectItem extends CommonAttributes, RenderCondition {
    value: string;

    disabled?: boolean;

    selected?: boolean;

    text?: string;

    icon?: string;

    statusIcon?: string;

    statusText?: string;

    statusVariant?: StatusVariant;
}
