import { GraniteContainer } from "../GraniteContainer";
export interface IRenderConditionsSimple {
    expression?: boolean;
}
export declare class Simple extends GraniteContainer<IRenderConditionsSimple> {
    constructor(tag: string, options?: IRenderConditionsSimple);
}
