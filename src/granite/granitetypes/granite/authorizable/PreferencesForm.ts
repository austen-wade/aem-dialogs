import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer } from "../GraniteContainer";
import { AlignmentStyle } from "../LiteralTypes";
import { IRenderCondition } from "../RenderCondition";

export interface IAuthorizablePreferencesForm extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    enctype?: string;

    target?: string;

    autocomplete?: string;

    novalidate?: boolean;

    style?: AlignmentStyle;

    margin?: boolean;

    maximized?: boolean;
}
