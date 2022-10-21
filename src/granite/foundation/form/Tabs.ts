import { ResourceType } from "../../../types";
import { GraniteNode, GraniteOptions } from "../../GraniteNode";

export type TabsOptions = GraniteOptions;

export class DialogTabs extends GraniteNode {
    options: TabsOptions = {};

    constructor(tag = "tabs", options?: TabsOptions) {
        super(tag, ResourceType.TABS);

        for (const key in options) {
            this.setProp(key, options[key as keyof TabsOptions]);
        }
    }
}

export interface TabOptions extends GraniteOptions {
    title: string;
}

export class Tab extends GraniteNode {
    options: TabOptions = { title: "Properties" };

    constructor(tag = "tab", options?: TabOptions) {
        super(tag, ResourceType.CONTAINER);

        for (const key in options) {
            this.setProp(key, options[key as keyof TabOptions]);
        }
    }
}
