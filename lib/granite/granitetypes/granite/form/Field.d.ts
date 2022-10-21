import { ICommonAttributes } from "../CommonAttributes";
import { TooltipPosition } from "../LiteralTypes";
import { IRenderCondition } from "../RenderCondition";
export interface IFormField extends ICommonAttributes, IRenderCondition {
    fieldLabel?: string;
    fieldLabel_commentI18n?: string;
    fieldDescription?: string;
    renderReadOnly?: boolean;
    showEmptyInReadOnly?: boolean;
    renderHidden?: boolean;
    wrapperClass?: string;
    tooltipPosition?: TooltipPosition;
}
