import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { AccordionVariant } from "./LiteralTypes";

export interface IAccordion extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    multiple?: boolean;

    variant?: AccordionVariant;

    margin?: boolean;
}

export interface IAccordionItem {
    "jcr:title": string;

    parentConfig?: GraniteNode | GraniteNode[];
}

export interface IAccordionItemParentconfig {
    active?: boolean;

    disabled?: boolean;
}
