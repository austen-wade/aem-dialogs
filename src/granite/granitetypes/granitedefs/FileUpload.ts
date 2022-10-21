import { FormField } from "./Field";

const resourceType = " /libs/granite/ui/components/coral/foundation/form/fileupload";
// :supertype?: /libs/granite/ui/components/coral/foundation/form/field
export interface FormFileUpload extends FormField {
    name?: string;

    emptyText?: string;

    disabled?: boolean;

    required?: boolean;

    async?: boolean;

    validation?: string[];

    multiple?: boolean;

    autoStart?: boolean;

    uploadUrl?: string;

    sizeLimit?: number;

    mimeTypes?: string[];

    text?: string;

    hideText?: boolean;

    icon?: string;

    iconSize?: string; // < 'XS', 'S', 'M', 'L'

    size?: string; // < 'M', 'L'

    variant?: string; // < 'primary', 'warning', 'quiet', 'minimal', 'actionBar'
}
