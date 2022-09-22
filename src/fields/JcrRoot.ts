import { AemNode, BaseOptions } from "../AemNode";
import { ResourceType } from "../types";

export type JcrRootOptions = BaseOptions;
export class JcrRoot extends AemNode {
    options: JcrRootOptions = {};

    constructor(options?: JcrRootOptions) {
        super("jcr:root", ResourceType.DIALOG, [
            { field: "xmlns:cq", value: "http://www.day.com/jcr/cq/1.0" },
            {
                field: "xmlns:granite",
                value: "http://www.adobe.com/jcr/granite/1.0",
            },
            { field: "xmlns:jcr", value: "http://www.jcp.org/jcr/1.0" },
            { field: "xmlns:nt", value: "http://www.jcp.org/jcr/nt/1.0" },
            {
                field: "xmlns:sling",
                value: "http://sling.apache.org/jcr/sling/1.0",
            },
        ]);

        for (const key in options) {
            this.addProp(key, options[key as keyof JcrRootOptions]);
        }
    }
}
