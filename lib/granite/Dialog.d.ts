import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
import { DialogVariant } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";
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
