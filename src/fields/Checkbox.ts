import { AemNode } from "../AemNode";
import { FieldOptions } from "./Field";

export interface CheckboxOptions extends FieldOptions {
  name: string;
  text?: string;
  required?: boolean;
  checked?: boolean;
  value?: string;
  uncheckedValue?: string;
}

export class Checkbox extends AemNode {
  constructor(
    options?: CheckboxOptions,
    tag = "checkbox",
    resourceType = "granite/field/checkbox"
  ) {
    super(tag, resourceType);
    for (const key in options) {
      this.addProp(key, options[key as keyof CheckboxOptions]);
    }
  }
}
