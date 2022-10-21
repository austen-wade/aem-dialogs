import { ResourceType } from "../types";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";

export interface IContsys extends IRenderCondition, IGraniteContainer {}

export class IContsys extends GraniteContainer<IContsys> {
    constructor(tag: string, options?: IContsys) {
        super(tag, options, ResourceType.CONTSYS);
    }
}
