import { GraniteContainer } from "../GraniteContainer";
export interface IQueryBuilderDatasource {
    itemResourceType: string;
    offset?: number;
    limit?: number;
}
export declare class Datasource extends GraniteContainer<IQueryBuilderDatasource> {
    constructor(tag: string, options?: IQueryBuilderDatasource);
}
