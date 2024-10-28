import useParseParams from 'Hooks/useParseParams'
import { Episode } from 'lib/client'
import { toSlug } from 'lib/Utils'
import React from 'react'
import { createSearchParams, Link } from 'react-router-dom'

interface PlaySourceProps extends React.HTMLAttributes<HTMLDivElement> {
    episodes: Episode[]
    status: boolean
    trailerUrl: string
    // ep: number
    // server: number
    // isWatch: boolean
}
const PlaySource = React.forwardRef<HTMLDivElement, PlaySourceProps>(
    ({ episodes, status, trailerUrl }, ref) => {
        const { ep, server } = useParseParams<'ep' | 'server'>()
        const [movieEpInfo, setMovieEpInfo] = React.useState<Episode>(
            episodes[0]!
        )
        React.useEffect(() => {
            setMovieEpInfo(episodes[0]!)
        }, [episodes])
        const handleEp = (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => {
            e.preventDefault()
            const index = parseInt(e.currentTarget.dataset.index || '0')
            setMovieEpInfo(episodes!.at(Number(index))!)
        }
        const handleMore = () => {
            document
                .querySelectorAll('.content_playlist li')
                .forEach((item, index) => {
                    if (index > 7) {
                        ;(item as HTMLElement).style.display = 'block'
                    }
                })
            ;(document.querySelector('.more') as HTMLElement).style.display =
                'none'
        }
        return (
            <div className="play-select card" ref={ref}>
                <div className="movie-list-header">
                    <span className="movie-list-title">
                        <i className="iconfont2 hl-icon-dianshiju mr-1 gradient text-transparent" />
                        Xem phim
                    </span>
                </div>
                <div className="play_source">
                    <div className="play_source_tab b-t swiper-container1 swiper-container-initialized swiper-container-horizontal">
                        <div className="swiper-wrapper server-wrapper">
                            {episodes?.map((item, index) => (
                                <button
                                    className={"server-switch titleName swiper-slide"+(movieEpInfo?.server_name === item.server_name ? "  active swiper-slide-active" : "")}
                                    key={index}
                                    data-index={index}
                                    onClick={handleEp}
                                >
                                    {item.server_name}
                                    <small>{item.server_data.length}</small>
                                </button>
                            ))}
                        </div>
                        <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                        />
                    </div>
                    <div>
                        <div className="play_list_box show daoxu ">
                            <div className="summary">
                                Nguồn video hiện tại được cung cấp bởi{' '}
                                <b>{movieEpInfo?.server_name}</b> - xem trực
                                tiếp không cần cài đặt thêm.
                            </div>
                            <div className="playlist_notfull">
                                {!status && (
                                    <p className="text-center mt-5">
                                        Hiện tại chưa có tập phim nào, nhận{' '}
                                        <b>Thông báo</b> khi có tập phim mới
                                    </p>
                                )}

                                <ul className="content_playlist flex wrap  plays-more">
                                    {trailerUrl && (
                                        <li className="episode">
                                            <Link
                                                target='_blank'
                                                className="btn"
                                                to={trailerUrl}
                                            >
                                                Trailer
                                            </Link>
                                        </li>
                                    )}
                                    {movieEpInfo?.server_data
                                        .filter((x) => x.link_m3u8)
                                        .map((item, index) => (
                                            <li
                                                key={index}
                                                className="episode"
                                                style={{
                                                    display:
                                                        index > 7
                                                            ? 'none'
                                                            : 'block',
                                                }}
                                            >
                                                <Link
                                                    className={"btn" + (toSlug(movieEpInfo.server_name) === server && item.slug === ep ? " active" : "")}
                                                    to={"?"+createSearchParams({
                                                        ep: String(item.slug),
                                                        server: toSlug(movieEpInfo.server_name),
                                                    }).toString()}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    {movieEpInfo?.server_data.length > 10 && (
                                        <li className="more">
                                            <button
                                                className="btn"
                                                onClick={handleMore}
                                            >
                                                Xem thêm
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)

export default PlaySource
