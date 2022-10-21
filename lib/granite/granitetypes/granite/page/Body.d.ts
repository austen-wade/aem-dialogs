import { ICommonAttributes } from "../CommonAttributes";
import { GraniteContainer, IGraniteContainer } from "../GraniteContainer";
import { IPage } from "../Page";
export interface IPageBody extends ICommonAttributes, IGraniteContainer {
}
export declare class Body extends GraniteContainer<IPage> {
    constructor(tag: string, options?: IPage);
}
