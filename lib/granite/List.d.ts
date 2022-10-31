import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
export interface IList extends ICommonAttributes, IRenderCondition, IGraniteContainer {
}
export declare class List extends GraniteContainer<IList> {
    constructor(tag: string, options?: IList);
}
