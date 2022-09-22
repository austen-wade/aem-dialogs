import { AemNode, BaseOptions } from "../AemNode";
import { ResourceType } from "../types";

export interface ContainerOptions extends BaseOptions {
    name: string,
    margin?: boolean,
    maximized?: boolean,
    'granite:class'?: string,
}
export class Container extends AemNode {
    options: ContainerOptions = { name: "container" };

    constructor(options: ContainerOptions) {
        super(options.name, ResourceType.CONTAINER);
        for (const key in options) {
            this.addProp(key, options[key as keyof ContainerOptions]);
        }
    }
}
