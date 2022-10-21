import { RenderCondition } from "./RenderCondition";

export const resourceType = " /libs/granite/ui/components/coral/foundation/includeclientlibs";
export interface IncludeClientlibs extends RenderCondition {
    categories?: string[];
    js?: string[];
    css?: string[];
}
