import { ICommonAttributes } from "../../CommonAttributes";
import { GraniteContainer } from "../../GraniteContainer";
export interface IFormResponsesOpenPrompt extends ICommonAttributes {
    open?: string;
    redirect?: string;
    "jcr:title"?: string;
    text?: string;
}
export declare class OpenPrompt extends GraniteContainer<IFormResponsesOpenPrompt> {
    constructor(tag: string, options?: IFormResponsesOpenPrompt);
}
