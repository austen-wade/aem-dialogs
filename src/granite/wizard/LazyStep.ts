import { ResourceType } from "../../types";
import { GraniteContainer } from "../GraniteContainer";
import { GraniteNode } from "../GraniteNode";

export interface IWizardLazyStep {
    "jcr:title": string;
    validation?: boolean; // ='true'
    prev?: GraniteNode | GraniteNode[];
    next?: GraniteNode | GraniteNode[];
    content: GraniteNode | GraniteNode[];
}

export class LazyStep extends GraniteContainer<IWizardLazyStep> {
    constructor(tag: string, options?: IWizardLazyStep) {
        super(tag, options, ResourceType.WIZARD_LAZY_STEP);
    }
}
