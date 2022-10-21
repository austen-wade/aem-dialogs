import { CommonAttributes } from "../granite/CommonAttributes";
import { GraniteContainer } from "../granite/GraniteContainer";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/form/fieldset";

export interface FormFieldSet extends CommonAttributes, RenderCondition, GraniteContainer {
    "jcr:title"?: string;
}
