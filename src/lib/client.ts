import { class2Object } from './Utils'

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export interface Category {
    id: string
    name: string
    slug: string
}

export interface Country {
    id: string
    name: string
    slug: string
}

export interface Episode {
    server_name: string
    server_data: {
        name: string
        slug: string
        filename: string
        link_embed: string
        link_m3u8: string
    }[]
}
export interface SeoSchema {
    '@context': string
    '@type': string
    name: string
    dateModified: string
    dateCreated: string
    url: string
    datePublished: string
    image: string
    director: string
}
export interface SeoOnPage {
    og_type: string
    /**
     * only for movie detail
     */
    seoSchema?: SeoSchema
    titleHead: string
    descriptionHead: string
    og_image: string[]
    updated_time: number
    og_url: string
}
export interface BreadCrumb {
    name: string
    slug: string
    isCurrent: boolean
    position: number
}
export interface MovieItem {
    modified: {
        time: string
    }
    _id: string
    name: string
    slug: string
    origin_name: string
    type: string
    thumb_url: string
    sub_docquyen: boolean
    time: string
    episode_current: string
    quality: string
    lang: string
    year: number
    category: Category[]
    country: Country[]
    chieurap: boolean
    poster_url: string
    score: number
}
/*
Categories:::List ResponseBody
*/
export interface CategoriesListResponse {
    status: string
    message: string
    data: {
        items: Category[]
    }
}
/*
Categories:::Movies ResponseBody
*/
export interface CategoriesMoviesResponseBody {
    status: string
    message: string
    data: {
        seoOnPage: SeoOnPage
        breadCrumb: BreadCrumb[]
        titlePage: string
        items: {
            modified: {
                time: string
            }
            _id: string
            name: string
            slug: string
            origin_name: string
            type: string
            thumb_url: string
            poster_url: string
            sub_docquyen: boolean
            chieurap: boolean
            time: string
            episode_current: string
            quality: string
            lang: string
            year: number
            category: Category[]
            country: Country[]
        }[]
        params: {
            type_slug: string
            slug: string
            filterCategory: string[]
            filterCountry: string[]
            filterYear: string
            filterType: string
            sortField: string
            sortType: string
            pagination: {
                totalItems: number
                totalItemsPerPage: number
                currentPage: number
                pageRanges: number
            }
        }
        type_list: string
        APP_DOMAIN_FRONTEND: string
        APP_DOMAIN_CDN_IMAGE: string
    }
}
/*
Countries:::List ResponseBody
*/
export interface CountriesListResponseBody {
    status: string
    message: string
    data: {
        items: {
            _id: string
            name: string
            slug: string
        }[]
    }
}
/*
Countries:::Movies ResponseBody
*/
export interface CountriesMoviesResponseBody {
    status: string
    message: string
    data: {
        seoOnPage: SeoOnPage
        breadCrumb: BreadCrumb[]
        titlePage: string
        items: MovieItem[]
        params: {
            type_slug: string
            slug: string
            filterCategory: string[]
            filterCountry: string[]
            filterYear: string
            filterType: string
            sortField: string
            sortType: string
            pagination: {
                totalItems: number
                totalItemsPerPage: number
                currentPage: number
                pageRanges: number
            }
        }
        type_list: string
        APP_DOMAIN_FRONTEND: string
        APP_DOMAIN_CDN_IMAGE: string
    }
}
/*
Home:::Get ResponseBody
*/
export interface HomeGetResponseBody {
    status: string
    message: string
    data: {
        seoOnPage: SeoOnPage
        items: MovieItem[]
        params: {
            type_slug: string
            filterCategory: any[]
            filterCountry: any[]
            filterYear: string
            sortField: string
            pagination: {
                totalItems: number
                totalItemsPerPage: number
                currentPage: number
                pageRanges: number
            }
            itemsUpdateInDay: number
        }
        type_list: string
        APP_DOMAIN_FRONTEND: string
        APP_DOMAIN_CDN_IMAGE: string
    }
}
/*
List:::HoatHinh ResponseBody
*/
export interface ListMoviesResponse {
    status: string
    message: string
    data: {
        seoOnPage: SeoOnPage
        breadCrumb: BreadCrumb[]
        titlePage: string
        items: MovieItem[]
        params: {
            type_slug: string
            filterCategory: string[]
            filterCountry: string[]
            filterYear: string
            filterType: string
            sortField: string
            sortType: string
            pagination: {
                totalItems: number
                totalItemsPerPage: number
                currentPage: number
                pageRanges: number
            }
        }
        type_list: string
        APP_DOMAIN_FRONTEND: string
        APP_DOMAIN_CDN_IMAGE: string
    }
}
/*
List:::MoiCapNhat ResponseBody
*/
export interface ListMoiCapNhatResponseBody {
    status: boolean
    items: {
        modified: {
            time: string
        }
        _id: string
        name: string
        slug: string
        origin_name: string
        thumb_url: string
        poster_url: string
        year: number
    }[]
    pathImage: string
    pagination: {
        totalItems: number
        totalItemsPerPage: number
        currentPage: number
        totalPages: number
    }
}
/*
Movies:::GetBySlug ResponseBody
*/
export interface MovieDetailResponse {
    status: boolean
    msg: string
    movie: {
        created: {
            time: string
        }
        modified: {
            time: string
        }
        _id: string
        name: string
        origin_name: string
        content: string
        type: string
        status: string
        thumb_url: string
        poster_url: string
        is_copyright: boolean
        sub_docquyen: boolean
        chieurap: boolean
        trailer_url: string
        time: string
        episode_current: string
        episode_total: string
        quality: string
        lang: string
        notify: string
        showtimes: string
        slug: string
        year: number
        view: number
        actor: string[]
        director: string[]
        category: Category[]
        country: Country[]
    }
    episodes: Episode[]
}
/*
Movies:::Slug ResponseBody
*/
export interface MovieDetail {
    created: {
        time: string
    }
    modified: {
        time: string
    }
    _id: string
    name: string
    origin_name: string
    content: string
    type: string
    status: string
    thumb_url: string
    poster_url: string
    is_copyright: boolean
    sub_docquyen: boolean
    chieurap: boolean
    trailer_url: string
    time: string
    episode_current: string
    episode_total: string
    quality: string
    lang: string
    notify: string
    showtimes: string
    slug: string
    year: number
    view: number
    actor: string[]
    director: string[]
    category: Category[]
    country: Country[]
    episodes: Episode[]
}
export interface MoviesSlugResponseBody {
    status: string
    message: string
    data: {
        seoOnPage: SeoOnPage
        breadCrumb: BreadCrumb[]
        params: {
            slug: string
        }
        item: MovieDetail
    }
}
/*
Search:::Keyword ResponseBody
*/
export interface SearchKeywordResponseBody {
    status: string
    message: string
    data: {
        seoOnPage: SeoOnPage
        breadCrumb: BreadCrumb[]
        titlePage: string
        items: MovieItem[]
        params: {
            type_slug: string
            keyword: string
            filterCategory: string[]
            filterCountry: string[]
            filterYear: string
            filterType: string
            sortField: string
            sortType: string
            pagination: {
                totalItems: number
                totalItemsPerPage: number
                currentPage: number
                pageRanges: number
            }
        }
        type_list: string
        APP_DOMAIN_FRONTEND: string
        APP_DOMAIN_CDN_IMAGE: string
    }
}

