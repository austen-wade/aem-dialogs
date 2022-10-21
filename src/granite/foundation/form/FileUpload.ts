import { GraniteIcon, IconSize } from "../../../icons";
import { ResourceType } from "../../../types";
import { ButtonSize, ButtonVariant } from "../../granitetypes/granite";
import { FieldOptions, Field } from "./Field";

export interface FileUploadOptions extends FieldOptions {
    emptyText?: string;
    disabled?: boolean;
    required?: boolean;
    async?: boolean;
    multiple?: boolean;
    sizeLimit?: number;
    mimeTypes?: string;
    text?: string;
    hideText?: boolean;
    icon?: GraniteIcon;
    iconSize?: IconSize;
    size?: ButtonSize;
    variant?: ButtonVariant;
    allowUpload?: boolean;
    fileNameParameter?: string;
    fileReferenceParameter?: string;
    title?: string;
    uploadUrl?: string;
    useHTML5?: boolean;
    autoStart?: boolean;
    class?: string;
}
export class FileUpload extends Field {
    options: FileUploadOptions = {};

    constructor(tag = "fileupload", options?: FileUploadOptions) {
        super(tag, ResourceType.FILE_UPLOAD);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.setProp(key, options[key as keyof FileUploadOptions]);
        }
    }
}
