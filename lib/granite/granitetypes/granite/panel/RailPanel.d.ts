import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";
export interface IPanelRailPanel extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    src?: string;
    active?: boolean;
}
export declare class RailPanel extends GraniteContainer<IPanelRailPanel> {
    constructor(tag: string, options?: IPanelRailPanel);
}
