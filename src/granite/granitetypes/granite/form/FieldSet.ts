import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";

export interface IFormFieldSet extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    "jcr:title"?: string;
}
