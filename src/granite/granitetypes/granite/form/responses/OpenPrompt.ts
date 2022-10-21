import { ICommonAttributes } from "../../CommonAttributes";

export interface IFormResponsesOpenPrompt extends ICommonAttributes {
    open?: string;

    redirect?: string;

    "jcr:title"?: string;

    text?: string;
}
