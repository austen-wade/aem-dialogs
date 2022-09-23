import { AemNode } from "../AemNode";
import { FieldOptions } from "./Field";
export interface MultifieldOptions extends FieldOptions {
    composite?: boolean;
    deleteHint?: boolean;
    typeHint?: string;
    required?: boolean;
    validation?: string;
}
export declare class Multifield extends AemNode {
    options: MultifieldOptions;
    constructor(tag?: string, options?: MultifieldOptions);
}
