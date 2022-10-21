import { GraniteContainer } from "./GraniteContainer";
export interface IInclude {
    path?: string;
    resourceType?: string;
}
export declare class Include extends GraniteContainer<IInclude> {
    constructor(tag: string, options?: IInclude);
}
