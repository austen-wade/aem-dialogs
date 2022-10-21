import { Resize } from "../LiteralTypes";
import { IFormField } from "./Field";

export const resourceType = "/libs/granite/ui/components/coral/foundation/form/textarea";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface IFormTextarea extends IFormField {
    name?: string;

    value?: string;

    emptyText?: string;

    disabled?: boolean;

    required?: boolean;

    autocomplete?: string; // ='off'

    autofocus?: boolean;

    validation?: string[];

    maxlength?: number;

    cols?: number;

    rows?: number; // =5

    resize: Resize;
}
