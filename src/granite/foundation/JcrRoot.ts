import { ResourceType } from "../../types";
import { GraniteNode, GraniteOptions } from "../GraniteNode";

export type JcrRootOptions = GraniteOptions;
export class JcrRoot extends GraniteNode {
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
            this.setProp(key, options[key as keyof JcrRootOptions]);
        }
    }
}
