import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { AccordionVariant } from "./LiteralTypes";
import { ResourceType } from "../../../types";

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

export class Accordion extends GraniteContainer<IAccordion> {
    constructor(tag: string, options?: IAccordion) {
        super(tag, options, ResourceType.ACCORDION);
    }
}
export class AccordionItem extends GraniteContainer<IAccordionItem> {
    constructor(tag: string, options?: IAccordionItem) {
        super(tag, options);
    }
}
export class AccordionItemParentconfig extends GraniteContainer<IAccordionItemParentconfig> {
    constructor(tag: string, options?: IAccordionItemParentconfig) {
        super(tag, options);
    }
}
