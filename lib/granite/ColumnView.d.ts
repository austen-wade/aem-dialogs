import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
export interface IColumnView extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    selectionMode?: boolean;
    selectionCount?: string;
    src?: string;
    path?: string;
    loadAncestors?: boolean;
    showRoot?: boolean;
    rootPath?: string;
    itemResourceType?: string;
    limit?: number;
    size?: number;
    previewSrc?: string;
    previewMaximized?: boolean;
    metaResourceType?: string;
    modeGroup?: string;
}
export declare class ColumnView extends GraniteContainer<IColumnView> {
    constructor(tag: string, options: IColumnView);
}
