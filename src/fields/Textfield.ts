import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { aembool, getName } from "../utils";

export interface TextfieldOptions {
    fieldLabel?: string,
    fieldDescription?: string,
    emptyText?: string,
    name: string,
    required?: boolean
}

export class Textfield extends AemNode {
    options: TextfieldOptions = { name: "./text" };

    constructor(theOptions: TextfieldOptions) {
        super(theOptions.name, {}, ResourceType.TEXTFIELD);
        this.setAttribute('name', getName(theOptions.name));

        if (theOptions.fieldLabel) {
            this.setAttribute('fieldLabel', theOptions.fieldLabel);
        }
        if (theOptions.fieldDescription) {
            this.setAttribute('fieldDescription', theOptions.fieldDescription);
        }
        if (theOptions.required) {
            this.setAttribute('required', aembool(theOptions.required));
        }
    }
}
