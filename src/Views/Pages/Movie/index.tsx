import useParseParams from 'Hooks/useParseParams'
import client from 'lib/client'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import PageSeo from 'Views/Components/PageSeo'
import MovieInfo from './MovieInfo'
import TopLoading from 'Views/Components/TopLoading'
import { scrollToTop } from 'lib/Utils'

const Movie = () => {
    const na = useNavigate()
    const { slug, type } = useParams<'slug' | 'type'>()
    const { ep, server } = useParseParams<'ep' | 'server'>()
    const { data, isLoading } = useSWR(slug || 'slug', client.v1ApiPhim, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
    })

    const movieInfo = React.useMemo(() => data?.data.item, [data])
    React.useEffect(() => {
        scrollToTop()
        const root = window.document.body
        root.classList.add('details')
        return () => {
            root.classList.remove('details')
        }
    }, [])
    return (
        <PageSeo {...(data?.data as React.ComponentProps<typeof PageSeo>)}>
            <TopLoading loading={isLoading} />
            <MovieInfo movieInfo={movieInfo} />
            <div className="sidebar list-w-b">
                <div className="top-sticky">
                    <div
                        className="card border-shadow"
                        style={{ marginTop: 20 }}
                    >
                        <div
                            className="movie-list-header top-sticky"
                            style={{ top: 74 }}
                        >
                            <span className="movie-list-title">相关推荐</span>
                        </div>
                        <div className="movie-list-body2 flex">
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/737.html"
                                    title="座头市渡海"
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="https://maoxiantu.com/upload/vod/20240603-1/059162f75378c8df1be1191f690e6b5c.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://maoxiantu.com/upload/vod/20240603-1/059162f75378c8df1be1191f690e6b5c.jpg")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            1966
                                        </div>
                                        <div className="movie-item-note">
                                            更新HD
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title="座头市渡海影片信息"
                                        >
                                            座头市渡海
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title="座头市渡海影片信息"
                                        >
                                            为了祭奠死于自己手中的人，座头市继续在四国的札所一带游历。路途中被骑着马的荣五郎袭击，结果座头市又一次开了杀戒。痛心疾首的市前去拜访了荣五郎的妹妹小吉，却被知晓了前因后果的小吉挥刀相向。市心甘情愿地挨
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/677.html"
                                    title="姐妹"
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="https://maoxiantu.com/upload/vod/20240520-7/484a275ec961fa695be69db63f5f013a.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://maoxiantu.com/upload/vod/20240520-7/484a275ec961fa695be69db63f5f013a.jpg")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            2022
                                        </div>
                                        <div className="movie-item-note">
                                            已完结
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title="姐妹影片信息"
                                        >
                                            姐妹
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title="姐妹影片信息"
                                        >
                                            这部作品是由 Ayapan
                                            和近藤翼编剧的电子漫画的真人版。
                                            这是一个关于好朋友的妹妹三好渚、姐姐佐帆和一个男人的爱情悬疑故事。
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/653.html"
                                    title="我才不要和你做朋友呢"
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="https://maoxiantu.com/upload/vod/20240519-22/a945bb1a93829cdd42cbe22484585450.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://maoxiantu.com/upload/vod/20240519-22/a945bb1a93829cdd42cbe22484585450.jpg")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            2020
                                        </div>
                                        <div className="movie-item-note">
                                            更新第24集
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title="我才不要和你做朋友呢影片信息"
                                        >
                                            我才不要和你做朋友呢
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title="我才不要和你做朋友呢影片信息"
                                        >
                                            《我才不要和你做朋友呢》通过讲述一场奇幻旅行遇见自己18岁妈妈的故事来探讨代际话题。从小与妈妈相依为命的高中生李进步（庄达菲饰）因为一场奇幻旅行回到了20年前，遇见妈妈李青桐（陈昊宇饰）并做起了好友，
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/645.html"
                                    title={movieInfo?.name}
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="https://maoxiantu.com/upload/vod/20240521-5/0183df2cdb0445369c638115bc1ad938.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://maoxiantu.com/upload/vod/20240521-5/0183df2cdb0445369c638115bc1ad938.jpg")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            2013
                                        </div>
                                        <div className="movie-item-note">
                                            更新第34集
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title={movieInfo?.name}
                                        >
                                            {movieInfo?.name}{' '}
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title={movieInfo?.name}
                                        >
                                            故事发生在1945年的陪都重庆。国民党特训班学生许忠义（沙溢
                                            饰）因留级奉命进入沈阳的军统组织，他的任务是打入中共部队做卧底，军统沈阳站特务头子陈明（赵纯阳
                                            饰）不明就里，对许的突返东北心存疑虑，许忠
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/561.html"
                                    title="月上朝颜"
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="https://maoxiantu.com/upload/vod/20240522-8/3b7590825ced7f8a8cf435d51e5d7492.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://maoxiantu.com/upload/vod/20240522-8/3b7590825ced7f8a8cf435d51e5d7492.jpg")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            2024
                                        </div>
                                        <div className="movie-item-note">
                                            全24集
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title="月上朝颜影片信息"
                                        >
                                            月上朝颜
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title="月上朝颜影片信息"
                                        >
                                            “逆仙缠身”的少女云朝颜巧遇“收复逆仙”的月神任时缺，为了摆脱逆仙，云朝颜千方百计地缠住任时缺，由此二人展开了一段相生相伴的奇幻之旅，而他们的羁绊还不只于此……
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/563.html"
                                    title="蓝色时刻"
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="https://maoxiantu.com/upload/vod/20240521-8/f40a49e10ef9e8a1873b7a3da8381ecc.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://maoxiantu.com/upload/vod/20240521-8/f40a49e10ef9e8a1873b7a3da8381ecc.jpg")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            2024
                                        </div>
                                        <div className="movie-item-note">
                                            全10集
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title="蓝色时刻影片信息"
                                        >
                                            蓝色时刻
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title="蓝色时刻影片信息"
                                        >
                                            本剧改编自同名漫画，讲述了保护因巨大的气象灾害面临威胁的生命，运用智慧和知识在最前线冒着生命危险进行救援的SDM本部（特别灾害对策本部）成员的奋斗故事。山下智久饰演SDM本部主任、天才气象研究官晴原柑
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/564.html"
                                    title="1122好夫妇"
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="https://maoxiantu.com/upload/vod/20240519-37/9b5d3ec8342b043f78d0061bc07fa2b1.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://maoxiantu.com/upload/vod/20240519-37/9b5d3ec8342b043f78d0061bc07fa2b1.jpg")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            2024
                                        </div>
                                        <div className="movie-item-note">
                                            全7集
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title="1122好夫妇影片信息"
                                        >
                                            1122好夫妇
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title="1122好夫妇影片信息"
                                        >
                                            网页设计师的妻子相原一子和在文具制造厂工作的丈夫相原二也即使无性婚姻、没有孩子，夫妻关系也非常和谐，但是两人有秘密——每个月的第3个星期四晚上，二也会和“恋人”一起度过，结婚第7年的两人选择的是“婚外
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/576.html"
                                    title="富兰克林"
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="https://maoxiantu.com/upload/vod/20240521-1/bb20035a78943ba8c28d5aba821dde2b.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://maoxiantu.com/upload/vod/20240521-1/bb20035a78943ba8c28d5aba821dde2b.jpg")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            2024
                                        </div>
                                        <div className="movie-item-note">
                                            全8集
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title="富兰克林影片信息"
                                        >
                                            富兰克林
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title="富兰克林影片信息"
                                        >
                                            In December 1776, Benjamin Franklin
                                            is world famous for his electrical
                                            experiments. But his passion
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/550.html"
                                    title="过度保护的少爷的溺爱婚姻"
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="/img.php?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2908023677.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("/images/load.png")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            2024
                                        </div>
                                        <div className="movie-item-note">
                                            更新至05集
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title="过度保护的少爷的溺爱婚姻影片信息"
                                        >
                                            过度保护的少爷的溺爱婚姻
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title="过度保护的少爷的溺爱婚姻影片信息"
                                        >
                                            累計40万部を突破したcomic
                                            tint発の超人気連載「過保護な若旦那様の甘やかし婚」が、主演・高野洸さん、ヒロインに井頭愛海さんを迎え、5月23日（木）よりMBSドラマ特区枠にて実写ドラマ化いたし
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/554.html"
                                    title="欲望快键键"
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="https://maoxiantu.com/upload/vod/20240603-3/6318cc9d0e94899f9d5b853be97358f2.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://maoxiantu.com/upload/vod/20240603-3/6318cc9d0e94899f9d5b853be97358f2.jpg")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            2024
                                        </div>
                                        <div className="movie-item-note">
                                            全3集
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title="欲望快键键影片信息"
                                        >
                                            欲望快键键
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title="欲望快键键影片信息"
                                        >
                                            29岁的格兰特·阿马托 (Grant Amato)
                                            因在2019年谋杀自己的母亲、父亲和兄弟而被判有罪。
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/556.html"
                                    title="我的简·格雷"
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="https://maoxiantu.com/upload/vod/20240606-2/7c356797a5bb9ff794a55a3efa768d24.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://maoxiantu.com/upload/vod/20240606-2/7c356797a5bb9ff794a55a3efa768d24.jpg")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            2024
                                        </div>
                                        <div className="movie-item-note">
                                            全8集
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title="我的简·格雷影片信息"
                                        >
                                            我的简·格雷
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title="我的简·格雷影片信息"
                                        >
                                            该剧改编自同名畅销小说。聚焦16世纪的英格兰，简·
                                            格雷避开了刽子手的斧头，过着有趣而充实的生活，充满了浪漫和冒险。
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="movie-list-item">
                                <a
                                    href="/index.php/vod/detail/id/558.html"
                                    title="美人攻略"
                                >
                                    <div className="movie-post-wrapper">
                                        <div
                                            className="movie-post-lazyload Lazy"
                                            data-original="https://maoxiantu.com/upload/vod/20240524-15/acac14a82bac0432b3bb810f4049d3d9.jpg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://maoxiantu.com/upload/vod/20240524-15/acac14a82bac0432b3bb810f4049d3d9.jpg")',
                                            }}
                                        />
                                        <div className="movie-item-score">
                                            2024
                                        </div>
                                        <div className="movie-item-note">
                                            全24集
                                        </div>
                                    </div>
                                    <div className="movie-info">
                                        <div
                                            className="movie-title txtHide"
                                            title="美人攻略影片信息"
                                        >
                                            美人攻略
                                        </div>
                                        <div
                                            className="movie-sub txtHide"
                                            title="美人攻略影片信息"
                                        >
                                            根据快看APP作者TUTU的独家连载作品《一代灵后》改编。
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageSeo>
    )
}

export default Movie
