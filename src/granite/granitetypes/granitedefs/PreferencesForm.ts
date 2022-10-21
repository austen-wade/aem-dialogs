import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/authorizable/preferencesform";

export interface AuthorizablePreferencesForm extends CommonAttributes, RenderCondition, GraniteContainer {
    enctype?: string;

    target?: string;

    autocomplete?: string;

    novalidate?: boolean;

    style?: string; // < 'vertical', 'aligned'

    margin?: boolean;

    maximized?: boolean;
}
