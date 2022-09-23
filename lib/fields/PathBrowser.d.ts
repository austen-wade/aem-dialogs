import { AemNode } from "../AemNode";
import { FieldOptions } from "./Field";
export interface PathBrowserOptions extends FieldOptions {
    rootPath: string;
    required?: boolean;
}
export declare class PathBrowser extends AemNode {
    options: PathBrowserOptions;
    constructor(tag?: string, options?: PathBrowserOptions);
}
