import { AemNode } from "../base/AemNode";
import { JCR_PRIMARY_TYPES } from "../constants";
import { Namespaces } from "../types";

export interface ICqComponents {
    "sling:resourceSuperType"?: string;
    "jcr:title"?: string;
    "jcr:description"?: string;
    "componentGroup"?: string;
    "cq:styleElements"?: string;
    "cq:isContainer"?: boolean;
    "dialogPath"?: string;
    "cq:cellName"?: string;
    "cq:noDecoration"?: boolean;
    "cq:templatePath"?: string;
    "jcr:created"?: string;
    "cq:icon"?: string;
}

export class CqComponent extends AemNode {
    constructor(tag: string, options?: ICqComponents) {
        super(tag);

        const ns = Object.entries(Namespaces);        
        ns.forEach(([, prop]) => {
            this.setProp(prop.field, prop.value);
        });

        this.setProp("jcr:primaryType", JCR_PRIMARY_TYPES.CQ_COMPONENT);

        for (const key in options) {
            this.setProp(key, options[key as keyof ICqComponents]);
        }
    }
}

export function createComponent(title: string, componentGroup: string, superType?: string): CqComponent {
    return new CqComponent("jcr:root", {
        "jcr:title": title,
        "sling:resourceSuperType": superType,
        componentGroup,
    });
}
