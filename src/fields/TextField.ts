import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { aembool, getName } from "../utils";
import { FieldOptions } from "./Field";

export interface TextFieldOptions extends FieldOptions {
  emptyText?: string;
  name: string;
  required?: boolean;
}

export class TextField extends AemNode {
  options: TextFieldOptions = { name: "text" };

  constructor(options: TextFieldOptions) {
    super(options.name, ResourceType.TEXTFIELD);
    for (const key in options) {
      this.addProp(key, options[key as keyof TextFieldOptions]);
    }
  }
}
