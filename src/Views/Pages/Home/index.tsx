import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import HomeSwiper from './HomeSwiper'
import { menuList } from 'lib/Constants'
import { Link } from 'react-router-dom'
import MovieList from 'Views/Components/Movie/MovieList'
import useSWR from 'swr'
import client from 'lib/client'
import React from 'react'
import PageSeo from 'Views/Components/PageSeo'
import TopLoading from 'Views/Components/TopLoading'
import FooterScroll from 'Views/Components/FooterScroll'

const Home = () => {
    const { data, isLoading } = useSWR('home', client.v1ApiHome, {
        revalidateIfStale: false
    })
    const hotCarousel = React.useMemo(
        () => (data?.data.items ? data.data.items.slice(0, 5) : []),
        [data]
    )
    const [part1, part2] = React.useMemo(() => {
        const middleIndex = Math.ceil((data?.data?.items.length || 0) / 2); 
        return [
            data?.data.items.slice(0, middleIndex),
            data?.data.items.slice(middleIndex)
        ]
    }, [data])
    return (
        <PageSeo {...(data?.data as React.ComponentProps<typeof PageSeo>)}>
            <TopLoading loading={isLoading} />
            <div className="mobile-main">
            <div className="head flex">
                <div className="banner">
                    <HomeSwiper hotCarousel={hotCarousel}/>
                </div>
                <div className="head-guide">
                    <div className="head-promotion">
                        <div className="left">
                            <a href="https://www.shoutu.cn" target="_blank">
                                <img
                                    width="100%"
                                    height="100%"
                                    src="/images/imagead.png"
                                />
                            </a>
                        </div>
                        <div className="right">
                            <a href="https://www.shoutu.cn" target="_blank">
                                <img
                                    width="100%"
                                    height="100%"
                                    src="/images/imagead.png"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="home-box border-shadow">
                        <div className="home-nav flex">
                            {menuList.map((item, index) => (
                                <div className="nav flex" key={index}>
                                    <Link to={item.link} className="nav-block">
                                         <i style={{
                                           fontSize: '2.5rem', 
                                         }} className={item.icon}></i>
                                        <div className="nav-title">
                                            {item.name}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <MovieList header={
                <div className="movie-list-header">
                   <span className="movie-list-title">
                   <i className="iconfont2 hl-icon-dianying-fill mr-1 gradient text-transparent" />
                    Phim mới cập nhật</span>
                   <Link
                       to="/index.php/vod/type/id/2.html"
                       className="movie-list-more"
                   >
                       Xem thêm
                       <span className="iconfont icon-right-line"></span>
                   </Link>
               </div>
            }
                items={part1 || []}
            />
            <MovieList header={
                <div className="movie-list-header">
                   <span className="movie-list-title">
                   <i className="iconfont2 hl-icon-huo mr-1 gradient text-transparent" />
                    Dành cho bạn</span>
               </div>
            }
                items={part2 || []}
            />
        </div>
        <FooterScroll />

        </PageSeo>
        
    )
}

export default Home
