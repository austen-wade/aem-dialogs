import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
export interface IList extends ICommonAttributes, IRenderCondition, IGraniteContainer {
}
export declare class List extends GraniteContainer<IList> {
    constructor(tag: string, options?: IList);
}
