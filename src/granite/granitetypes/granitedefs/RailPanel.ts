import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/panel/railpanel";
export interface PanelRailPanel extends CommonAttributes, RenderCondition, GraniteContainer {
    src?: string;

    active?: boolean;
}
