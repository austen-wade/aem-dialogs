import { CommonAttributes } from "../CommonAttributes";
import { GraniteContainer } from "../GraniteContainer";
import { RenderCondition } from "../RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/panel/railpanel";
export interface PanelRailPanel extends CommonAttributes, RenderCondition, GraniteContainer {
    src?: string;

    active?: boolean;
}
