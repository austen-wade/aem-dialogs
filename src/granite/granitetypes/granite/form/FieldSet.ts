import { CommonAttributes } from "../CommonAttributes";
import { GraniteContainer } from "../GraniteContainer";
import { RenderCondition } from "../RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/form/fieldset";

export interface FormFieldSet extends CommonAttributes, RenderCondition, GraniteContainer {
    "jcr:title"?: string;
}
