import { IconSize } from "../../icons";
import { FileUploadSize, FileUploadVariant } from "../LiteralTypes";
import { IFormField, FormField } from "./Field";
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
export declare class FileUpload extends FormField<IFormFileUpload> {
    constructor(tag: string, options?: IFormFileUpload);
}
