import { ResourceType } from "../../../../types";
import { GraniteContainer } from "../GraniteContainer";

export interface IAuthorizableSelectDatasource {
    query?: string;
}

export class AuthorizableSelectDatasource extends GraniteContainer<IAuthorizableSelectDatasource> {
    constructor(tag: string, options?: IAuthorizableSelectDatasource) {
        super(tag, options, ResourceType.AUTHORIZABLE_SELECT_DATASOURCE);
    }
}
