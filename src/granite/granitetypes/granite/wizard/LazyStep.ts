import { GraniteNode } from "../../../GraniteNode";

export const resourceType = " /libs/granite/ui/components/coral/foundation/wizard/lazystep";

export interface WizardLazyStep {
    "jcr:title": string;

    validation?: boolean; // ='true'

    prev?: GraniteNode | GraniteNode[];

    next?: GraniteNode | GraniteNode[];

    content: GraniteNode | GraniteNode[];
}
