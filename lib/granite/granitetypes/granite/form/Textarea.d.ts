import { Resize } from "../LiteralTypes";
import { IFormField } from "./Field";
export declare const resourceType = "/libs/granite/ui/components/coral/foundation/form/textarea";
export interface IFormTextarea extends IFormField {
    name?: string;
    value?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string;
    autofocus?: boolean;
    validation?: string[];
    maxlength?: number;
    cols?: number;
    rows?: number;
    resize: Resize;
}
