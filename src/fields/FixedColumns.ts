import { AemNode } from "../AemNode";
import { ResourceType } from "../types";

export interface FixedColumnsOptions {
    name: string,
    margin?: boolean,
    maximized?: boolean,
}
export class FixedColumns extends AemNode {
    options: FixedColumnsOptions = { name: "columns" };

    constructor(options: FixedColumnsOptions) {
        super(options.name, ResourceType.FIXED_COLUMNS);
        for (const key in options) {
            this.addProp(key, options[key as keyof FixedColumnsOptions]);
        }
    }
}
