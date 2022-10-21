import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";
export interface IFixedColumns extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    margin?: boolean;
    maximized?: boolean;
}