export class Client {
    private http: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>
    }
    private baseUrl: string
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
        undefined

    constructor(
        baseUrl?: string,
        http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>
        }
    ) {
        const window = <any>(typeof global === 'undefined'
            ? {
                  fetch: (url: RequestInfo, init?: RequestInit) =>
                      import('isomorphic-fetch').then((m) =>
                          m.default(url, init)
                      ),
              }
            : global)
        this.http = http ? http : window
        this.baseUrl = baseUrl ?? 'http://{{domain_api}}'
    }

    /**
     * Movies:::GetByID
     * @param id id of movie
     * @return OK
     */
    phimId(id: string): Promise<MovieDetailResponse> {
        let url_ = this.baseUrl + '/phim/id/{id}'
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.")
        url_ = url_.replace('{id}', encodeURIComponent('' + id))
        url_ = url_.replace(/[?&]$/, '')

        let options_: RequestInit = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPhimId(_response)
        })
    }

    protected processPhimId(response: Response): Promise<any> {
        const status = response.status
        let _headers: any = {}
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: any, k: any) => (_headers[k] = v))
        }
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null
                let resultData200 =
                    _responseText === ''
                        ? null
                        : JSON.parse(_responseText, this.jsonParseReviver)
                result200 =
                    resultData200 !== undefined ? resultData200 : <any>null

                return result200
            })
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException(
                    'An unexpected server error occurred.',
                    status,
                    _responseText,
                    _headers
                )
            })
        }
        return Promise.resolve<any>(null as any)
    }

    /**
     * Movies:::GetBySlug
     * @param slug slug of movie
     * @return OK
     */
    phim(slug: string): Promise<MovieDetailResponse> {
        let url_ = this.baseUrl + '/phim/{slug}'
        if (slug === undefined || slug === null)
            throw new Error("The parameter 'slug' must be defined.")
        url_ = url_.replace('{slug}', encodeURIComponent('' + slug))
        url_ = url_.replace(/[?&]$/, '')

        let options_: RequestInit = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPhim(_response)
        })
    }

    protected processPhim(response: Response): Promise<MovieDetailResponse> {
        const status = response.status
        let _headers: any = {}
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: any, k: any) => (_headers[k] = v))
        }
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null
                let resultData200 =
                    _responseText === ''
                        ? null
                        : JSON.parse(_responseText, this.jsonParseReviver)
                result200 =
                    resultData200 !== undefined ? resultData200 : <any>null

                return result200
            })
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException(
                    'An unexpected server error occurred.',
                    status,
                    _responseText,
                    _headers
                )
            })
        }
        return Promise.resolve<any>(null as any)
    }

    /**
     * List:::MoiCapNhat
     * @param page (optional)
     * @return OK
     */
    danhSachPhimMoiCapNhat(
        page: number | undefined
    ): Promise<ListMoiCapNhatResponseBody> {
        let url_ = this.baseUrl + '/danh-sach/phim-moi-cap-nhat?'
        if (page === null)
            throw new Error("The parameter 'page' cannot be null.")
        else if (page !== undefined)
            url_ += 'page=' + encodeURIComponent('' + page) + '&'
        url_ = url_.replace(/[?&]$/, '')

        let options_: RequestInit = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDanhSachPhimMoiCapNhat(_response)
        })
    }

    protected processDanhSachPhimMoiCapNhat(response: Response): Promise<any> {
        const status = response.status
        let _headers: any = {}
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: any, k: any) => (_headers[k] = v))
        }
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null
                let resultData200 =
                    _responseText === ''
                        ? null
                        : JSON.parse(_responseText, this.jsonParseReviver)
                result200 =
                    resultData200 !== undefined ? resultData200 : <any>null

                return result200
            })
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException(
                    'An unexpected server error occurred.',
                    status,
                    _responseText,
                    _headers
                )
            })
        }
        return Promise.resolve<any>(null as any)
    }

    /**
     * Home:::Get
     * @param page (optional)
     * @return OK
     */
    v1ApiHome(): Promise<HomeGetResponseBody> {
        let url_ = this.baseUrl + '/v1/api/home?'
        const page = undefined;
        if (page === null)
            throw new Error("The parameter 'page' cannot be null.")
        else if (page !== undefined)
            url_ += 'page=' + encodeURIComponent('' + page) + '&'
        url_ = url_.replace(/[?&]$/, '')

        let options_: RequestInit = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processV1ApiHome(_response)
        })
    }

    protected processV1ApiHome(response: Response): Promise<any> {
        const status = response.status
        let _headers: any = {}
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: any, k: any) => (_headers[k] = v))
        }
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null
                let resultData200 =
                    _responseText === ''
                        ? null
                        : JSON.parse(_responseText, this.jsonParseReviver)
                result200 =
                    resultData200 !== undefined ? resultData200 : <any>null

                return result200
            })
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException(
                    'An unexpected server error occurred.',
                    status,
                    _responseText,
                    _headers
                )
            })
        }
        return Promise.resolve<any>(null as any)
    }

    /**
     * List:::PhimBo
     * @param slug query danh sach
     * @param sort_field (optional) sort
     * @param category (optional) category
     * @param country (optional) country
     * @param year (optional) year
     * @param page (optional)
     * @return OK
     */
    v1ApiDanhSach(
        slug: Slug,
        page: number | undefined,
        params?: {
            sort_field: Sort_field
            category: string
            country: string
            year: number
        } | undefined
    ): Promise<ListMoviesResponse> {
        const {
            sort_field,
            category,
            country,
            year,
        } = params || {}
        let url_ = this.baseUrl + '/v1/api/danh-sach/{slug}?'
        if (slug === undefined || slug === null)
            throw new Error("The parameter 'slug' must be defined.")
        url_ = url_.replace('{slug}', encodeURIComponent('' + slug))
        if (sort_field === null)
            throw new Error("The parameter 'sort_field' cannot be null.")
        else if (sort_field !== undefined)
            url_ += 'sort_field=' + encodeURIComponent('' + sort_field) + '&'
        if (category === null)
            throw new Error("The parameter 'category' cannot be null.")
        else if (category !== undefined)
            url_ += 'category=' + encodeURIComponent('' + category) + '&'
        if (country === null)
            throw new Error("The parameter 'country' cannot be null.")
        else if (country !== undefined)
            url_ += 'country=' + encodeURIComponent('' + country) + '&'
        if (year === null)
            throw new Error("The parameter 'year' cannot be null.")
        else if (year !== undefined)
            url_ += 'year=' + encodeURIComponent('' + year) + '&'
        if (page === null)
            throw new Error("The parameter 'page' cannot be null.")
        else if (page !== undefined)
            url_ += 'page=' + encodeURIComponent('' + page) + '&'
        url_ = url_.replace(/[?&]$/, '')

        let options_: RequestInit = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processV1ApiDanhSach(_response)
        })
    }

    protected processV1ApiDanhSach(response: Response): Promise<any> {
        const status = response.status
        let _headers: any = {}
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: any, k: any) => (_headers[k] = v))
        }
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null
                let resultData200 =
                    _responseText === ''
                        ? null
                        : JSON.parse(_responseText, this.jsonParseReviver)
                result200 =
                    resultData200 !== undefined ? resultData200 : <any>null

                return result200
            })
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException(
                    'An unexpected server error occurred.',
                    status,
                    _responseText,
                    _headers
                )
            })
        }
        return Promise.resolve<any>(null as any)
    }

    /**
     * Categories:::List
     * @return OK
     */
    v1ApiTheLoaiGetList(): Promise<CategoriesListResponse> {
        let url_ = this.baseUrl + '/v1/api/the-loai'
        url_ = url_.replace(/[?&]$/, '')

        let options_: RequestInit = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processV1ApiTheLoaiGetList(_response)
        })
    }

    protected processV1ApiTheLoaiGetList(response: Response): Promise<any> {
        const status = response.status
        let _headers: any = {}
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: any, k: any) => (_headers[k] = v))
        }
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null
                let resultData200 =
                    _responseText === ''
                        ? null
                        : JSON.parse(_responseText, this.jsonParseReviver)
                result200 =
                    resultData200 !== undefined ? resultData200 : <any>null

                return result200
            })
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException(
                    'An unexpected server error occurred.',
                    status,
                    _responseText,
                    _headers
                )
            })
        }
        return Promise.resolve<any>(null as any)
    }

    /**
     * Categories:::Movies
     * @param category slug of category
     * @param sort_field (optional) sort
     * @param country (optional) country
     * @param year (optional) year
     * @param page (optional)
     * @return OK
     */
    v1ApiTheLoaiGet(
        category: string,
        sort_field: Sort_field | undefined,
        country: string | undefined,
        year: number | undefined,
        page: number | undefined
    ): Promise<CategoriesMoviesResponseBody> {
        let url_ = this.baseUrl + '/v1/api/the-loai/{category}?'
        if (category === undefined || category === null)
            throw new Error("The parameter 'category' must be defined.")
        url_ = url_.replace('{category}', encodeURIComponent('' + category))
        if (sort_field === null)
            throw new Error("The parameter 'sort_field' cannot be null.")
        else if (sort_field !== undefined)
            url_ += 'sort_field=' + encodeURIComponent('' + sort_field) + '&'
        if (country === null)
            throw new Error("The parameter 'country' cannot be null.")
        else if (country !== undefined)
            url_ += 'country=' + encodeURIComponent('' + country) + '&'
        if (year === null)
            throw new Error("The parameter 'year' cannot be null.")
        else if (year !== undefined)
            url_ += 'year=' + encodeURIComponent('' + year) + '&'
        if (page === null)
            throw new Error("The parameter 'page' cannot be null.")
        else if (page !== undefined)
            url_ += 'page=' + encodeURIComponent('' + page) + '&'
        url_ = url_.replace(/[?&]$/, '')

        let options_: RequestInit = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processV1ApiTheLoaiGet(_response)
        })
    }

    protected processV1ApiTheLoaiGet(response: Response): Promise<any> {
        const status = response.status
        let _headers: any = {}
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: any, k: any) => (_headers[k] = v))
        }
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null
                let resultData200 =
                    _responseText === ''
                        ? null
                        : JSON.parse(_responseText, this.jsonParseReviver)
                result200 =
                    resultData200 !== undefined ? resultData200 : <any>null

                return result200
            })
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException(
                    'An unexpected server error occurred.',
                    status,
                    _responseText,
                    _headers
                )
            })
        }
        return Promise.resolve<any>(null as any)
    }

    /**
     * Countries:::List
     * @return OK
     */
    v1ApiQuocGiaGetList(): Promise<CountriesListResponseBody> {
        let url_ = this.baseUrl + '/v1/api/quoc-gia'
        url_ = url_.replace(/[?&]$/, '')

        let options_: RequestInit = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processV1ApiQuocGiaGetList(_response)
        })
    }

    protected processV1ApiQuocGiaGetList(response: Response): Promise<any> {
        const status = response.status
        let _headers: any = {}
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: any, k: any) => (_headers[k] = v))
        }
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null
                let resultData200 =
                    _responseText === ''
                        ? null
                        : JSON.parse(_responseText, this.jsonParseReviver)
                result200 =
                    resultData200 !== undefined ? resultData200 : <any>null

                return result200
            })
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException(
                    'An unexpected server error occurred.',
                    status,
                    _responseText,
                    _headers
                )
            })
        }
        return Promise.resolve<any>(null as any)
    }

    /**
     * Countries:::Movies
     * @param sort_field (optional) sort
     * @param category (optional) category
     * @param year (optional) year
     * @param page (optional)
     * @param slug slug of country
     * @return OK
     */
    v1ApiQuocGiaGet(
        sort_field: Sort_field | undefined,
        category: string | undefined,
        year: number | undefined,
        page: number | undefined,
        slug: string
    ): Promise<CountriesMoviesResponseBody> {
        let url_ = this.baseUrl + '/v1/api/quoc-gia/{slug}?'
        if (slug === undefined || slug === null)
            throw new Error("The parameter 'slug' must be defined.")
        url_ = url_.replace('{slug}', encodeURIComponent('' + slug))
        if (sort_field === null)
            throw new Error("The parameter 'sort_field' cannot be null.")
        else if (sort_field !== undefined)
            url_ += 'sort_field=' + encodeURIComponent('' + sort_field) + '&'
        if (category === null)
            throw new Error("The parameter 'category' cannot be null.")
        else if (category !== undefined)
            url_ += 'category=' + encodeURIComponent('' + category) + '&'
        if (year === null)
            throw new Error("The parameter 'year' cannot be null.")
        else if (year !== undefined)
            url_ += 'year=' + encodeURIComponent('' + year) + '&'
        if (page === null)
            throw new Error("The parameter 'page' cannot be null.")
        else if (page !== undefined)
            url_ += 'page=' + encodeURIComponent('' + page) + '&'
        url_ = url_.replace(/[?&]$/, '')

        let options_: RequestInit = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processV1ApiQuocGiaGet(_response)
        })
    }

    protected processV1ApiQuocGiaGet(response: Response): Promise<any> {
        const status = response.status
        let _headers: any = {}
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: any, k: any) => (_headers[k] = v))
        }
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null
                let resultData200 =
                    _responseText === ''
                        ? null
                        : JSON.parse(_responseText, this.jsonParseReviver)
                result200 =
                    resultData200 !== undefined ? resultData200 : <any>null

                return result200
            })
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException(
                    'An unexpected server error occurred.',
                    status,
                    _responseText,
                    _headers
                )
            })
        }
        return Promise.resolve<any>(null as any)
    }

    /**
     * Movies:::Slug
     * @param slug slug of movie
     * @return OK
     */
    v1ApiPhim(slug: string): Promise<MoviesSlugResponseBody> {
        let url_ = this.baseUrl + '/v1/api/phim/{slug}'
        if (slug === undefined || slug === null)
            throw new Error("The parameter 'slug' must be defined.")
        url_ = url_.replace('{slug}', encodeURIComponent('' + slug))
        url_ = url_.replace(/[?&]$/, '')

        let options_: RequestInit = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processV1ApiPhim(_response)
        })
    }

    protected processV1ApiPhim(response: Response): Promise<any> {
        const status = response.status
        let _headers: any = {}
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: any, k: any) => (_headers[k] = v))
        }
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null
                let resultData200 =
                    _responseText === ''
                        ? null
                        : JSON.parse(_responseText, this.jsonParseReviver)
                result200 =
                    resultData200 !== undefined ? resultData200 : <any>null

                return result200
            })
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException(
                    'An unexpected server error occurred.',
                    status,
                    _responseText,
                    _headers
                )
            })
        }
        return Promise.resolve<any>(null as any)
    }

    /**
     * Search:::Keyword
     * @param sort_field (optional) sort
     * @param category (optional) category
     * @param country (optional) country
     * @param year (optional) year
     * @param page (optional)
     * @param keyword (optional)
     * @return OK
     */
    v1ApiTimKiem(
        keyword: string | undefined,
        page?: number,
        sort_field?: Sort_field,
        category?: string,
        country?: string,
        year?: number
    ): Promise<SearchKeywordResponseBody> {
        let url_ = this.baseUrl + '/v1/api/tim-kiem?'
        if (sort_field === null)
            throw new Error("The parameter 'sort_field' cannot be null.")
        else if (sort_field !== undefined)
            url_ += 'sort_field=' + encodeURIComponent('' + sort_field) + '&'
        if (category === null)
            throw new Error("The parameter 'category' cannot be null.")
        else if (category !== undefined)
            url_ += 'category=' + encodeURIComponent('' + category) + '&'
        if (country === null)
            throw new Error("The parameter 'country' cannot be null.")
        else if (country !== undefined)
            url_ += 'country=' + encodeURIComponent('' + country) + '&'
        if (year === null)
            throw new Error("The parameter 'year' cannot be null.")
        else if (year !== undefined)
            url_ += 'year=' + encodeURIComponent('' + year) + '&'
        if (page === null)
            throw new Error("The parameter 'page' cannot be null.")
        else if (page !== undefined)
            url_ += 'page=' + encodeURIComponent('' + page) + '&'
        if (keyword === null)
            throw new Error("The parameter 'keyword' cannot be null.")
        else if (keyword !== undefined)
            url_ += 'keyword=' + encodeURIComponent('' + keyword) + '&'
        url_ = url_.replace(/[?&]$/, '')

        let options_: RequestInit = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processV1ApiTimKiem(_response)
        })
    }

    protected processV1ApiTimKiem(response: Response): Promise<any> {
        const status = response.status
        let _headers: any = {}
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: any, k: any) => (_headers[k] = v))
        }
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null
                let resultData200 =
                    _responseText === ''
                        ? null
                        : JSON.parse(_responseText, this.jsonParseReviver)
                result200 =
                    resultData200 !== undefined ? resultData200 : <any>null

                return result200
            })
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException(
                    'An unexpected server error occurred.',
                    status,
                    _responseText,
                    _headers
                )
            })
        }
        return Promise.resolve<any>(null as any)
    }
}

