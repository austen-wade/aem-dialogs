import { ResourceType } from "../../types";
import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "../GraniteContainer";
import { SelectVariant, StatusVariant } from "../LiteralTypes";
import { IRenderCondition } from "../RenderCondition";
import { IFormField, FormField } from "./Field";

export interface IFormSelect extends IFormField, IGraniteContainer {
    name?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    validation?: string[];
    multiple?: boolean;
    translateOptions?: boolean; // =true
    ordered?: boolean; // =false
    emptyOption?: boolean; // =false
    variant?: SelectVariant;
    deleteHint?: boolean; // =true
    forceIgnoreFreshness?: boolean;
}

export interface IFormSelectItem extends ICommonAttributes, IRenderCondition {
    value: string;
    disabled?: boolean;
    selected?: boolean;
    text?: string;
    icon?: string;
    statusIcon?: string;
    statusText?: string;
    statusVariant?: StatusVariant;
}

export class Select extends FormField<IFormSelect> {
    constructor(tag: string, options?: IFormSelect) {
        super(tag, options, ResourceType.SELECT);
    }
}

export class SelectItem extends GraniteContainer<IFormSelectItem> {
    constructor(tag: string, options: IFormSelectItem) {
        super(tag, options);
    }
}
