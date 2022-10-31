import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
import { MasonryLayout } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";
export interface IMasonry extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    layout?: MasonryLayout;
    columnWidth?: number;
    spacing?: number;
    selectionMode?: boolean;
    orderable?: boolean;
    selectionCount?: string;
    src?: string;
    path?: string;
    itemResourceType?: string;
    limit?: number;
    size?: number;
    metaPath?: string;
    metaResourceType?: string;
    modeGroup?: string;
    itemReorderAction?: string;
    "itemReorderAction.abs"?: string;
    renderItemElement?: boolean;
    skipEmptyItem?: boolean;
    emptyitem?: GraniteNode | GraniteNode[];
}
export declare class Masonry extends GraniteContainer<IMasonry> {
    constructor(tag: string, options?: IMasonry);
}
