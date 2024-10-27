import useLazyImg from 'Hooks/useLazyImg'
import { MovieItem } from 'lib/client'
import { ImageTypes } from 'lib/Constants'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { buildOriginImageUrl, buildWebpImageUrl } from 'lib/Utils'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

interface MovieListItemProps {
    movieInfo: MovieItem
}
const MovieListItem: React.FC<MovieListItemProps> = ({movieInfo}) => {
    const imgBlock = useLazyImg(movieInfo.thumb_url)
    const imgSrc = React.useMemo(() => buildWebpImageUrl(movieInfo.slug, ImageTypes.thumb), [movieInfo.slug])
    return (
        <div className="movie-list-item" ref={imgBlock}>
            <Helmet>
                <link rel='prefetch' as="image" href={imgSrc}/>
            </Helmet>
            <Link to={'/movie/'+movieInfo.slug} title={movieInfo.name}>
                <div className="movie-post-wrapper">
                    <div
                        className="movie-post-lazyload Lazy"
                        data-original=""
                        style={{
                            backgroundImage: `url('/images/img-bj.png')`
                        }}
                    />
                    <img
                        className="lazy-img absolute "
                        data-animated='true'
                        // lazy-src={buildOriginImageUrl(movieInfo.thumb_url)}
                        lazy-src={imgSrc}
                        src='/images/1px.png'
                    />
                    <div className="movie-item-score">{movieInfo?.year}</div>
                    <div className="movie-item-note">{movieInfo?.quality}</div>
                </div>
                <div className="movie-info">
                    <div
                        className="movie-title txtHide"
                        title={movieInfo?.name}
                    >
                        {movieInfo?.name}
                    </div>
                    <div className="movie-sub txtHide" title={movieInfo?.origin_name}>
                        {movieInfo?.origin_name}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieListItem
