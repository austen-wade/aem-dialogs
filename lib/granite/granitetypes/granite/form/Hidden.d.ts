import { ICommonAttributes } from "../CommonAttributes";
import { IRenderCondition } from "../RenderCondition";
import { FormField } from "./Field";
export interface IFormHidden extends ICommonAttributes, IRenderCondition {
    name?: string;
    disabled?: boolean;
    value?: string;
}
export declare class Hidden extends FormField<IFormHidden> {
    constructor(tag: string, options?: IFormHidden);
}
