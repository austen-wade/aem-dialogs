import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface PathBrowserOptions extends FieldOptions {
    name: string,
    rootPath: string,
    required?: boolean,
}
export class PathBrowser extends AemNode {
    options: PathBrowserOptions = { name: 'pathbrowser', rootPath: '/content' };

    constructor(options: PathBrowserOptions) {
        super(options.name, ResourceType.PATH_BROWSER);
        for (const key in options) {
            this.addProp(key, options[key as keyof PathBrowserOptions]);
        }
    }
}
