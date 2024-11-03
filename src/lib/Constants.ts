import { Episode, Slug } from "./client";
import { Theme } from "./Types";

export const defaultTheme: Theme = "light" as const;
export const storageThemeKey = "Xemdi-movie-theme";
export const storageTimeKey = "Xemdi-movie-time";
export const imageCdn = "https://apii.online/storage/images";
export const webUrl = "https://Xemdi.app";
export const APP_DOMAIN_CDN_IMAGE = "https://img.ophim.live";
export const searchRegex = /[?&]keyword=([^&]+)/;
export enum ImageTypes {
    poster = "poster",
    thumb = "thumb",
}
export enum NavType {
    HomeNav,
    Nav,
}
export const menuList = [
    {
        name: "Bộ lọc",
        link: "/category",
        icon: "iconfont2 hl-icon-shaixuan w-100 text-center",
        type: NavType.Nav,
    },
    {
        type: NavType.HomeNav,
        name: "Phim lẻ",
        link: Slug.PhimLe,
        icon: "iconfont2 hl-icon-dianying gradient text-transparent",
    },
    {
        type: NavType.HomeNav,
        name: "Phim bộ",
        link: Slug.PhimBo,
        icon: "iconfont2 hl-icon-xingxing gradient text-transparent",
    },
    {
        type: NavType.HomeNav,
        name: "TV Seri",
        link: Slug.TvShows,
        icon: "iconfont2 hl-icon-dianshiju gradient text-transparent",
    },
    {
        type: NavType.HomeNav,
        name: "Hoạt hình",
        link: Slug.HoatHinh,
        icon: "iconfont2 hl-icon-dongman gradient text-transparent",
    },
    {
        type: NavType.Nav,
        name: "Tài khoản",
        link: "/user",
        icon: "iconfont2 hl-icon-tuijian w-100 text-center",
    }
]
export const defaultServerData: Episode = {
    server_name: "Loading...",
    server_data: [{
        name: "Loading...",
        slug: "",
        filename: "",
        link_embed: "",
        link_m3u8: "",
    }]
}