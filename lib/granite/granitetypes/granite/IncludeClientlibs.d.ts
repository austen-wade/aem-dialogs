import { IRenderCondition } from "./RenderCondition";
export interface IIncludeClientlibs extends IRenderCondition {
    categories?: string[];
    js?: string[];
    css?: string[];
}
