import { AemNode } from "./AemNode";
import {
  createCheckboxField,
  createTab,
  createTabsDialog,
  createTextField,
} from "./creates";
import { Checkbox } from "./fields/Checkbox";
import { generate } from "./generate";

const sharedSEOTab: AemNode = createTab(1, "SEO", [
  createTextField({ name: "seoText" }),
]);

const buttonDialog = createTabsDialog("Button", [
  createTab(0, "Properties", [
    createTextField({
      name: "buttonText",
      fieldLabel: "Button Text",
      fieldDescription: "This is the button",
      required: true,
      emptyText: "Enter button text here.",
    }),
    new Checkbox({
      name: "checkbox",
      text: "click this checkbox",
      required: false,
    }),
  ]),
  sharedSEOTab,
]);

const checkbox = new Checkbox({
  name: "checkbox",
  text: "click this checkbox",
  checked: false,
});

generate("./tests/checkbox-new", checkbox);

generate("./tests/button-new", buttonDialog);

const titleDialog = createTabsDialog("Title", [
  createTab(0, "Properties", [createTextField({ name: "titleText" })]),
  sharedSEOTab,
]);

generate("./tests/title-new", titleDialog);
