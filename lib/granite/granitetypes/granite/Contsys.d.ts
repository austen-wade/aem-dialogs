import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
export interface IContsys extends IRenderCondition, IGraniteContainer {
}
export declare class IContsys extends GraniteContainer<IContsys> {
    constructor(tag: string, options?: IContsys);
}
