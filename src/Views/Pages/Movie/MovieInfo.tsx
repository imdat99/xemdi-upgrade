import useLazyImg from 'Hooks/useLazyImg'
import { MovieDetail } from 'lib/client'
import { defaultServerData, ImageTypes } from 'lib/Constants'
import { buildWebpImageUrl } from 'lib/Utils'
import React from 'react'
import { Link } from 'react-router-dom'
import PlaySource from './PlaySource'

interface MovieInfoProps {
    movieInfo?: MovieDetail
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movieInfo }) => {
    const imgBlock = useLazyImg(movieInfo?.slug)
    const handleExpand = React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            document.querySelector('.detailsTxt')?.classList.toggle('more')
            const icon = e.currentTarget.querySelector('i')!
            const span = e.currentTarget.querySelector('span')!
            if (
                document
                    .querySelector('.detailsTxt')
                    ?.classList.contains('more')
            ) {
                span.innerHTML = 'Thu gọn'
                icon.classList.remove('icon-zhankaixiajiantou-')
                icon.classList.add('icon-shouqi')
            } else {
                span.innerHTML = 'Mở rộng'
                icon.classList.add('icon-zhankaixiajiantou-')
            }
        },
        []
    )
    return (
        <div className="mobile-main mobile-main-type">
            <ul className="fixed-nav">
                <li
                    className="fixed-nav-content flext ShareButton"
                    data-url="https://www.test.cn/index.php/vod/detail/id/645.html"
                    title="Chia sẻ trang"
                >
                    <span className="iconfont icon-fenxiang tipso_style" />
                </li>
                <Link
                    to="/index.php/gbook/index.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    <li className="fixed-nav-content flex">
                        <span className="iconfont icon-fankuixuanzhong tipso_style" />
                    </li>
                </Link>
            </ul>
            <div
                className="movie relative card border-shadow overflow-hidden"
                style={{ paddingBottom: 15 }}
                ref={imgBlock}
            >
                <div className='absolute h-100 w-100'>
                    <img
                            data-animated
                            src="/images/1px.png"
                            lazy-src={buildWebpImageUrl(
                                movieInfo?.slug,
                                ImageTypes.poster
                            )}
                            alt=""
                            className='absolute movie-detail-poster'
                            // className="h-full aspect-video m-auto flex-shrink-0 object-cover opacity-0"
                        />
                        <div className="left-layer w-100 h-100"></div>
                        <div className="absolute backdrop-blur w-100 h-100" />
                </div>
                <div className="flex b-t p-2 relative">
                    <div className="poster relative" >
                        <div
                            className="movie-post-lazyload Lazy"
                            data-original=""
                            style={{
                                backgroundImage: `url('/images/img-bj.png')`,
                            }}
                        />
                        <img
                            data-animated
                            className="lazy-img absolute"
                            // lazy-src={buildOriginImageUrl(movieInfo.thumb_url)}
                            lazy-src={buildWebpImageUrl(
                                movieInfo?.slug,
                                ImageTypes.thumb
                            )}
                            src="/images/1px.png"
                        />
                    </div>
                    <div className="title-block detail">
                        <div className="movie-info">
                            <h1 className="movie-title" title={movieInfo?.name}>
                                {movieInfo?.name}{' '}
                            </h1>
                            <h2 className="movie-title movie-sub-title">
                                {movieInfo?.origin_name}
                            </h2>
                        </div>
                        <div className="scroll-content">
                            {movieInfo?.category.map((category, index) => (
                                <Link to={category.slug} key={index}>
                                    <span className="is-dark">
                                        {category.name}
                                    </span>
                                </Link>
                            ))}
                            <Link to="/index.php/vod/search/year/2013.html">
                                {movieInfo?.year}
                            </Link>
                            <Link to="/index.php/vod/search/year/2013.html">
                                {movieInfo?.type || 'Unknown'}
                            </Link>
                        </div>
                        <div className="info-data">
                            <strong>Đạo diễn：</strong>
                            <span>
                                {movieInfo?.director.filter(Boolean).length
                                    ? movieInfo?.director
                                    : 'Đang cập nhật'}
                            </span>
                        </div>

                        <div className="info-data">
                            <strong>Diễn viên：</strong>
                            <span className="px-1">
                                {movieInfo?.actor.filter(Boolean).length
                                    ? movieInfo?.actor.join(', ')
                                    : 'Đang cập nhật'}
                            </span>
                        </div>
                        <div className="info-data">
                            <strong>Trạng thái：</strong>
                            {movieInfo?.status}
                        </div>
                        <div className='mt-auto flex'>
                            <button className='btn playbtn'>
                                <i className="iconfont2 hl-icon-shipin-fill mr-1" />
                                <span>Phát</span>
                            </button>
                            <button className='btn fnBtn ml-1' title='Tuỳ chọn (danh sách phát/ Thông báo)'>
                            <i style={{
                                    fontSize: "1.5rem"
                                }} className="iconfont icon-liebiao gradient text-transparent" />
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div className="summary detailsTxt">
                    {movieInfo?.content}
                    <div className="ectogg" onClick={handleExpand}>
                        <span>Mở rộng</span>
                        <i className="iconfont icon-zhankaixiajiantou-" />
                    </div>
                </div>
            </div>
            <PlaySource
                episodes={
                    movieInfo?.episodes
                        ? movieInfo?.episodes
                        : [defaultServerData]
                }
            />
            <div className="card">
                <div className="movie-list-header">
                    <span className="movie-list-title">Bình luận</span>
                </div>
                <div className="mac_comment" data-id={645} data-mid={1}>
                    <form className="comment_form comment back">
                        <input
                            type="hidden"
                            name="comment_pid"
                            defaultValue={0}
                        />
                        <textarea
                            className="comment_content"
                            name="comment_content"
                            placeholder="Nhập bình luận của bạn"
                            defaultValue={''}
                        />
                        <div className="flex" style={{ justifyContent: 'end' }}>
                            <button
                                className="comment_submit btn active"
                                type="button"
                            >Đăng</button>
                        </div>
                    </form>
                    <div></div>
                    {/*评论结束*/}
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
