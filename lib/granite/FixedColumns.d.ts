import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
export interface IFixedColumns extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    margin?: boolean;
    maximized?: boolean;
}
export declare class FixedColumns extends GraniteContainer<IFixedColumns> {
    constructor(tag?: string, options?: IFixedColumns);
}
