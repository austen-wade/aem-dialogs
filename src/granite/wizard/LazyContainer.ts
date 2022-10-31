import { ResourceType } from "../../types";
import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";

export interface IWizardLazyContainer extends ICommonAttributes, IRenderCondition {
    src?: string;
    margin?: boolean;
    maximized?: boolean;
}

export class LazyContainer extends GraniteContainer<IWizardLazyContainer> {
    constructor(tag: string, options?: IWizardLazyContainer) {
        super(tag, options, ResourceType.WIZARD_LAZY_CONTAINER);
    }
}
