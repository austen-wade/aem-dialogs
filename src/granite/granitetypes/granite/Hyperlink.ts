import { IconSize } from "../../../icons";
import { ICommonAttributes } from "./CommonAttributes";
import { IRenderCondition } from "./RenderCondition";
import { LinkCheckerSkip } from "./LiteralTypes";
import { GraniteContainer } from "./GraniteContainer";
import { ResourceType } from "../../../types";

export interface IHyperlink extends ICommonAttributes, IRenderCondition {
    href?: string;
    href_i18n?: string;
    rel?: string;
    target?: string;
    text?: string;
    text_commentI18n?: string;
    hideText?: boolean;
    "x-cq-linkchecker"?: LinkCheckerSkip;
    icon?: string;
    iconSize?: IconSize;
}

export class Hyperlink extends GraniteContainer<IHyperlink> {
    constructor(tag: string, options?: IHyperlink) {
        super(tag, options, ResourceType.HYPERLINK);
    }
}
