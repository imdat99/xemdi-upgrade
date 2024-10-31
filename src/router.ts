import { createElement as _c } from 'react'
import { RouteObject } from 'react-router-dom'
import Layout from './Views/Components/Layout';
import { SWRConfiguration } from 'swr'
import { isClient } from 'lib/Utils';
import client from 'lib/client';
import SwrConfigHOC from 'Hocs/SwrConfigHOC';

/**
 * never use lazy loading in the root route,
 * use lazy loading in the child route or compoenent
 */
const router: RouteObject[] = [
    {
        path: '/',
        element: _c(Layout),
        // element: _c(Outlet),
        errorElement: _c('div', {}, '404 Not Found'),
        children: [
            {
                index: true,
                loader: async (): Promise<SWRConfiguration> => {
                    if (isClient) {
                        return {}
                    }
                    try {
                        return {
                            fallback: {
                                home: await client.v1ApiHome(),
                            },
                        }
                    } catch (error) {
                        console.error(error)
                        return {}
                    }
                    
                },
                lazy: async () => ({
                    Component: SwrConfigHOC((await import('Views/Pages/Home')).default),
                }),
            },
            {
                path: "icon",
                lazy: async () => ({
                    Component: (await import('Views/Pages/IconPick')).default,
                }),
            },
            // {
            //     path: 'about',
            //     lazy: async () => ({
            //         Component: (await import('./views/pages/About')).default,
            //     }),
            // },
            // {
            //     path: 'tim-kiem',
            //     lazy: async () => ({
            //         Component: (await import('./views/pages/PageSearch'))
            //             .default,
            //     }),
            //     loader: async (params): Promise<SWRConfiguration> => {
            //         if (isClient) return {}
            //         const {keyword} = parseParams(params.request.url)
            //         if (keyword) {
            //             const searchString = decodeURIComponent(keyword)
            //             if(searchString)
            //             return {
            //                 fallback: {
            //                     [infinite_unstable_serialize(() => [searchString || 'tim-kiem', 1])]: [await client.v1ApiTimKiem(searchString, 1)],
            //                 },
            //             }
            //         } 
            //         return {}
                    
            //     },
            // },
            // {
            //     path: 'category',
            //     lazy: async () => ({
            //         Component: (await import('./views/pages/Category')).default,
            //     }),
            //     loader: async ({ request }): Promise<SWRConfiguration>=> {
            //         if (isClient) return {}
            //         const searchParams = parseParams(request.url)
            //         return {
            //             fallback: {
            //                 [searchParams?.slug || JSON.stringify(searchParams)]: await client.v1ApiDanhSach(searchParams.slug as Slug || Slug.PhimMoi, searchParams.page || 1, searchParams as any),
            //             },
            //         }
            //     },
            // },
            {
                path: 'movie/:slug',
                loader: async ({ params }): Promise<SWRConfiguration> => {
                    try {
                        if (isClient) {
                            return {}
                        }
                        return {
                            fallback: {
                                [params.slug || 'slug']: await client.v1ApiPhim(
                                    params.slug || ''
                                ),
                            },
                        }
                    }
                    catch (error) {
                        console.error(error)
                        return {}
                    }
                },
                lazy: async () => ({
                    Component: SwrConfigHOC((await import('Views/Pages/Movie')).default),
                }),
            },
        ],
    },
]

export default router
