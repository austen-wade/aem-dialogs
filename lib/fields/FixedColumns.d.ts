import { AemNode, BaseOptions } from "../AemNode";
export interface FixedColumnsOptions extends BaseOptions {
    margin?: boolean;
    maximized?: boolean;
}
export declare class FixedColumns extends AemNode {
    options: FixedColumnsOptions;
    constructor(tag?: string, options?: FixedColumnsOptions);
}
