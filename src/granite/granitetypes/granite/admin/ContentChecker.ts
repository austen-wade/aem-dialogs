import { ResourceType } from "../../../../types";
import { GraniteContainer } from "../GraniteContainer";

export interface IAdminContentChecker {
    path?: string;
    urlPath?: string;
    allowed?: string[];
    exclusion?: string[];
    allowEmpty?: boolean; // =true
    redirectWhenEmpty?: string;
}

export class AdminContentChecker extends GraniteContainer<IAdminContentChecker> {
    constructor(tag: string, options?: IAdminContentChecker) {
        super(tag, options, ResourceType.ADMIN_CONTENT_CHECKER);
    }
}
