import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/hyperlink";

export interface Hyperlink extends CommonAttributes, RenderCondition {
    href?: string;

    href_i18n?: string;

    rel?: string;

    target?: string;

    text?: string;

    text_commentI18n?: string;

    hideText?: boolean;

    "x-cq-linkchecker"?: string; // < 'skip', 'valid'

    icon?: string;

    iconSize?: string; // < 'XS', 'S', 'M', 'L'
}
