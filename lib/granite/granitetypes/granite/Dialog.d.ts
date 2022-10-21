import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { DialogVariant } from "./LiteralTypes";
interface IDialog extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    "jcr:title": string;
    closable?: boolean;
    variant?: DialogVariant;
    footer?: GraniteNode | GraniteNode[];
}
interface IDialogFooterItemParentconfig {
    close?: boolean;
}
export declare function Dialog(tag?: string, options?: IDialog): GraniteContainer<IDialog>;
export declare function DialogFooterItemParentconfig(tag?: string, options?: IDialogFooterItemParentconfig): GraniteContainer<IDialogFooterItemParentconfig>;
export {};
