const resourceType = " /libs/granite/ui/components/coral/foundation/collection/actionlink";

export interface CollectionActionLink extends CommonAttributes, RenderCondition {
    target?: string;

    activeCount?: number; // < 0, ">0"

    activeSelectionCount?: string; // < 'none', 'single', 'multiple'

    activeCondition?: string;

    action?: string;

    command?: string;

    actionConfigName?: string;

    relScope?: string; // < 'none', 'item', 'collection'

    ignoreRel?: boolean;

    text?: string;

    text_commentI18n?: string;

    hideText?: boolean;

    icon?: string;

    href?: string;

    rel?: string;

    iconSize?: string; // < 'XS', 'S', 'M', 'L'

    trackingFeature?: string;

    trackingElement?: string;

    trackingWidgetName?: string;

    data?: GraniteNode | GraniteNode[];
}
