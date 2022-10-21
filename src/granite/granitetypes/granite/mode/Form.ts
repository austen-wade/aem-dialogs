import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";
import { Mode } from "../LiteralTypes";
import { ResourceType } from "../../../../types";

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
