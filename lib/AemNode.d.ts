import { Prop } from "./types";
export interface BaseOptions {
    "granite:class"?: string;
}
export declare class AemNode {
    readonly tag: string;
    props: Prop[];
    readonly children: AemNode[];
    constructor(tag: string, resourceType?: string, props?: Prop[]);
    child(child: AemNode): AemNode;
    addProp(field: string, value: any): void;
    xml(isRoot?: boolean): string;
    items(children?: AemNode[]): AemNode;
}
