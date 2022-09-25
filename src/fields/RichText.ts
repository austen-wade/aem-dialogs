import { AemNode } from "../AemNode";
import { RichTextPluginNode } from "../RichTextPlugins/RichTextPlugin";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface RichTextOptions extends FieldOptions {
    plugins?: RichTextPluginNode[],
    useFixedInlineToolbar?: boolean,
}

export class RichText extends AemNode {
    options: RichTextOptions = {};

    constructor(tag = "text", options?: RichTextOptions) {
        super(tag, ResourceType.RICH_TEXT);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.addProp(key, options[key as keyof RichTextOptions]);
        }
    }
}