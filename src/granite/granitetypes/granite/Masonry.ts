import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "./CommonAttributes";
import { GraniteContainer } from "./GraniteContainer";
import { RenderCondition } from "./RenderCondition";
import { MasonryLayout } from "./LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/masonry";

export interface Masonry extends CommonAttributes, RenderCondition, GraniteContainer {
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
