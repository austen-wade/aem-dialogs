import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";
export interface IPanelRailPanel extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    src?: string;
    active?: boolean;
}
