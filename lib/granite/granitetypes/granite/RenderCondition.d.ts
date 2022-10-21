import { GraniteNode } from "../../GraniteNode";
import { GraniteContainer } from "./GraniteContainer";
export interface IRenderCondition {
    renderCondition?: GraniteNode;
}
export declare class RenderCondition extends GraniteContainer<IRenderCondition> {
    constructor(tag: string, options?: IRenderCondition);
}
