import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { ContainerOptions } from "./Container";

export interface TabsOptions {
    tag: string;
}

export class DialogTabs extends AemNode {
    options: TabsOptions = {
        tag: "tabs",
    };

    constructor(options: TabsOptions) {
        super(options.tag, ResourceType.TABS);

        for (const key in options) {
            this.addProp(key, options[key as keyof TabsOptions]);
        }
    }
}

export type TabOptions = ContainerOptions;

export class Tab extends AemNode {
    options: TabOptions = {
        tag: "tab",
    };

    constructor(options: TabOptions) {
        super(options.tag, ResourceType.CONTAINER);

        for (const key in options) {
            this.addProp(key, options[key as keyof TabOptions]);
        }
    }
}
