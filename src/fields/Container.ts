import { AemNode, BaseOptions } from "../AemNode";
import { ResourceType } from "../types";

export interface ContainerOptions extends BaseOptions {
    margin?: boolean;
    maximized?: boolean;
    "granite:class"?: string;
}
export class Container extends AemNode {
    options: ContainerOptions = {};

    constructor(tag = "container", options?: ContainerOptions) {
        super(tag, ResourceType.CONTAINER);
        for (const key in options) {
            this.addProp(key, options[key as keyof ContainerOptions]);
        }
    }
}
