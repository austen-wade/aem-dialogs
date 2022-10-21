import { IFormField } from "./Field";

export interface IFormColorField extends IFormField {
    name?: string;

    value?: string;

    emptyText?: string;

    disabled?: boolean;

    required?: boolean;

    variant?: string; // ='default'

    autogenerateColors?: string; // ='off'

    showSwatches?: boolean;

    showProperties?: boolean;

    showDefaultColors?: boolean;

    validation?: string[];
}
export interface IFormColorFieldItem {
    value?: string;
}
