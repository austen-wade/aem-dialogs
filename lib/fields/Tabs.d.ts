import { AemNode, BaseOptions } from "../AemNode";
import { ContainerOptions } from "./Container";
export declare type TabsOptions = BaseOptions;
export declare class DialogTabs extends AemNode {
    options: TabsOptions;
    constructor(tag?: string, options?: TabsOptions);
}
export declare type TabOptions = ContainerOptions;
export declare class Tab extends AemNode {
    options: TabOptions;
    constructor(tag?: string, options?: TabOptions);
}
