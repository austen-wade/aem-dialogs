const resourceType = " /libs/granite/ui/components/coral/foundation/panel";

export interface Panel extends CommonAttributes, RenderCondition {
    margin?: boolean;

    header?: GraniteNode | GraniteNode[];

    body: GraniteNode | GraniteNode[];

    rail?: GraniteNode | GraniteNode[];

    footer?: GraniteNode | GraniteNode[];
}
export interface PanelRailParentconfig {
    active?: boolean;
}
