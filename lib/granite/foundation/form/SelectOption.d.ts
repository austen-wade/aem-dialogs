import { GraniteNode } from "../../GraniteNode";
export interface SelectOptionOptions {
    text: string;
    value: string;
}
export declare class SelectOption extends GraniteNode {
    options: SelectOptionOptions;
    constructor(tag?: string, options?: SelectOptionOptions);
}
