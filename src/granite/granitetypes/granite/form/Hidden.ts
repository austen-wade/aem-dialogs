import { ICommonAttributes } from "../CommonAttributes";
import { IRenderCondition } from "../RenderCondition";

export const resourceType = "/libs/granite/ui/components/coral/foundation/form/hidden";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface IFormHidden extends ICommonAttributes, IRenderCondition {
    name?: string;

    disabled?: boolean;

    value?: string;
}
