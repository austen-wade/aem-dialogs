import { AemNode, BaseOptions } from "../../base/AemNode";
import { ResourceType } from "../../types";

export interface FixedColumnsOptions extends BaseOptions {
    margin?: boolean;
    maximized?: boolean;
}
export class FixedColumns extends AemNode {
    options: FixedColumnsOptions = {};

    constructor(tag = "columns", options?: FixedColumnsOptions) {
        super(tag, ResourceType.FIXED_COLUMNS);
        for (const key in options) {
            this.setProp(key, options[key as keyof FixedColumnsOptions]);
        }
    }
}
