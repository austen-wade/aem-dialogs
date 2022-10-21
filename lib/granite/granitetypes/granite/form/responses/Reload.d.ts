import { ICommonAttributes } from "../../CommonAttributes";
import { GraniteContainer } from "../../GraniteContainer";
export interface IFormResponsesReload extends ICommonAttributes {
    "jcr:title"?: string;
}
export declare class Reload extends GraniteContainer<IFormResponsesReload> {
    constructor(tag: string, options?: IFormResponsesReload);
}
