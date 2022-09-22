import { AemNode } from "../AemNode";
import { ButtonSize, ButtonVariants, GraniteIcon, IconSize } from "../icons";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface FileUploadOptions extends FieldOptions {
    name: string;
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
export class FileUpload extends AemNode {
    options: FileUploadOptions = {
        name: "date",
    };

    constructor(options: FileUploadOptions) {
        super(options.name, ResourceType.FILE_UPLOAD);
        for (const key in options) {
            this.addProp(key, options[key as keyof FileUploadOptions]);
        }
    }
}
