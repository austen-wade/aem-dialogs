import { CommonAttributes } from "../CommonAttributes";
import { GraniteContainer } from "../GraniteContainer";
import { RenderCondition } from "../RenderCondition";
import { AlignmentStyle } from "../LiteralTypes";

export const resourceType = " /libs/granite/ui/components/coral/foundation/authorizable/preferencesform";

export interface AuthorizablePreferencesForm extends CommonAttributes, RenderCondition, GraniteContainer {
    enctype?: string;

    target?: string;

    autocomplete?: string;

    novalidate?: boolean;

    style?: AlignmentStyle;

    margin?: boolean;

    maximized?: boolean;
}
