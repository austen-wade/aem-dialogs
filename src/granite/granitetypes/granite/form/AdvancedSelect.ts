import { GraniteNode } from "../../../GraniteNode";
import { ICommonAttributes } from "../CommonAttributes";
import { IRenderCondition } from "../RenderCondition";

export const resourceType = "/libs/granite/ui/components/coral/foundation/form/advancedselect";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field

export interface IFormAdvancedSelect extends ICommonAttributes, IRenderCondition {
    name?: string;

    deleteHint?: boolean; // =true

    required?: boolean;

    validation?: string[];

    maximized?: boolean;

    toolbar?: GraniteNode | GraniteNode[];

    field?: GraniteNode | GraniteNode[];
}
