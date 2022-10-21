import { FormField } from "./Field";

const resourceType = " /libs/granite/ui/components/coral/foundation/authorizable/autocomplete";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface AuthorizableAutocomplete extends FormField {
    name?: string;

    emptyText?: string;

    disabled?: boolean;

    required?: boolean;

    validation?: string[];

    multiple?: boolean;

    forceSelection?: boolean;

    deleteHint?: boolean; // =true

    valueType?: string; // < 'id', 'path', 'principalname'

    selector?: string; // < 'all', 'user', 'group'

    serviceUserFilter?: string; // < 'off', 'includeonly', 'exclude'

    impersonableUserFilter?: string; // < 'off', 'includeonly', 'exclude'
}
