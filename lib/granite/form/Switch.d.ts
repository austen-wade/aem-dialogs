import { IFormField, FormField } from "./Field";
export interface IFormSwitch extends IFormField {
    name?: string;
    deleteHint?: boolean;
    value?: string;
    uncheckedValue?: string;
    disabled?: boolean;
    required?: boolean;
    validation?: string[];
    checked?: boolean;
    ignoreData?: boolean;
    wrapperClass?: string;
}
export declare class Switch extends FormField<IFormSwitch> {
    constructor(tag: string, options?: IFormSwitch);
}
