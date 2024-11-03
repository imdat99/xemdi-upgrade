import useParseParams from 'Hooks/useParseParams'
import client from 'lib/client'
import { scrollToTop, toSlug } from 'lib/Utils'
import React, { lazy } from 'react'
import { createSearchParams, useParams } from 'react-router-dom'
import useSWR from 'swr'
import AppSuspense from 'Views/Components/AppSuspense'
import PageSeo from 'Views/Components/PageSeo'
import { ClientOnly } from 'Views/Components/SafeRender'
import TopLoading from 'Views/Components/TopLoading'
import MovieInfo from './MovieInfo'
import MovieWatch from './MovieWatch'
const Related = lazy(() => import('./Related'))

const Movie = () => {
    // const na = useNavigate()
    const { slug } = useParams<'slug' | 'type'>()
    const { ep, server } = useParseParams<'ep' | 'server'>()
    const { data, isLoading } = useSWR(slug, client.v1ApiPhim)
    const playerRef = React.useRef<HTMLDivElement>(null)
    const movieInfo = React.useMemo(() => data?.data.item, [data])
    React.useEffect(() => {
        scrollToTop()
        const root = window.document.body
        root.classList.add('details')
        return () => {
            root.classList.remove('details')
        }
    }, [])

    const playInfo = React.useMemo(() => {
        let index = 0
        const movieServer = movieInfo?.episodes?.find(
            (item) => toSlug(item.server_name) === server
        )
        const link_m3u8 = movieServer?.server_data?.find((item, idx) => {
            const con = item.slug === ep
            if (con) (index as any) = idx
            return con
        })?.link_m3u8
        const nextEp = movieServer?.server_data?.[index + 1]
        return {
            link_m3u8,
            nextEp: nextEp
                ? '?' +
                  createSearchParams({
                      ep: String(nextEp.slug),
                      server: toSlug(server),
                  }).toString()
                : '',
        }
    }, [ep, server, movieInfo])
    React.useEffect(() => {
        const root = window.document.body
        const width = document.querySelector('.container')?.clientWidth || 1440
        if (playInfo.link_m3u8 && Number(ep) > 7) {
            ;(
                document.querySelector('li.more button') as HTMLButtonElement
            )?.click()
        }
        if (playInfo.link_m3u8) {
            root.classList.add('watch-mode')
            playerRef.current?.style.setProperty(
                'height',
                (width * 9) / 16 + 'px'
            )
            playerRef.current?.style.setProperty('opacity', '1')
        } else {
            playerRef.current?.style.setProperty('height', '0px')
            playerRef.current?.style.setProperty('opacity', '0')
            root.classList.remove('watch-mode')
        }
    }, [playInfo.link_m3u8])
    return (
        <PageSeo {...(data?.data as React.ComponentProps<typeof PageSeo>)}>
            <TopLoading loading={isLoading} />
            <ClientOnly>
                <MovieWatch
                    className="player"
                    ref={playerRef}
                    m3u8Link={playInfo.link_m3u8 || ''}
                    name={movieInfo?.name || ''}
                    posterUrl={movieInfo?.poster_url || ''}
                    nextEp={playInfo.nextEp}
                />
            </ClientOnly>

            <div className="container flex flex-row">
                <MovieInfo
                    movieInfo={movieInfo}
                    isPlay={!!playInfo.link_m3u8}
                    ep={ep}
                />
                <div className="sidebar list-w-b flex-shrink-0" >
                    <div className="top-sticky" style={{
                    transition: 'all 0.3s',
                }}>
                        <div
                            className="card border-shadow"
                            style={{ marginTop: 20 }}
                        >
                            <div
                                className="movie-list-header top-sticky"
                                style={{ top: 74 }}
                            >
                                <span className="movie-list-title">
                                    Gợi ý liên quan
                                </span>
                            </div>

                            <ClientOnly>
                                <AppSuspense
                                    lazyComponent={Related}
                                    itemCategory={movieInfo?.category[0]}
                                    itemCountry={movieInfo?.country[0]}
                                    itemId={movieInfo?._id}
                                />
                            </ClientOnly>
                        </div>
                    </div>
                </div>
            </div>
        </PageSeo>
    )
}

export default Movie
