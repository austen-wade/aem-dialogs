import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { DialogVariant } from "./LiteralTypes";
import { ResourceType } from "../../../types";

interface IDialog extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    "jcr:title": string;

    closable?: boolean; // ='true'

    variant?: DialogVariant;

    footer?: GraniteNode | GraniteNode[];
}

interface IDialogFooterItemParentconfig {
    close?: boolean;
}

export function Dialog(tag: string, options: IDialog): GraniteContainer<IDialog> {
    return new GraniteContainer<IDialog>(tag, options, ResourceType.DIALOG);
}

export function DialogFooterItemParentconfig(
    tag = "parentConfig",
    options?: IDialogFooterItemParentconfig,
): GraniteContainer<IDialogFooterItemParentconfig> {
    return new GraniteContainer<IDialogFooterItemParentconfig>(tag, options);
}
