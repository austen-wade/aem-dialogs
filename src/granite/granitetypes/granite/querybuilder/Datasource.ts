import { ResourceType } from "../../../../types";
import { GraniteContainer } from "../GraniteContainer";

export interface IQueryBuilderDatasource {
    itemResourceType: string;
    offset?: number; // ='0'
    limit?: number; // ='20'
}

export class Datasource extends GraniteContainer<IQueryBuilderDatasource> {
    constructor(tag: string, options?: IQueryBuilderDatasource) {
        super(tag, options, ResourceType.DATASOURCE);
    }
}
