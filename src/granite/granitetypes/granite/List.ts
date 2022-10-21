import { ResourceType } from "../../../types";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";

export interface IList extends ICommonAttributes, IRenderCondition, IGraniteContainer {}

export class List extends GraniteContainer<IList> {
    constructor(tag: string, options?: IList) {
        super(tag, options, ResourceType.LIST);
    }
}
