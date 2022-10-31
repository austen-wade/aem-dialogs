import { ResourceType } from "../../../types";
import { ICommonAttributes } from "../../CommonAttributes";
import { GraniteContainer } from "../../GraniteContainer";

export interface IFormResponsesOpenPrompt extends ICommonAttributes {
    open?: string;
    redirect?: string;
    "jcr:title"?: string;
    text?: string;
}

export class OpenPrompt extends GraniteContainer<IFormResponsesOpenPrompt> {
    constructor(tag: string, options?: IFormResponsesOpenPrompt) {
        super(tag, options, ResourceType.FORM_RESPONSES_OPEN_PROMPT);
    }
}
