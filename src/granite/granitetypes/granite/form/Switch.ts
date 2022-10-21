import { ResourceType } from "../../../../types";
import { FormField, IFormField } from "./Field";

export interface IFormSwitch extends IFormField {
    name?: string;
    deleteHint?: boolean; // =true
    value?: string; // ='true'
    uncheckedValue?: string; // ='false'
    disabled?: boolean;
    required?: boolean;
    validation?: string[];
    checked?: boolean;
    ignoreData?: boolean;
    wrapperClass?: string;
}

export class Switch extends FormField<IFormSwitch> {
    constructor(tag: string, options?: IFormSwitch) {
        super(tag, options, ResourceType.SWITCH);
    }
}
