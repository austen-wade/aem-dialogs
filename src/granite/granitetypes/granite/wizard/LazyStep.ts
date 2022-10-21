import { GraniteNode } from "../../../GraniteNode";

export interface IWizardLazyStep {
    "jcr:title": string;

    validation?: boolean; // ='true'

    prev?: GraniteNode | GraniteNode[];

    next?: GraniteNode | GraniteNode[];

    content: GraniteNode | GraniteNode[];
}
