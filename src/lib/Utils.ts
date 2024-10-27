import { PassThrough } from "stream";
import { APP_DOMAIN_CDN_IMAGE, imageCdn, ImageTypes } from "./Constants";
export const isClient = typeof window !== "undefined"
export function minifyJavaScript(jsCode: string = ''): string {
    return jsCode
        .replace(/\s*\/\/.*$/gm, '') // Loại bỏ comment dòng
        .replace(/\s*\/\*[\s\S]*?\*\//g, '') // Loại bỏ comment block
        .replace(/\s+/g, ' ') // Thay thế nhiều khoảng trắng bằng một khoảng trắng
        .replace(/(\s*([{};:])\s*)/g, '$2') // Loại bỏ khoảng trắng quanh dấu ngoặc và dấu ;
        .trim(); // Loại bỏ khoảng trắng đầu và cuối
}
export function getStringFromPassThrough(passThroughStream: PassThrough): Promise<string> {
    return new Promise((resolve, reject) => {
        let data = '';
        passThroughStream?.on("data", (chunk) => {
            data += chunk?.toString(); // Chuyển chunk thành chuỗi và cộng dồn
        });
        passThroughStream.on('end', () => {
            resolve(data); // Trả về chuỗi sau khi stream hoàn thành
        });
        passThroughStream.on('error', (err) => {
            reject(err); // Nếu có lỗi, reject Promise
        });
    });
}
export function setCookie(name: string, value: string, days: number = 365) {
    if(isClient) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }   
}
export function getCookie(name: string): string {
    if(!isClient) return "" // if not client return empty string
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}
export const parseParams = (requestUrl: string) => {
    const params = new URL(requestUrl).searchParams
    const obj: Record<string, any> = {}
    for (const key of params.keys()) {
        if (params.getAll(key).length > 1) {
            if (params.get(key) !== 'undefined') {
                obj[key] = params.getAll(key)
            }
        } else {
            if (params.get(key) !== 'undefined') {
                obj[key] = params.get(key)
            }
            if (typeof params.get(key) === 'boolean') {
                obj[key] = params.get(key)
            }
            if (params.get(key) === 'false' || params.get(key) === 'true') {
                obj[key] = JSON.parse(params.get(key) as any)
            }
        }
    }
    return obj
}
export const repairUrl = (url: string) => {
    if (!url.includes('http')) {
        url = `http://${url}`
    }
    return url.replace(/\/\//g, '/')
            .replace('http:/', 'http://')
            .replace('https:/', 'https://')
}
export const class2Object = <T>(classConvert: T) => {
    const keys = Object.getOwnPropertyNames(
        Object.getPrototypeOf(classConvert)
    ) as Array<keyof T>
    const object = keys.reduce((classAsObj: Record<string, any>, key) => {
        classAsObj[key as string] = (classConvert[key] as any).bind(
            classConvert
        )
        return classAsObj
    }, {})
    return object as T
}
export const buildWebpImageUrl = (slug: string = '', type: ImageTypes = ImageTypes.thumb) => slug? [imageCdn,slug, slug+"-"+type].join('/')+'.jpg' : "images/img-bj.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const buildOriginImageUrl = (path: string = '', type: ImageTypes = ImageTypes.thumb) => {
    const isInclude = path.includes('uploads/movies')
    const tempUrl = isInclude ? [APP_DOMAIN_CDN_IMAGE, path].join('/') : [APP_DOMAIN_CDN_IMAGE, 'uploads/movies', path].join('/')
    const urlSplit = [...tempUrl.split('/')]
    urlSplit[urlSplit.length - 1] = encodeURIComponent(urlSplit[urlSplit.length - 1]!)
    const nameSet = new Set(urlSplit)
    return repairUrl(Array.from(nameSet).join('/'))
}
export const scrollToTop = () => {
    if (!isClient) return
    const scrollStep = -window.scrollY / (500 / 25),
        scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep)
            } else clearInterval(scrollInterval)
        }, 15)
}