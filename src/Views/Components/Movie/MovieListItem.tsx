import useLazyImg from 'Hooks/useLazyImg'
import client, { MovieItem } from 'lib/client'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { buildWebpImageUrl } from 'lib/Utils'
import React from 'react'
import LinkPreload from '../LinkPreload'
import { preload } from 'swr'
interface MovieListItemProps {
    movieInfo: MovieItem
}
const MovieListItem: React.FC<MovieListItemProps> = ({ movieInfo }) => {
    const imgBlock = useLazyImg(movieInfo.thumb_url)
    const imgSrc = React.useMemo(
        () => buildWebpImageUrl(movieInfo.slug, movieInfo.thumb_url),
        [movieInfo.slug]
    )
    const handlePreload = React.useCallback(() => {
        preload(movieInfo.slug, client.v1ApiPhim)
    }, [movieInfo.slug])
    return (
        <div className="movie-list-item" ref={imgBlock}>
            <LinkPreload
                to={'/movie/' + movieInfo.slug}
                title={movieInfo.name}
                onHover={handlePreload}
            >
                <div className="movie-post-wrapper">
                    <div
                        className="movie-post-lazyload Lazy"
                        data-original=""
                        style={{
                            backgroundImage: `url('/images/img-bj.png')`,
                        }}
                    />
                    <img
                        alt={movieInfo?.name}
                        className="lazy-img absolute "
                        data-animated="true"
                        // lazy-src={buildOriginImageUrl(movieInfo.thumb_url)}
                        lazy-src={imgSrc}
                        src="/images/1px.png"
                    />
                    <div className="movie-item-score">{movieInfo?.year}</div>
                    <div className="movie-item-note">{movieInfo?.quality}</div>
                </div>
                <div className="movie-info">
                    {movieInfo?.name ? (
                        <>
                            <div
                                className="movie-title txtHide"
                                title={movieInfo?.name}
                            >
                                {movieInfo?.name}
                            </div>
                            <div
                                className="movie-sub txtHide"
                                title={movieInfo?.origin_name}
                            >
                                {movieInfo?.origin_name}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="movie-title txtHide line short"></div>
                            <div className="movie-sub txtHide line short-30"></div>
                        </>
                    )}
                </div>
            </LinkPreload>
        </div>
    )
}

export default MovieListItem
