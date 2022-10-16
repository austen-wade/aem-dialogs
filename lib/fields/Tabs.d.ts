import { AemNode, BaseOptions } from "../AemNode";
export declare type TabsOptions = BaseOptions;
export declare class DialogTabs extends AemNode {
    options: TabsOptions;
    constructor(tag?: string, options?: TabsOptions);
}
export interface TabOptions extends BaseOptions {
    title: string;
}
export declare class Tab extends AemNode {
    options: TabOptions;
    constructor(tag?: string, options?: TabOptions);
}
