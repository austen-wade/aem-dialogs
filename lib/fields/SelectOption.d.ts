import { AemNode } from "../AemNode";
export interface SelectOptionOptions {
    text: string;
    value: string;
}
export declare class SelectOption extends AemNode {
    options: SelectOptionOptions;
    constructor(tag?: string, options?: SelectOptionOptions);
}
