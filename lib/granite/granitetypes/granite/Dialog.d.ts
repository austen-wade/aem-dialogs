import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { DialogVariant } from "./LiteralTypes";
export interface IDialog extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    "jcr:title": string;
    closable?: boolean;
    variant?: DialogVariant;
    footer?: GraniteNode | GraniteNode[];
}
export interface IDialogFooterItemParentconfig {
    close?: boolean;
}
export declare class Dialog extends GraniteContainer<IDialog> {
    constructor(tag: string, options: IDialog);
}
export declare class DialogFooterItemParentconfig extends GraniteContainer<IDialogFooterItemParentconfig> {
    constructor(tag?: string, options?: IDialogFooterItemParentconfig);
}
