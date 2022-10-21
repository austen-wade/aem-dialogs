import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";

export interface IModeSwitcher extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    active?: string;
    group?: string;
    margin?: boolean;
    maximized?: boolean;
}

export class Switcher extends GraniteContainer<IModeSwitcher> {
    constructor(tag: string, options?: IModeSwitcher) {
        super(tag, options);
    }
}
