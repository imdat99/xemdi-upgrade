import {storageTimeKey} from 'lib/Constants'
import {scrollToTop, secondsToHHMMSS, throttle} from 'lib/Utils'
import Artplayer from 'artplayer'
import Hls, {HlsConfig} from 'hls.js'
import React, {useEffect, useRef} from 'react'

interface PlayerProps extends React.HTMLAttributes<HTMLDivElement> {
    getInstance?: (instance: Artplayer) => void
    playPercent?: (percent: number) => void
    option: Omit<Artplayer['option'], 'container' | 'customType'> & {
        _id: string
        name: string
    }
}

const Player = React.forwardRef<HTMLDivElement, PlayerProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({className, option, getInstance, playPercent}, _ref) => {
        const [isError, setIsError] = React.useState<boolean>(false)
        const playerRef = useRef<HTMLDivElement>(null)
        const artRef = useRef<Artplayer>()
        const [_open, setOpen] = React.useState<number>(0)
        const writeTime = throttle(
            React.useCallback(() => {
                if (!artRef.current!.playing) return
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                playPercent &&
                playPercent(
                    (artRef.current!.currentTime /
                        artRef.current!.duration) *
                    100
                )
                const prevStorage = localStorage.getItem(storageTimeKey)
                const currentTime =
                    (artRef.current!.currentTime / artRef.current!.duration) *
                    100 >
                    95
                        ? 0
                        : artRef.current!.currentTime
                localStorage.setItem(
                    storageTimeKey,
                    JSON.stringify({
                        ...JSON.parse(prevStorage || '{}'),
                        [option._id]: currentTime,
                    })
                )
            }, [option.url]),
            5000
        )
        useEffect(() => {
            if (!option.url) return
            fetch(option.url).then(() => {
                artRef.current = new Artplayer({
                    ...option,
                    container: playerRef.current!,
                    autoOrientation: true,
                    subtitleOffset: false,
                    customType: {
                        m3u8: function playM3u8(video, url, art) {
                            if (Hls.isSupported()) {
                                const config: Partial<HlsConfig> = {
                                    emeEnabled: true,
                                }
                                const hls = new Hls(config)
                                hls.attachMedia(video);
                                hls.loadSource(url);
                                art.hls = hls
                                art.on('destroy', () => hls.destroy())
                            } else if (
                                video.canPlayType('application/vnd.apple.mpegurl')
                            ) {
                                video.src = url
                            } else {
                                art.notice.show =
                                    'Unsupported playback format: m3u8'
                            }
                        },
                    },
                })

                if (getInstance && typeof getInstance === 'function') {
                    getInstance(artRef.current)
                }
                artRef.current.on('ready', () => {
                    scrollToTop()
                    const prevStorage = JSON.parse(
                        localStorage.getItem(storageTimeKey) || '{}'
                    )
                    if (prevStorage[option._id] && artRef.current) {
                        artRef.current.pause()
                        setOpen(prevStorage[option._id])
                    }
                })
                artRef.current.on('video:timeupdate', writeTime)
            }).catch(() => {
                setIsError(true)
                if (artRef.current && artRef.current.destroy) {
                    artRef.current.destroy(false)
                }
            })

            return () => {
                if (artRef.current && artRef.current.destroy) {
                    artRef.current.destroy(false)
                }
            }
        }, [option.url])

        return (
            <>
                <div ref={playerRef} className={className} style={isError ? {
                    backgroundImage: `url(${option.poster})`,
                    backgroundSize: 'contain'
                } : {}}>
                    {isError && "Không thể phát video"}
                </div>
            </>
        )
    }
)
Player.displayName = 'Player'
export default Player
