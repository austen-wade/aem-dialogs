import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface PathFieldOptions extends FieldOptions {
    name: string,
    rootPath: string,
    emptyText?: string,
    disabled?: boolean,
    required?: boolean,
    multiple?: boolean,
    nodeTypes?: string | string[],
    forceSelection?: boolean,
}
export class PathField extends AemNode {
    options: PathFieldOptions = { name: 'pathfield', rootPath: '/content' };

    constructor(options: PathFieldOptions) {
        super(options.name, ResourceType.PATH_FIELD);
        for (const key in options) {
            this.addProp(key, options[key as keyof PathFieldOptions]);
        }
    }
}
