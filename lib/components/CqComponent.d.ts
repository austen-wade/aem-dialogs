import { AemNode } from "../base/AemNode";
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
export declare class CqComponent extends AemNode {
    constructor(tag: string, options?: ICqComponents);
}
export declare function createComponent(title: string, componentGroup: string, superType?: string): CqComponent;
