import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
import { DisplayMode } from "./LiteralTypes";

export interface ICycleButton extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    displayMode?: DisplayMode;

    variant?: string; // < 'actionBar'
}
export interface ICycleButtonItem extends ICommonAttributes, IRenderCondition {
    selected?: boolean;

    text?: string;

    text_commentI18n?: string;

    icon?: string;
}
