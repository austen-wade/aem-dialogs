import { AemNode, BaseOptions } from "../AemNode";
import { ResourceType } from "../types";
import { ContainerOptions } from "./Container";

export type TabsOptions = BaseOptions;

export class DialogTabs extends AemNode {
    options: TabsOptions = {};

    constructor(tag = "tabs", options?: TabsOptions) {
        super(tag, ResourceType.TABS);

        for (const key in options) {
            this.addProp(key, options[key as keyof TabsOptions]);
        }
    }
}

export type TabOptions = ContainerOptions;

export class Tab extends AemNode {
    options: TabOptions = {};

    constructor(tag = "tab", options?: TabOptions) {
        super(tag, ResourceType.CONTAINER);

        for (const key in options) {
            this.addProp(key, options[key as keyof TabOptions]);
        }
    }
}
