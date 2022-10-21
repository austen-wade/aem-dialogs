import { GraniteNode } from "../../../GraniteNode";
import { ICommonAttributes } from "../CommonAttributes";
import { IRenderCondition } from "../RenderCondition";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/advancedselect";
export interface IFormAdvancedSelect extends ICommonAttributes, IRenderCondition {
    name?: string;
    deleteHint?: boolean;
    required?: boolean;
    validation?: string[];
    maximized?: boolean;
    toolbar?: GraniteNode | GraniteNode[];
    field?: GraniteNode | GraniteNode[];
}
