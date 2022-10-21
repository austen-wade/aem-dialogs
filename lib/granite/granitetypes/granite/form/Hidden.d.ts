import { ICommonAttributes } from "../CommonAttributes";
import { IRenderCondition } from "../RenderCondition";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/hidden";
export interface IFormHidden extends ICommonAttributes, IRenderCondition {
    name?: string;
    disabled?: boolean;
    value?: string;
}
