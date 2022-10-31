import { ResourceType } from "../../../types";
import { ICommonAttributes } from "../../CommonAttributes";
import { GraniteContainer } from "../../GraniteContainer";

export interface IFormResponsesRedirect extends ICommonAttributes {
    href?: string;
}

export class Redirect extends GraniteContainer<IFormResponsesRedirect> {
    constructor(tag: string, options?: IFormResponsesRedirect) {
        super(tag, options, ResourceType.FORM_RESPONSES_REDIRECT);
    }
}
