import { ResourceType } from "../../../../types";
import { GraniteNode } from "../../../GraniteNode";
import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "../GraniteContainer";
import { IRenderCondition } from "../RenderCondition";

export interface IFormNestedCheckboxList extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    disconnected?: boolean;
}
export interface IFormNestedCheckboxListSublist {
    sublist?: GraniteNode | GraniteNode[];
}

export class NestedCheckboxList extends GraniteContainer<IFormNestedCheckboxList> {
    constructor(tag: string, options?: IFormNestedCheckboxList) {
        super(tag, options, ResourceType.FORM_NESTED_CHECKBOX_LIST);
    }
}

export class NestedCheckboxListSublist extends GraniteContainer<IFormNestedCheckboxListSublist> {
    constructor(tag: string, options?: IFormNestedCheckboxListSublist) {
        super(tag, options, ResourceType.FORM_NESTED_CHECKBOX_LIST);
    }
}
