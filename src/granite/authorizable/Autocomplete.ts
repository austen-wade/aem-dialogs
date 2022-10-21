import { IFormField, FormField } from "../form";
import { ValueType, Selector, ServiceUserFilter, ImpersonableUserFilter } from "../LiteralTypes";

export interface IAuthorizableAutocomplete extends IFormField {
    name?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    validation?: string[];
    multiple?: boolean;
    forceSelection?: boolean;
    deleteHint?: boolean; // =true
    valueType?: ValueType;
    selector?: Selector;
    serviceUserFilter?: ServiceUserFilter;
    impersonableUserFilter?: ImpersonableUserFilter;
}

export class AuthorizableAutocomplete extends FormField<IAuthorizableAutocomplete> {
    constructor(tag: string, options?: IAuthorizableAutocomplete) {
        super(tag, options);
    }
}
