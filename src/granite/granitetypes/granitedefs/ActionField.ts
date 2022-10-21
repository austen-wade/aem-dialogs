import { GraniteNode } from "../../GraniteNode";

const resourceType = " /libs/granite/ui/components/coral/foundation/form/actionfield";

export interface ActionField {
    field?: GraniteNode | GraniteNode[];
    action?: GraniteNode | GraniteNode[];
}
