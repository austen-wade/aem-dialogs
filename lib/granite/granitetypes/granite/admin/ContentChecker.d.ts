export interface IAdminContentChecker {
    path?: string;
    urlPath?: string;
    allowed?: string[];
    exclusion?: string[];
    allowEmpty?: boolean;
    redirectWhenEmpty?: string;
}
