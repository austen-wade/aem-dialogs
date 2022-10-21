import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/columnview";
export interface ColumnView extends CommonAttributes, RenderCondition, GraniteContainer {
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
