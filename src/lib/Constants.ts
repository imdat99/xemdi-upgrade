import { Episode } from "./client";
import { Theme } from "./Types";

export const defaultTheme: Theme = "light" as const;
export const storageThemeKey = "Xemdi-movie-theme";
export const storageTimeKey = "Xemdi-movie-time";
export const imageCdn = "https://apii.online/storage/images";
export const APP_DOMAIN_CDN_IMAGE = "https://img.ophim.live";
export const searchRegex = /[?&]keyword=([^&]+)/;
export enum ImageTypes {
    poster = "poster",
    thumb = "thumb",
}
export const menuList = [
    {
        name: "Phim Rạp",
        link: "/index.php/vod/type/id/1.html",
        icon: "iconfont2 hl-icon-dianying gradient text-transparent",
    },
    {
        name: "Phim bộ",
        link: "/index.php/vod/type/id/3.html",
        icon: "iconfont2 hl-icon-xingxing gradient text-transparent",
    },
    {
        name: "TV Seri",
        link: "/index.php/vod/type/id/2.html",
        icon: "iconfont2 hl-icon-dianshiju gradient text-transparent",
    },
    {
        name: "Hoạt hình",
        link: "/index.php/vod/type/id/4.html",
        icon: "iconfont2 hl-icon-dongman gradient text-transparent",
    },
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