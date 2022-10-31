import { GraniteNode } from "../GraniteNode";
import { FormField } from "./Field";
export interface IActionField {
    field?: GraniteNode | GraniteNode[];
    action?: GraniteNode | GraniteNode[];
}
export declare class ActionField extends FormField<IActionField> {
    constructor(tag: string, options?: IActionField);
}
