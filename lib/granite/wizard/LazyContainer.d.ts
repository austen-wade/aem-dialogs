import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";
export interface IWizardLazyContainer extends ICommonAttributes, IRenderCondition {
    src?: string;
    margin?: boolean;
    maximized?: boolean;
}
export declare class LazyContainer extends GraniteContainer<IWizardLazyContainer> {
    constructor(tag: string, options?: IWizardLazyContainer);
}
