import { ICommonAttributes } from "../CommonAttributes";
import { IRenderCondition } from "../RenderCondition";

export interface IWizardLazyContainer extends ICommonAttributes, IRenderCondition {
    src?: string;

    margin?: boolean;

    maximized?: boolean;
}
