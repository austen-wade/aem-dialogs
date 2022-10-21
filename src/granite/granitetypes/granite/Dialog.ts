import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { DialogVariant } from "./LiteralTypes";
import { ResourceType } from "../../../types";

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
