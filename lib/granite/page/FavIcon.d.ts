import { GraniteContainer } from "../GraniteContainer";
export interface IPageFavIcon {
    href?: string;
}
export declare class FavIcon extends GraniteContainer<IPageFavIcon> {
    constructor(tag: string, options?: IPageFavIcon);
}
