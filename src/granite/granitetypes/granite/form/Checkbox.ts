import { ICommonAttributes } from "../CommonAttributes";
import { IRenderCondition } from "../RenderCondition";
import { TooltipPosition } from "../LiteralTypes";
import { ResourceType } from "../../../../types";
import { FormField } from "./Field";

export interface IFormCheckbox extends ICommonAttributes, IRenderCondition {
    name?: string;
    deleteHint?: boolean; // =true
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

export class Checkbox extends FormField<IFormCheckbox> {
    constructor(tag: string, options?: IFormCheckbox) {
        super(tag, options, ResourceType.CHECKBOX);
    }
}
