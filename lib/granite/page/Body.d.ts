import { ICommonAttributes } from "../CommonAttributes";
import { IGraniteContainer, GraniteContainer } from "../GraniteContainer";
import { IPage } from "../Page";
export interface IPageBody extends ICommonAttributes, IGraniteContainer {
}
export declare class Body extends GraniteContainer<IPage> {
    constructor(tag: string, options?: IPage);
}
