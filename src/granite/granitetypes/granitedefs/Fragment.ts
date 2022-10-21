import { GraniteNode } from "../../GraniteNode";

export const resourceType = " /libs/granite/ui/components/coral/foundation/page/fragment";

export interface PageFragment {
    content: GraniteNode | GraniteNode[];
}
