import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { RenderCondition } from "./RenderCondition";
import { DialogVariant } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/dialog";

export interface Dialog extends CommonAttributes, RenderCondition, GraniteContainer {
    "jcr:title": string;

    closable?: boolean; // ='true'

    variant?: DialogVariant;

    footer?: GraniteNode | GraniteNode[];
}
export interface DialogFooterItemParentconfig {
    close?: boolean;
}
