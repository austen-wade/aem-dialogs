import { ResourceType } from "../../../../../types";
import { ICommonAttributes } from "../../CommonAttributes";
import { GraniteContainer } from "../../GraniteContainer";

export interface IFormResponsesReload extends ICommonAttributes {
    "jcr:title"?: string;
}
export class Reload extends GraniteContainer<IFormResponsesReload> {
    constructor(tag: string, options?: IFormResponsesReload) {
        super(tag, options, ResourceType.FORM_RESPONSES_RELOAD);
    }
}
