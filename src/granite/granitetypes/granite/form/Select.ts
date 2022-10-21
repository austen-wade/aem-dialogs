import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";
import { SelectVariant, StatusVariant } from "../LiteralTypes";
import { FormField, IFormField } from "./Field";
import { ResourceType } from "../../../../types";

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
