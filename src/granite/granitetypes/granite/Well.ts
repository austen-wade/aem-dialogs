import { ICommonAttributes } from "./CommonAttributes";
import { IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";

export interface IWell extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    margin?: boolean;
}
