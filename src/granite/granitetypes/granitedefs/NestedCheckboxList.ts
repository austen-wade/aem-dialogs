const resourceType = " /libs/granite/ui/components/coral/foundation/form/nestedcheckboxlist";

export interface FormNestedCheckboxList extends CommonAttributes, RenderCondition, GraniteContainer {
    disconnected?: boolean;
}
export interface FormNestedCheckboxListSublist {
    sublist?: GraniteNode | GraniteNode[];
}
