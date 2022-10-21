import { ResourceType } from "../../types";
import { ICommonAttributes } from "../CommonAttributes";
import { TooltipPosition } from "../LiteralTypes";
import { IRenderCondition } from "../RenderCondition";
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
