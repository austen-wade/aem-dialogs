import { formatWithOptions } from "util";
import { AemNode } from "../AemNode";
import { ResourceType } from "../types";
import { aembool, getName } from "../utils";

export interface CheckboxOptions {
  name: string;
  text?: string;
  fieldDescription?: string;
  required?: boolean;
  tooltipPosition?: "right" | "left" | "top" | "bottom";
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
