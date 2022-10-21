import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { MasonryLayout } from "./LiteralTypes";
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
