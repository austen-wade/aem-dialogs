import { ResourceType } from "../../../types";
import { GraniteContainer } from "./GraniteContainer";

export interface IMeta {
    name?: string;
    content?: string;
}

export class Meta extends GraniteContainer<IMeta> {
    constructor(tag: string, options?: IMeta) {
        super(tag, options, ResourceType.META);
    }
}
