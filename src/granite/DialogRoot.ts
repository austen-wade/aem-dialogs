import { Namespaces, ResourceType } from "../types";
import { GraniteContainer, IGraniteContainer } from "./GraniteContainer";

export interface IDialogRoot extends IGraniteContainer {
    "jcr:title"?: string;
}

export class DialogRoot extends GraniteContainer<IDialogRoot> {
    constructor(options?: IDialogRoot) {
        super("jcr:root", options, ResourceType.CQ_DIALOG);
        for (const ns of Object.keys(Namespaces)) {
            this.setProp(Namespaces[ns].field, Namespaces[ns].value);
        }
    }
}
