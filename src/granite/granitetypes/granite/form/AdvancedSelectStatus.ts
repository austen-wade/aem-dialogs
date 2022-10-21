import { ResourceType } from "../../../../types";
import { ICommonAttributes } from "../CommonAttributes";
import { FormField } from "./Field";

export type IFormAdvancedSelectStatus = ICommonAttributes;

export class AdvancedSelectStatus extends FormField<IFormAdvancedSelectStatus> {
    constructor(tag: string, options?: IFormAdvancedSelectStatus) {
        super(tag, options, ResourceType.ADVANCED_SELECT_STATUS);
    }
}
