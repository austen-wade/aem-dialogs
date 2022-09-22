import { AemNode, BaseOptions } from "../AemNode";
import { ResourceType } from "../types";

export interface ContainerOptions extends BaseOptions {
    tag: string;
    margin?: boolean;
    maximized?: boolean;
    "granite:class"?: string;
}
export class Container extends AemNode {
    options: ContainerOptions = { tag: "container" };

    constructor(options: ContainerOptions) {
        super(options.tag, ResourceType.CONTAINER);
        for (const key in options) {
            this.addProp(key, options[key as keyof ContainerOptions]);
        }
    }
}
