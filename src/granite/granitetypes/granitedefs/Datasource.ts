import { group } from "console";

export const resourceType = " /libs/granite/ui/components/coral/foundation/querybuilder/datasource";
// ?:datasource:
export interface QueryBuilderDatasource {
    itemResourceType: string;

    offset?: number; // ='0'

    limit?: number; // ='20'
}
