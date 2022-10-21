import { IFormField } from "../form";
import { FormField } from "../form/Field";
import { ImpersonableUserFilter, Selector, ServiceUserFilter, ValueType } from "../LiteralTypes";
export interface IAuthorizableAutocomplete extends IFormField {
    name?: string;
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    validation?: string[];
    multiple?: boolean;
    forceSelection?: boolean;
    deleteHint?: boolean;
    valueType?: ValueType;
    selector?: Selector;
    serviceUserFilter?: ServiceUserFilter;
    impersonableUserFilter?: ImpersonableUserFilter;
}
export declare class AuthorizableAutocomplete extends FormField<IAuthorizableAutocomplete> {
    constructor(tag: string, options?: IAuthorizableAutocomplete);
}
