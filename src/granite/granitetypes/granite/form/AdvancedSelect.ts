import { ResourceType } from "../../../../types";
import { GraniteNode } from "../../../GraniteNode";
import { ICommonAttributes } from "../CommonAttributes";
import { IRenderCondition } from "../RenderCondition";
import { FormField } from "./Field";

export interface IFormAdvancedSelect extends ICommonAttributes, IRenderCondition {
    name?: string;
    deleteHint?: boolean; // =true
    required?: boolean;
    validation?: string[];
    maximized?: boolean;
    toolbar?: GraniteNode | GraniteNode[];
    field?: GraniteNode | GraniteNode[];
}

export class AdvancedSelect extends FormField<IFormAdvancedSelect> {
    constructor(tag: string, options?: IFormAdvancedSelect) {
        super(tag, options, ResourceType.ADVANCED_SELECT);
    }
}
