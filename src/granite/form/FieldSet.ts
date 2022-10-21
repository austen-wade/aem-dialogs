import { ResourceType } from "../../types";
import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";
import { FormField } from "./Field";

export interface IFormFieldSet extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    "jcr:title"?: string;
}

export class FieldSet extends FormField<IFormFieldSet> {
    constructor(tag: string, options?: IFormFieldSet) {
        super(tag, options, ResourceType.FORM_FIELD_SET);
    }
}
