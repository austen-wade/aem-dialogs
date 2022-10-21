import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";
import { Mode } from "../LiteralTypes";

export interface IModeForm extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    mode?: Mode;

    group?: string;

    margin?: boolean;

    maximized?: boolean;
}
