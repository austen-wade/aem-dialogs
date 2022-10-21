import { IconSize } from "../../../../icons";
import { ResourceType } from "../../../../types";
import { FileUploadSize, FileUploadVariant } from "../LiteralTypes";
import { FormField, IFormField } from "./Field";

export interface IFormFileUpload extends IFormField {
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
    iconSize?: IconSize;
    size?: FileUploadSize;
    variant?: FileUploadVariant;
}

export class FileUpload extends FormField<IFormFileUpload> {
    constructor(tag: string, options?: IFormFileUpload) {
        super(tag, options, ResourceType.FILE_UPLOAD);
    }
}
