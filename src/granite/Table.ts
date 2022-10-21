import { ResourceType } from "../types";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
import { SortMode, Alignment, SortType } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";

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

export class Table extends GraniteContainer<ITable> {
    constructor(tag: string, options?: ITable) {
        super(tag, options, ResourceType.TABLE);
    }
}

export class TableColumn extends GraniteContainer<ITableColumn> {
    constructor(tag: string, options?: ITableColumn) {
        super(tag, options);
    }
}
