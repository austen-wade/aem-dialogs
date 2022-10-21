import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer } from "./GraniteContainer";
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
