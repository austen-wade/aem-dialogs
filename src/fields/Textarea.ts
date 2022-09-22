import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface TextareaOptions extends FieldOptions {
    name: string,
    value?: string,
    emptyText?: string,
    disabled?: boolean,
    required?: boolean,
    autocomplete?: 'off' | 'on',
    autofocus?: boolean,
    maxlength?: number,
    cols?: number,
    rows?: number,
    resize?: 'none' | 'both' | 'horizontal' | 'vertical',
}
class Textarea extends AemNode {
    options: TextareaOptions = { name: "./textarea" };

    constructor(options: TextareaOptions) {
        super(options.name, ResourceType.TEXTAREA);
        for (const key in options) {
            this.addProp(key, options[key as keyof TextareaOptions]);
        }
    }
}
