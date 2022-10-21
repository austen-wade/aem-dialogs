import { ResourceType } from "../../types";
import { GraniteNode, GraniteOptions } from "../GraniteNode";

export interface ContainerOptions extends GraniteOptions {
    margin?: boolean;
    maximized?: boolean;
}
export class Container extends GraniteNode {
    constructor(tag = "container", options?: ContainerOptions) {
        super(tag, ResourceType.CONTAINER);
        for (const key in options) {
            this.setProp(key, options[key as keyof ContainerOptions]);
        }
    }
}
