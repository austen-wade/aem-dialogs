import { GraniteNode } from "../../GraniteNode";
export interface IPicker {
    "jcr:title"?: string;
    modeGroup?: string;
    targetCollection?: string;
    path?: string;
    rootPath?: string;
    selectionCount?: string;
    views: GraniteNode | GraniteNode[];
    search?: GraniteNode | GraniteNode[];
    actions?: GraniteNode | GraniteNode[];
}
export interface IPickerSearch {
    name?: string;
    targetCollection?: string;
    form?: GraniteNode | GraniteNode[];
    views: GraniteNode | GraniteNode[];
}
export interface IPickerActions {
    selection?: GraniteNode | GraniteNode[];
}
