import { AemNode } from "../AemNode";
export declare class RichTextPluginNode extends AemNode {
    id: string;
    features: string | string[];
    constructor(tag: string, _id: string, _features: string | string[]);
}
