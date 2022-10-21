import { ResourceType } from "../../../types";
import { Field, FieldOptions } from "./Field";

export interface PathBrowserOptions extends FieldOptions {
    rootPath: string;
    required?: boolean;
}
export class PathBrowser extends Field {
    options: PathBrowserOptions = { rootPath: "/content" };

    constructor(tag = "pathbrowser", options?: PathBrowserOptions) {
        super(tag, ResourceType.PATH_BROWSER);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof PathBrowserOptions]);
        }
    }
}
