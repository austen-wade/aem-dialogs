export const resourceType = "/libs/granite/ui/components/coral/foundation/querybuilder/datasource";
// ?:datasource:
export interface IQueryBuilderDatasource {
    itemResourceType: string;

    offset?: number; // ='0'

    limit?: number; // ='20'
}
