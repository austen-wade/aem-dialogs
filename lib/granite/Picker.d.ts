import { GraniteContainer } from "./GraniteContainer";
import { GraniteNode } from "./GraniteNode";
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
export declare class Picker extends GraniteContainer<IPicker> {
    constructor(tag: string, options?: IPicker);
}
export declare class PickerSearch extends GraniteContainer<IPickerSearch> {
    constructor(tag: string, options?: IPickerSearch);
}
export declare class PickerActions extends GraniteContainer<IPickerActions> {
    constructor(tag: string, options?: IPickerActions);
}