export enum Sort_field {
    Year = 'year',
    Modified_time = 'modified.time',
    _id = '_id',
}
export const sortFields = {
    'year': 'Năm sản xuất',
    'modified.time': 'Thời gian cập nhật',
    _id: 'Thời gian đăng',
}

export enum Slug {
    PhimMoi = "phim-moi",
    PhimBo = "phim-bo",
    PhimLe = "phim-le",
    HoatHinh = "hoat-hinh",
    TvShows = "tv-shows",
    PhimVietsub = "phim-vietsub",
    PhimThuyetMinh = "phim-thuyet-minh",
    PhimLongTieng = "phim-long-tieng",
    PhimBoDangChieu = "phim-bo-dang-chieu",
    PhimBoHoanThanh = "phim-bo-hoan-thanh",
    PhimSapChieu = "phim-sap-chieu",
    Subteam = "subteam",
}

export const Categories = {
    [Slug.PhimBo]: "Phim bộ",
    [Slug.PhimLe]: "Phim lẻ",
    [Slug.HoatHinh]: "Hoạt hình",
    [Slug.TvShows]: "Tv shows",
    [Slug.PhimVietsub]: "Phim vietsub",
    [Slug.PhimThuyetMinh]: "Phim thuyết minh",
    [Slug.PhimLongTieng]: "Phim lồng tiếng",
    [Slug.PhimBoDangChieu]: "Phim bộ đang chiếu",
    [Slug.PhimBoHoanThanh]: "Phim bộ hoàn thành",
    [Slug.PhimSapChieu]: "Phim sắp chiếu",
    [Slug.Subteam]: "subteam",
}
export class ApiException extends Error {
    override message: string
    status: number
    response: string
    headers: { [key: string]: any }
    result: any

    constructor(
        message: string,
        status: number,
        response: string,
        headers: { [key: string]: any },
        result: any
    ) {
        super()

        this.message = message
        this.status = status
        this.response = response
        this.headers = headers
        this.result = result
    }

    protected isApiException = true

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true
    }
}

function throwException(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result?: any
): any {
    if (result !== null && result !== undefined) throw result
    else throw new ApiException(message, status, response, headers, null)
}

const client = new Client('https://ophim1.com')
// const client = new Client('https://phimapi.com')
export default class2Object(client)
