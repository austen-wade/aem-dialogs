// NEEDS REAL VALUES
export enum ResourceType {
    DIALOG = "cq/dialog",
    TEXTFIELD = "granite/field/textfield",
    CONTAINER = "granite/container",
    FIXED_COLUMNS = "granite/fixed_columns",
    TABS = "granite/tabs",
    CHECKBOX = "granite/field/checkbox",
}

export type Attributes = Record<string, string>;