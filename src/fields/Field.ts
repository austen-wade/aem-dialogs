import { AemNode } from "../AemNode";

export interface FieldOptions {
    fieldLabel?: string,
    fieldDescription?: string,
    renderHidden?: boolean,
    wrapperClass?: string,
    tooltipPosition?: 'left' | 'top' | 'bottom',
    "granite:class"?: string,
}
