// NEEDS REAL VALUES
export enum ResourceType {
  DIALOG = "cq/gui/components/authoring/dialog",
  TEXTFIELD = "granite/ui/components/coral/foundation/form/textfield",
  CONTAINER = "granite/ui/components/coral/foundation/container",
  FIXED_COLUMNS = "granite/ui/components/coral/foundation/fixedcolumns",
  TABS = "granite/ui/components/coral/foundation/tabs",
  CHECKBOX = "granite/ui/components/coral/foundation/form/checkbox",
  PATH_FIELD = "granite/ui/components/coral/foundation/form/pathfield",
  DATE_PICKER = "granite/ui/components/coral/foundation/form/datepicker",
  FILE_UPLOAD = "cq/gui/components/authoring/dialog/fileupload",
  NUMBER_FIELD = "granite/ui/components/coral/foundation/form/numberfield",
  PATH_BROWSER = "granite/ui/components/coral/foundation/form/pathbrowser",
  TEXTAREA = "granite/ui/components/coral/foundation/form/textarea",
  SELECT = "granite/ui/components/coral/foundation/form/select",
}

export type Prop = {
  field: string;
  value: any;
};

export type Attributes = Record<string, string>;
