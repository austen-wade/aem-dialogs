import { GraniteContainer } from "../GraniteContainer";
import { GraniteNode } from "../GraniteNode";
export interface IWizardLazyStep {
    "jcr:title": string;
    validation?: boolean;
    prev?: GraniteNode | GraniteNode[];
    next?: GraniteNode | GraniteNode[];
    content: GraniteNode | GraniteNode[];
}
export declare class LazyStep extends GraniteContainer<IWizardLazyStep> {
    constructor(tag: string, options?: IWizardLazyStep);
}
