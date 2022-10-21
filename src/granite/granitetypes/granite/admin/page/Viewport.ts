import { ResourceType } from "../../../../../types";
import { GraniteContainer, IGraniteContainer } from "../../GraniteContainer";

export class Viewport extends GraniteContainer<IGraniteContainer> {
    constructor(tag: string, options?: IGraniteContainer) {
        super(tag, options, ResourceType.VIEWPORT);
    }
}
