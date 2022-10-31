import { Prop } from "../types";
export interface BaseOptions {
    tag?: string;
}
export declare class AemNode {
    readonly tag: string;
    props: Prop[];
    readonly children: AemNode[];
    constructor(tag: string, resourceType?: string, props?: Prop[]);
    private addChild;
    child(child: AemNode | AemNode[]): AemNode;
    items(children?: AemNode[]): AemNode;
    setProp(field: string, value: any): void;
    removeProp(field: string): void;
    private renderXmlTree;
    xml(isRoot?: boolean): string;
}
