export interface IAdminContentChecker {
    path?: string;

    urlPath?: string;

    allowed?: string[];

    exclusion?: string[];

    allowEmpty?: boolean; // =true

    redirectWhenEmpty?: string;
}
