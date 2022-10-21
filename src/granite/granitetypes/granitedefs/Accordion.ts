import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/accordion";

export interface Accordion extends CommonAttributes, RenderCondition, GraniteContainer {
    multiple?: boolean;

    variant?: string; // < 'default', 'quiet', 'large'

    margin?: boolean;
}

export interface AccordionItem {
    "jcr:title": string;

    parentConfig?: GraniteNode | GraniteNode[];
}

export interface AccordionItemParentconfig {
    active?: boolean;

    disabled?: boolean;
}
