import { ResourceType } from "../../../types";
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
export class PathField extends Field {
    options: PathFieldOptions = { rootPath: "/content" };

    constructor(tag = "pathfield", options?: PathFieldOptions) {
        super(tag, ResourceType.PATH_FIELD);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof PathFieldOptions]);
        }
    }
}
