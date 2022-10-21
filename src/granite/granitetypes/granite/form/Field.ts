import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer } from "../GraniteContainer";
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

export class FormField<T> extends GraniteContainer<T> {
    constructor(tag: string, options?: T, resourceType?: string) {
        super(tag, options, resourceType);
    }
}
