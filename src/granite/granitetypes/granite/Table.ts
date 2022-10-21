import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { Alignment, SelectionMode, SortMode, SortType } from "./LiteralTypes";

export interface ITable extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    selectionMode?: SelectionMode;

    selectionCount?: string; // ='multiple'

    src?: string;

    path?: string;

    itemResourceType?: string;

    limit?: number; // ='40'

    size?: number;

    sortMode?: SortMode;

    orderable?: boolean;

    rowReorderAction?: string;

    "rowReorderAction.abs"?: string;

    metaPath?: string;

    metaResourceType?: string;

    modeGroup?: string;

    skipEmptyRow?: boolean;

    columns?: GraniteNode | GraniteNode[];

    columnsdatasource?: GraniteNode | GraniteNode[];

    emptyrow?: GraniteNode | GraniteNode[];
}

export interface ITableColumn {
    name?: string;

    select?: boolean;

    order?: boolean;

    "jcr:title"?: string;

    alignment?: Alignment;

    fixedWidth?: boolean;

    draggable?: boolean;

    hidden?: boolean;

    sortable?: boolean;

    sortType?: SortType;
}
