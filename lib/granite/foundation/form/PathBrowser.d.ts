import { Field, FieldOptions } from "./Field";
export interface PathBrowserOptions extends FieldOptions {
    rootPath: string;
    required?: boolean;
}
export declare class PathBrowser extends Field {
    options: PathBrowserOptions;
    constructor(tag?: string, options?: PathBrowserOptions);
}
