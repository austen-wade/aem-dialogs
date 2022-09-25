import { AemNode } from "../AemNode";

export class RichTextPluginNode extends AemNode {
    id: string;
    features: string | string[];

    constructor(tag: string, _id: string, _features: string | string[]) {
        super(tag, "");

        this.id = _id;
        if (typeof _features === "string") {
            this.features = _features;
        } else if (Array.isArray(_features)) {
            this.features = _features.join(',');
        }
        this.features = _features;
    }
}
