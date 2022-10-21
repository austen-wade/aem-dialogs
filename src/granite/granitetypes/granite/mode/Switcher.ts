import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";

export interface IModeSwitcher extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    active?: string;

    group?: string;

    margin?: boolean;

    maximized?: boolean;
}
