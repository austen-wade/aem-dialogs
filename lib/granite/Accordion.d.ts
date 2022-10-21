import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
import { AccordionVariant } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";
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
export declare class Accordion extends GraniteContainer<IAccordion> {
    constructor(tag: string, options?: IAccordion);
}
export declare class AccordionItem extends GraniteContainer<IAccordionItem> {
    constructor(tag: string, options?: IAccordionItem);
}
export declare class AccordionItemParentconfig extends GraniteContainer<IAccordionItemParentconfig> {
    constructor(tag: string, options?: IAccordionItemParentconfig);
}
