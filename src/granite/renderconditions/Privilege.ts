import { ResourceType } from "../../types";
import { GraniteContainer } from "../GraniteContainer";

export interface IRenderConditionsPrivilege {
    path?: string;
    privileges?: string[];
}

export class Privilege extends GraniteContainer<IRenderConditionsPrivilege> {
    constructor(tag: string, options?: IRenderConditionsPrivilege) {
        super(tag, options, ResourceType.RENDER_CONDITIONS_PRIVILEGE);
    }
}
