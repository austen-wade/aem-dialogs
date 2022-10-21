import { ICommonAttributes } from "../CommonAttributes";
import { IRenderCondition } from "../RenderCondition";
import { TooltipPosition } from "../LiteralTypes";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/checkbox";
export interface IFormCheckbox extends ICommonAttributes, IRenderCondition {
    name?: string;
    deleteHint?: boolean;
    value?: string;
    uncheckedValue?: string;
    disabled?: boolean;
    required?: boolean;
    validation?: string[];
    checked?: boolean;
    ignoreData?: boolean;
    text?: string;
    autosubmit?: boolean;
    fieldDescription?: string;
    tooltipPosition?: TooltipPosition;
    renderReadOnly?: boolean;
    showEmptyInReadOnly?: boolean;
    wrapperClass?: string;
}
