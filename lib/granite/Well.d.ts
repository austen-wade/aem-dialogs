import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
export interface IWell extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    margin?: boolean;
}
export declare class Well extends GraniteContainer<IWell> {
    constructor(tag: string, options?: IWell);
}
