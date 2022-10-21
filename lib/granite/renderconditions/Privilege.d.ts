import { GraniteContainer } from "../GraniteContainer";
export interface IRenderConditionsPrivilege {
    path?: string;
    privileges?: string[];
}
export declare class Privilege extends GraniteContainer<IRenderConditionsPrivilege> {
    constructor(tag: string, options?: IRenderConditionsPrivilege);
}
