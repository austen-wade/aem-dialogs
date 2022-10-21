import { AemNode } from "../base/AemNode";
import { IFormField } from "./form";
import { GraniteContainer } from "./GraniteContainer";
export interface RTEChar {
    entity: string;
    name: string;
}
export interface RTEFormat {
    description: string;
    tag: string;
}
export interface IFormRichText extends IFormField {
    name?: string;
    useFixedInlineToolbar?: boolean;
    rteChars: RTEChar[];
    rteFormats: RTEFormat[];
}
export declare class RichText extends GraniteContainer<IFormRichText> {
    options: IFormRichText;
    constructor(tag?: string, options?: IFormRichText);
    addChar(char: RTEChar): void;
    addFormat(format: RTEFormat): void;
    generateConfig(): AemNode[];
}
