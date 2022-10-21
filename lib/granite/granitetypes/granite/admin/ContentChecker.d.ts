import { GraniteContainer } from "../GraniteContainer";
export interface IAdminContentChecker {
    path?: string;
    urlPath?: string;
    allowed?: string[];
    exclusion?: string[];
    allowEmpty?: boolean;
    redirectWhenEmpty?: string;
}
export declare class AdminContentChecker extends GraniteContainer<IAdminContentChecker> {
    constructor(tag: string, options?: IAdminContentChecker);
}
