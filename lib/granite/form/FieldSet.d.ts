import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";
import { FormField } from "./Field";
export interface IFormFieldSet extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    "jcr:title"?: string;
}
export declare class FieldSet extends FormField<IFormFieldSet> {
    constructor(tag: string, options?: IFormFieldSet);
}
