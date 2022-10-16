import { AemNode } from "../AemNode";
import { RichTextPluginNode } from "../RichTextPlugins/RichTextPlugin";
import { FieldOptions } from "./Field";
export interface RichTextOptions extends FieldOptions {
    plugins?: RichTextPluginNode[];
    useFixedInlineToolbar?: boolean;
}
export declare class RichText extends AemNode {
    options: RichTextOptions;
    constructor(tag?: string, options?: RichTextOptions);
}
