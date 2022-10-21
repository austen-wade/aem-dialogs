import { ResourceType } from "../../../types";
import { GraniteContainer } from "./GraniteContainer";

export interface IInclude {
    path?: string;
    resourceType?: string;
}

export class Include extends GraniteContainer<IInclude> {
    constructor(tag: string, options?: IInclude) {
        super(tag, options, ResourceType.INCLUDE);
    }
}
