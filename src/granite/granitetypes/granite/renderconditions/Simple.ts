import { ResourceType } from "../../../../types";
import { GraniteContainer } from "../GraniteContainer";

export interface IRenderConditionsSimple {
    expression?: boolean; // =true
}

export class Simple extends GraniteContainer<IRenderConditionsSimple> {
    constructor(tag: string, options?: IRenderConditionsSimple) {
        super(tag, options, ResourceType.RENDER_CONDITIONS_SIMPLE);
    }
}
