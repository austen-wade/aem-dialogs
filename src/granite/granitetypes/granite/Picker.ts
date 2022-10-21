import { GraniteNode } from "../../GraniteNode";

export const resourceType = " /libs/granite/ui/components/coral/foundation/picker";
export interface Picker {
    "jcr:title"?: string;

    modeGroup?: string;

    targetCollection?: string;

    path?: string;

    rootPath?: string; // ='/'

    selectionCount?: string; // ='multiple'

    views: GraniteNode | GraniteNode[];

    search?: GraniteNode | GraniteNode[];

    actions?: GraniteNode | GraniteNode[];
}
export interface PickerSearch {
    name?: string;

    targetCollection?: string;

    form?: GraniteNode | GraniteNode[];

    views: GraniteNode | GraniteNode[];
}
export interface PickerActions {
    selection?: GraniteNode | GraniteNode[];
}
