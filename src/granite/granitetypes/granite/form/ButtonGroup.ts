import { IconSize } from "../../../../icons";
import { ResourceType } from "../../../../types";
import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "../GraniteContainer";
import { FormField, IFormField } from "./Field";

type SelectionModes = "none" | "single" | "multiple";
export interface IFormButtonGroup extends IFormField, IGraniteContainer {
    name?: string;
    selectionMode: SelectionModes; // = 'none'
    deleteHint?: boolean; // = true
    required?: boolean;
    validation?: string[];
    ignoreData?: boolean;
}
export interface IFormButtonGroupItem extends ICommonAttributes {
    value?: string;
    disabled?: boolean;
    checked?: boolean;
    text?: string;
    hideText?: boolean;
    icon?: string;
    iconSize?: IconSize;
}

export class ButtonGroup extends FormField<IFormButtonGroup> {
    constructor(tag: string, options?: IFormButtonGroup) {
        super(tag, options, ResourceType.BUTTON_GROUP);
    }
}

export class ButtonGroupItem extends GraniteContainer<IFormButtonGroupItem> {
    constructor(tag: string, options?: IFormButtonGroupItem) {
        super(tag, options);
    }
}
