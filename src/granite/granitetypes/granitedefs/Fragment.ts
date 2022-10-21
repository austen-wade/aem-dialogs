import { GraniteNode } from "../../GraniteNode";

const resourceType = " /libs/granite/ui/components/coral/foundation/page/fragment";

export interface PageFragment {
    content: GraniteNode | GraniteNode[];
}
