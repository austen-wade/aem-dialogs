import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/form/advancedselect";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field

export interface FormAdvancedSelect extends CommonAttributes, RenderCondition {
    name?: string;

    deleteHint?: boolean; // =true

    required?: boolean;

    validation?: string[];

    maximized?: boolean;

    toolbar?: GraniteNode | GraniteNode[];

    field?: GraniteNode | GraniteNode[];
}
