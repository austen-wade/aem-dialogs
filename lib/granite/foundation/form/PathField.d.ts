import { Field, FieldOptions } from "./Field";
export interface PathFieldOptions extends FieldOptions {
    rootPath: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    multiple?: boolean;
    nodeTypes?: string | string[];
    forceSelection?: boolean;
}
export declare class PathField extends Field {
    options: PathFieldOptions;
    constructor(tag?: string, options?: PathFieldOptions);
}
