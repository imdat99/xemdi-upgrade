import { buildOriginImageUrl, repairUrl } from 'lib/Utils'
import React, { lazy } from 'react'
import {
    useNavigate
} from 'react-router-dom'
import AppSuspense from 'Views/Components/AppSuspense';
interface MovieWatchProps extends React.HTMLAttributes<HTMLDivElement> {
    m3u8Link: string;
    name: string;
    posterUrl: string;
    nextEp: string;
}
const Player = lazy(() => import('./Player'));
const timeleft = 10
const MovieWatch = React.forwardRef<HTMLDivElement, MovieWatchProps>(
    ({ className, m3u8Link, posterUrl, name, nextEp }, ref) => {
        const na = useNavigate();
        const [count, setCount] = React.useState(timeleft)
        const [show, setShow] = React.useState(false)
        const isCount = React.useRef(false)

        const timmer = React.useRef<NodeJS.Timeout>()
        // const buildWatchLink = React.useCallback(
        //     (index: number, serverIndex: number) => {
        //         return [
        //             location.pathname,
        //             '?',
        //             createSearchParams({
        //                 ep: String(index),
        //                 server: String(serverIndex),
        //             }).toString(),
        //         ].join('')
        //     },
        //     [location.pathname, server, ep]
        // )
        React.useEffect(() => {
            if (count <= 0 && nextEp) {
                setCount(timeleft)
                isCount.current = false
                clearInterval(timmer.current)
                setShow(false)
                na(nextEp)
            }
            const htmlCountContainer =
                document.getElementById('count-container')
            if (htmlCountContainer) {
                if (isCount.current) {
                    htmlCountContainer.innerText = `Tập tiếp theo sau ${count} giây`
                } else {
                    htmlCountContainer.innerText = ''
                }
            }
        }, [count])
        // React.useEffect(() => {
        //     setShow(false)
        // }, [ep, server])
        // const countDown = React.useCallback(
        //     debounce(() => {
        //         isCount.current = true
        //         timmer.current = setInterval(function () {
        //             setCount((prev) => {
        //                 if (prev <= 0) {
        //                     clearInterval(timmer.current)
        //                 }
        //                 return prev - 1
        //             })
        //         }, 1000)
        //     }, 100),
        //     [ep, server]
        // )
        return (
            <div className={className} ref={ref} >
                {
                    m3u8Link &&  <AppSuspense
                    lazyComponent={Player}
                    className="w-100 h-100"
                    getInstance={(instance: Artplayer) => {
                        instance.on('video:ended', () => {
                            // console.log('done,')
                            // if (
                            //     !isCount.current &&
                            //     itemData.episodes[server].server_data[ep + 1]
                            // )
                            //     countDown()
                        })
                        instance.on('video:error', () => {
                            alert('Lỗi xảy ra, vui lòng thử lại')
                        })
                        instance.on('error', () => {
                            alert('Lỗi xảy ra, vui lòng thử lại')
                        })
                    }}
                    playPercent={(percent) => {
                        // setShow(percent > 85)
                    }}
                    option={{
                        _id: m3u8Link,
                        name: name,
                        url: repairUrl(m3u8Link),
                        // url: '/ahihi-decoded.m3u8',
                        setting: true,
                        playbackRate: true,
                        autoplay: true,
                        fullscreen: true,
                        mutex: true,
                        backdrop: true,
                        fastForward: true,
                        theme: '#E03131',
                        poster: buildOriginImageUrl(posterUrl),
                        controls: [
                            {
                                name: 'button1',
                                index: 10,
                                position: 'right',
                                html: ' <img  width="24" heigth="24" src="/images/next.svg">',
                                tooltip: 'Tiến 10s',
                                click: function () {
                                    this.forward = 10
                                },
                            },
                            {
                                name: 'button2',
                                index: 10,
                                position: 'right',
                                html: ' <img  width="24" heigth="24" src="/images/prev.svg">',
                                tooltip: 'Lùi 10s',
                                click: function () {
                                    this.backward = 10
                                },
                            },
                        ],
                        layers: [
                            {
                                html: `<p id="count-container"></p>`,
                                click: function () {
                                    // na(buildWatchLink(ep + 1, server))
                                },
                                style: {
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    opacity: '.9',
                                },
                            },
                        ],
                    }}
                />
                }
              
                {/* <p className="my-3"> {
                    show && itemData.episodes[server].server_data[ep + 1] && <Link
                    to={buildWatchLink(ep, server)}
                    type="button"
                    title="share"
                    className="nes-btn is-warning flex mt-5 w-fit"
                >
                    <i className="nes-icon play"></i>
                    Tập tiếp theo ({count})
                </Link>
                }
                <input className=' md:placeholder:text-ba pb-'/>
                </p> */}
            </div>
        )
    }
)

MovieWatch.displayName = 'MovieWatch'
export default MovieWatch
