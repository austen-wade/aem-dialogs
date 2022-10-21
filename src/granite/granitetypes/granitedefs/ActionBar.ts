import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/actionbar";

export interface ActionBar extends CommonAttributes, RenderCondition {
    margin?: boolean;

    size?: string; // < 'M', 'L'

    primary: GraniteNode | GraniteNode[];

    secondary?: GraniteNode | GraniteNode[];
}
