import { GraniteNode } from "../../GraniteNode";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { Alignment, SelectionMode, SortMode, SortType } from "./LiteralTypes";
export interface ITable extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    selectionMode?: SelectionMode;
    selectionCount?: string;
    src?: string;
    path?: string;
    itemResourceType?: string;
    limit?: number;
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
export declare class Table extends GraniteContainer<ITable> {
    constructor(tag: string, options?: ITable);
}
export declare class TableColumn extends GraniteContainer<ITableColumn> {
    constructor(tag: string, options?: ITableColumn);
}
