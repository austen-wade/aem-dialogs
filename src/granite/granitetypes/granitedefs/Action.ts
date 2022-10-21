import { GraniteNode } from "../../GraniteNode";
import { CommonAttributes } from "../granite/CommonAttributes";
import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/collection/action";

export interface CollectionAction extends CommonAttributes, RenderCondition {
    target?: string;

    activeCount?: number; // < 0, ">0"

    activeSelectionCount?: string; // < 'none', 'single', 'multiple'

    activeCondition?: string;

    action?: string;

    command?: string;

    actionConfigName?: string;

    relScope?: string; // < 'none', 'item', 'collection'

    ignoreRel?: boolean;

    disabled?: boolean;

    text?: string;

    text_commentI18n?: string;

    hideText?: boolean;

    icon?: string;

    iconSize?: string; // < 'XS', 'S', 'M', 'L'

    size?: string; // < 'M', 'L'

    block?: boolean;

    variant?: string; // < 'primary', 'warning', 'quiet', 'minimal', 'actionBar'

    trackingFeature?: string;

    trackingElement?: string;

    trackingWidgetName?: string;

    data?: GraniteNode | GraniteNode[];
}
