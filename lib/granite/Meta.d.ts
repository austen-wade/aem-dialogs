import { GraniteContainer } from "./GraniteContainer";
export interface IMeta {
    name?: string;
    content?: string;
}
export declare class Meta extends GraniteContainer<IMeta> {
    constructor(tag: string, options?: IMeta);
}
