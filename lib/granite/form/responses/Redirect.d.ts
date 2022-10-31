import { ICommonAttributes } from "../../CommonAttributes";
import { GraniteContainer } from "../../GraniteContainer";
export interface IFormResponsesRedirect extends ICommonAttributes {
    href?: string;
}
export declare class Redirect extends GraniteContainer<IFormResponsesRedirect> {
    constructor(tag: string, options?: IFormResponsesRedirect);
}
