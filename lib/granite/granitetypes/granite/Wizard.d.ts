import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
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
    validation?: boolean;
    prev?: GraniteNode | GraniteNode[];
    next?: GraniteNode | GraniteNode[];
}
export declare class Wizard extends GraniteContainer<IWizard> {
    constructor(tag: string, options: IWizard);
}
export declare class WizardStep extends GraniteContainer<IWizardStep> {
    constructor(tag: string, options: IWizardStep);
}
export declare class WizardStepParentconfig extends GraniteContainer<IWizardStepParentconfig> {
    constructor(tag: string, options?: IWizardStepParentconfig);
}
