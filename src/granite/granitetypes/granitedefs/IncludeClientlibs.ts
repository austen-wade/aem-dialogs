import { RenderCondition } from "../granite/RenderCondition";

const resourceType = " /libs/granite/ui/components/coral/foundation/includeclientlibs";
export interface IncludeClientlibs extends RenderCondition {
    categories?: string[];
    js?: string[];
    css?: string[];
}
