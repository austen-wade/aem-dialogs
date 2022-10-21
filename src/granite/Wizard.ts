import { ResourceType } from "../types";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
import { IRenderCondition } from "./RenderCondition";

export interface IWizard extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    "jcr:title": string;
    cancelHref?: string;
    trackingFeature?: string;
    trackingElement?: string;
}
export interface IWizardStep {
    "jcr:title": string;
    parentConfig?: GraniteNode | GraniteNode[];
}

export interface IWizardStepParentconfig {
    validation?: boolean; // ='true'
    prev?: GraniteNode | GraniteNode[];
    next?: GraniteNode | GraniteNode[];
}

export class Wizard extends GraniteContainer<IWizard> {
    constructor(tag: string, options: IWizard) {
        super(tag, options, ResourceType.WIZARD);
    }
}

export class WizardStep extends GraniteContainer<IWizardStep> {
    constructor(tag: string, options: IWizardStep) {
        super(tag, options);
    }
}
export class WizardStepParentconfig extends GraniteContainer<IWizardStepParentconfig> {
    constructor(tag: string, options?: IWizardStepParentconfig) {
        super(tag, options);
    }
}
