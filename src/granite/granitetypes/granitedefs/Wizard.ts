import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/wizard";

export interface Wizard extends CommonAttributes, RenderCondition, GraniteContainer {
    "jcr:title": string;

    cancelHref?: string;

    trackingFeature?: string;

    trackingElement?: string;
}
export interface WizardStep {
    "jcr:title": string;

    parentConfig?: GraniteNode | GraniteNode[];
}

export interface WizardStepParentconfig {
    validation?: boolean; // ='true'

    prev?: GraniteNode | GraniteNode[];

    next?: GraniteNode | GraniteNode[];
}
