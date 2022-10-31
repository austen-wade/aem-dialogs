import { ResourceType } from "../types";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
import { DialogVariant } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";

export interface IDialog extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    "jcr:title": string;
    closable?: boolean; // ='true'
    variant?: DialogVariant;
    footer?: GraniteNode | GraniteNode[];
}

export interface IDialogFooterItemParentconfig {
    close?: boolean;
}

export class Dialog extends GraniteContainer<IDialog> {
    constructor(tag: string, options: IDialog) {
        super(tag, options, ResourceType.DIALOG);
    }
}

export class DialogFooterItemParentconfig extends GraniteContainer<IDialogFooterItemParentconfig> {
    constructor(tag = "parentConfig", options?: IDialogFooterItemParentconfig) {
        super(tag, options);
    }
}
