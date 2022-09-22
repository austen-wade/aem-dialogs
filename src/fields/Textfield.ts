import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { aembool, getName } from "../utils";

export interface TextfieldOptions {
  fieldLabel?: string;
  fieldDescription?: string;
  emptyText?: string;
  name: string;
  required?: boolean;
}

export class Textfield extends AemNode {
  options: TextfieldOptions = { name: "./text" };

  constructor(options: TextfieldOptions) {
    super(options.name, ResourceType.TEXTFIELD);
    for (const key in options) {
      this.addProp(key, options[key as keyof TextfieldOptions]);
    }
  }
}
