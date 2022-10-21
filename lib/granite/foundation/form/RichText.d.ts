import { AemNode } from "../../../base/AemNode";
import { FieldOptions } from "./Field";
export interface RTEChar {
    entity: string;
    name: string;
}
export interface RTEFormat {
    description: string;
    tag: string;
}
export interface RichTextOptions extends FieldOptions {
    useFixedInlineToolbar?: boolean;
    rteChars: RTEChar[];
    rteFormats: RTEFormat[];
}
export declare class RichText extends AemNode {
    options: RichTextOptions;
    constructor(tag?: string, options?: RichTextOptions);
    addChar(char: RTEChar): void;
    addFormat(format: RTEFormat): void;
    generateConfig(): AemNode[];
}
