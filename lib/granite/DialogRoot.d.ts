import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";
export interface IDialogRoot extends IGraniteContainer {
    "jcr:title"?: string;
}
export declare class DialogRoot extends GraniteContainer<IDialogRoot> {
    constructor(options?: IDialogRoot);
}
