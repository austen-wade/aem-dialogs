import { GraniteNode, GraniteOptions } from "../../GraniteNode";
export declare type TabsOptions = GraniteOptions;
export declare class DialogTabs extends GraniteNode {
    options: TabsOptions;
    constructor(tag?: string, options?: TabsOptions);
}
export interface TabOptions extends GraniteOptions {
    title: string;
}
export declare class Tab extends GraniteNode {
    options: TabOptions;
    constructor(tag?: string, options?: TabOptions);
}
