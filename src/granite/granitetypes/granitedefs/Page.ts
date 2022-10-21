import { GraniteNode } from "../../GraniteNode";

export const resourceType = " /libs/granite/ui/components/coral/foundation/page";

export interface Page {
    consoleId?: string;

    "jcr:title"?: string;

    redirector?: GraniteNode | GraniteNode[];

    head?: GraniteNode | GraniteNode[];

    body?: GraniteNode | GraniteNode[];
}
