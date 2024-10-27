import { Episode } from 'lib/client'
import React from 'react'
import { Link } from 'react-router-dom';

interface PlaySourceProps extends React.HTMLAttributes<HTMLDivElement> {
    episodes: Episode[]
    // ep: number
    // server: number
    // isWatch: boolean
}
const PlaySource = React.forwardRef<HTMLDivElement, PlaySourceProps>(
    ({ episodes }, ref)=> {
    const [movieEpInfo, setMovieEpInfo] = React.useState<Episode>(episodes[0]!);
    React.useEffect(() => {setMovieEpInfo(episodes[0]!);}, [episodes]);
    const handleEp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const index = parseInt(e.currentTarget.dataset.index || '0');
        setMovieEpInfo(episodes!.at(Number(index))!);
    }
    const handleMore = ()=>{
        document.querySelectorAll('.content_playlist li').forEach((item, index) => {
            if (index > 7) {
                (item as HTMLElement).style.display = 'block';
            }
        });
        (document.querySelector('.more') as HTMLElement).style.display = 'none';
    }
    return (
        <div className="play-select card" ref={ref}>
            <div className="movie-list-header">
                {/* <a
                    href="#"
                    //   onselectstart="return false;"
                    title="切换排序"
                    id="zxdaoxu"
                >
                    倒序
                    <span className="iconfont icon-daoxu" />
                </a> */}
                <span className="movie-list-title">
                    <i className='iconfont2 hl-icon-dianshiju mr-1 gradient text-transparent'/>
                    Xem phim</span>
            </div>
            <div className="play_source">
                <div
                    className="play_source_tab b-t swiper-container1 swiper-container-initialized swiper-container-horizontal"
                    id="tag"
                >
                    <div className="swiper-wrapper server-wrapper">
                        {episodes?.map((item, index) => (
                            <button className='server-switch titleName swiper-slide active swiper-slide-active ' key={index} data-index={index} onClick={handleEp}>{
                                item.server_name
                            }
                            <small>{item.server_data.length}</small>
                            </button>
                        ))}
                        {/* <a className="titleName swiper-slide active swiper-slide-active ">
                            wjm3u8<small>34</small>
                        </a>
                        <a className="titleName swiper-slide swiper-slide-next">
                            okm3u8<small>35</small>
                        </a>
                        <a className="titleName swiper-slide">
                            zuidam3u8<small>35</small>
                        </a>
                        <a className="titleName swiper-slide">
                            nnm3u8<small>35</small>
                        </a>
                        <a className="titleName swiper-slide">
                            sdm3u8<small>35</small>
                        </a>
                        <a className="titleName swiper-slide">
                            yym3u8<small>35</small>
                        </a> */}
                    </div>
                    <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                    />
                </div>
                <div id="tagContent">
                    <div id="playsx" className="play_list_box show daoxu ">
                        <div className="summary">
                        Nguồn video hiện tại được cung cấp bởi <b>{movieEpInfo?.server_name}</b> - xem trực tiếp không cần cài đặt thêm.
                        </div>
                        <div className="playlist_notfull">
                            <ul
                                className="content_playlist flex wrap  plays-more"
                            >
                                {movieEpInfo?.server_data.map((item, index) => (
                                    <li key={index} className='episode' style={{
                                        display: index > 7 ? 'none' : 'block'
                                    }}>
                                    <Link
                                        className="btn"
                                        to="/index.php/vod/play/id/645/sid/1/nid/1.html"
                                    >
                                        {item.name}
                                    </Link>
                                    </li>
                                ))}
                                {
                                    movieEpInfo?.server_data.length > 10 && (
                                        <li className="more">
                                            <button className="btn" onClick={handleMore}>
                                                Xem thêm
                                            </button>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default PlaySource
