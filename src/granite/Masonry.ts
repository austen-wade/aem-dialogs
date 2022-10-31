import { ResourceType } from "../types";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
import { MasonryLayout } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";

export interface IMasonry extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    layout?: MasonryLayout;
    columnWidth?: number; // ='242'
    spacing?: number; // ='15'
    selectionMode?: boolean;
    orderable?: boolean;
    selectionCount?: string; // ='multiple'
    src?: string;
    path?: string;
    itemResourceType?: string;
    limit?: number; // ='20'
    size?: number;
    metaPath?: string;
    metaResourceType?: string;
    modeGroup?: string;
    itemReorderAction?: string;
    "itemReorderAction.abs"?: string;
    renderItemElement?: boolean; // ='true'
    skipEmptyItem?: boolean;
    emptyitem?: GraniteNode | GraniteNode[];
}

export class Masonry extends GraniteContainer<IMasonry> {
    constructor(tag: string, options?: IMasonry) {
        super(tag, options, ResourceType.MASONRY);
    }
}
