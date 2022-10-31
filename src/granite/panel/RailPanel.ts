import { ResourceType } from "../../types";
import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";

export interface IPanelRailPanel extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    src?: string;
    active?: boolean;
}

export class RailPanel extends GraniteContainer<IPanelRailPanel> {
    constructor(tag: string, options?: IPanelRailPanel) {
        super(tag, options, ResourceType.PANEL_RAIL_PANEL);
    }
}
