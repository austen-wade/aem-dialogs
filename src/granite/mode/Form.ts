import { ResourceType } from "../../types";
import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "../GraniteContainer";
import { Mode } from "../LiteralTypes";
import { IRenderCondition } from "../RenderCondition";

export interface IModeForm extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    mode?: Mode;
    group?: string;
    margin?: boolean;
    maximized?: boolean;
}

export class ModeForm extends GraniteContainer<IModeForm> {
    constructor(tag: string, options?: IModeForm) {
        super(tag, options, ResourceType.MODE_FORM);
    }
}
