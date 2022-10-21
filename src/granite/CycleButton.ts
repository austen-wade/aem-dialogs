import { ResourceType } from "../types";
import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "./GraniteContainer";
import { DisplayMode } from "./LiteralTypes";
import { IRenderCondition } from "./RenderCondition";

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

export class CycleButton extends GraniteContainer<ICycleButton> {
    constructor(tag: string, options?: ICycleButton) {
        super(tag, options, ResourceType.CYCLE_BUTTON);
    }
}

export class CycleButtonItem extends GraniteContainer<ICycleButtonItem> {
    constructor(tag: string, options?: ICycleButtonItem) {
        super(tag, options);
    }
}
