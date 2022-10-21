import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";

export interface IColumnView extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    selectionMode?: boolean; // ='true'

    selectionCount?: string; // ='multiple'

    src?: string;

    path?: string;

    loadAncestors?: boolean;

    showRoot?: boolean;

    rootPath?: string; // ='/'

    itemResourceType?: string;

    limit?: number; // ='40'

    size?: number;

    previewSrc?: string;

    previewMaximized?: boolean;

    metaResourceType?: string;

    modeGroup?: string;
}
