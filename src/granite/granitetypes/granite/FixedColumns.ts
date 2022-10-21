import { ResourceType } from "../../../types";
import { ICommonAttributes } from "./CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
import { IRenderCondition } from "./RenderCondition";

export interface IFixedColumns extends ICommonAttributes, IRenderCondition, IGraniteContainer {
    margin?: boolean;
    maximized?: boolean;
}

export class FixedColumns extends GraniteContainer<IFixedColumns> {
    constructor(tag = "columns", options?: IFixedColumns) {
        super(tag, options, ResourceType.FIXED_COLUMNS);
    }
}
