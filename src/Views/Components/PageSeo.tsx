import { MoviesSlugResponseBody, SeoOnPage } from 'lib/client'
import { webUrl } from 'lib/Constants'
import { buildWebpImageUrl } from 'lib/Utils'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

interface PageSeoProps {
    children?: React.ReactNode
    seoOnPage: SeoOnPage
    item?: MoviesSlugResponseBody['data']['item']
}
const PageSeo: React.FC<PageSeoProps> = ({ children, seoOnPage, item }) => {
    const {
        og_type,
        titleHead,
        descriptionHead,
        og_image,
        seoSchema,
        // updated_time,
        // og_url,
    } = seoOnPage || {}
    const location = useLocation()
    const description = React.useMemo(() => descriptionHead || item?.content?.replace(/<[^>]*>/g, ''), [descriptionHead, item])
    return (
        <>
            {seoOnPage && (
                <Helmet prioritizeSeoTags>
                    <title>{titleHead}</title>
                    <meta name="googlebot" content="all"/>
                    <meta name="googlebot-news" content="all"/>
                    <meta
                        name="description"
                        content={description}
                    />
                    <meta
                        property="og:description"
                        content={description}
                    ></meta>
                    <meta
                        property="og:title"
                        content={['Xem Đi', titleHead].join(' -')}
                    ></meta>
                    <link
                        rel="canonical"
                        href={webUrl + location.pathname}
                    />
                    <meta
                        property="og:url"
                        content={webUrl + location.pathname}
                    ></meta>
                    <meta property="og:site_name" content="Xem Đi" />
                    <meta
                        property="og:image"
                        content={buildWebpImageUrl(og_image[0] || '')}
                    />
                    <meta
                        property="og:type"
                        content={og_type || 'website'}
                    ></meta>
                    <script type='application/ld+json'>
                        {JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            name: 'Xem Đi',
                            description,
                            ...seoSchema,
                            url: webUrl + location.pathname,
                            director: webUrl,
                            potentialAction: {
                                '@type': 'SearchAction',
                                target: webUrl+'/search?q={search_term_string}',
                                'query-input': 'required name=search_term_string',
                            },
                        })}
                    </script>
                </Helmet>
            )}
            {children}
        </>
    )
}

export default PageSeo
