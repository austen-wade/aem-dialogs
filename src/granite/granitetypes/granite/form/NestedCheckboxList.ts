import { GraniteNode } from "../../../GraniteNode";
import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";

export interface IFormNestedCheckboxList extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    disconnected?: boolean;
}
export interface IFormNestedCheckboxListSublist {
    sublist?: GraniteNode | GraniteNode[];
}
