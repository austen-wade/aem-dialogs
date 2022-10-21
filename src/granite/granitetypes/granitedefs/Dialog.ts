import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/dialog";

export interface Dialog extends CommonAttributes, RenderCondition, GraniteContainer {
    "jcr:title": string;

    closable?: boolean; // ='true'

    variant?: string; // < 'default', 'error', 'notice', 'success', 'help', 'info'

    footer?: GraniteNode | GraniteNode[];
}
export interface DialogFooterItemParentconfig {
    close?: boolean;
}
