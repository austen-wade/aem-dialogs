import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
interface IContainer extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    margin?: boolean;
    maximized?: boolean;
}
export declare class Container extends GraniteContainer<IContainer> {
    constructor(tag: string, options?: IContainer);
}
export {};
