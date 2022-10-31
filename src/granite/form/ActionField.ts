import { ResourceType } from "../../types";
import { GraniteNode } from "../GraniteNode";
import { FormField } from "./Field";

export interface IActionField {
    field?: GraniteNode | GraniteNode[];
    action?: GraniteNode | GraniteNode[];
}

export class ActionField extends FormField<IActionField> {
    constructor(tag: string, options?: IActionField) {
        super(tag, options, ResourceType.ACTION_FIELD);
    }
}
