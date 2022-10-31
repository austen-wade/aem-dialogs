import { GraniteContainer } from "../GraniteContainer";
export interface IAuthorizableSelectDatasource {
    query?: string;
}
export declare class AuthorizableSelectDatasource extends GraniteContainer<IAuthorizableSelectDatasource> {
    constructor(tag: string, options?: IAuthorizableSelectDatasource);
}
