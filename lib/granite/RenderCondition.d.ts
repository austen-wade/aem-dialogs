import { GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
export interface IRenderCondition {
    renderCondition?: GraniteNode;
}
export declare class RenderCondition extends GraniteContainer<IRenderCondition> {
    constructor(tag: string, options?: IRenderCondition);
}
