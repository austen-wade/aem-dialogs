import { AemNode } from "../AemNode";
import { ButtonSize, ButtonVariants, GraniteIcon, IconSize } from "../icons";
import { FieldOptions } from "./Field";
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
    variant?: ButtonVariants;
    allowUpload?: boolean;
    fileNameParameter?: string;
    fileReferenceParameter?: string;
    title?: string;
    uploadUrl?: string;
    useHTML5?: boolean;
    autoStart?: boolean;
    class?: string;
}
export declare class FileUpload extends AemNode {
    options: FileUploadOptions;
    constructor(tag?: string, options?: FileUploadOptions);
}
