import { GraniteContainer } from "../GraniteContainer";

export interface IPageFavIcon {
    href?: string; // ='/libs/granite/core/content/login/favicon.ico'
}

export class FavIcon extends GraniteContainer<IPageFavIcon> {
    constructor(tag: string, options?: IPageFavIcon) {
        super(tag, options);
    }
}
