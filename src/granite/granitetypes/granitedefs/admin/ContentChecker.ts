export const resourceType = " /libs/granite/ui/components/coral/foundation/admin/contentchecker";
export interface AdminContentChecker {
    path?: string;

    urlPath?: string;

    allowed?: string[];

    exclusion?: string[];

    allowEmpty?: boolean; // =true

    redirectWhenEmpty?: string;
}
