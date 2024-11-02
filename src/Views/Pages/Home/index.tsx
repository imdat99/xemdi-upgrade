import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { menuList } from 'lib/Constants'
import { Link } from 'react-router-dom'
import MovieList from 'Views/Components/Movie/MovieList'
import useSWR from 'swr'
import client from 'lib/client'
import React, { lazy } from 'react'
import PageSeo from 'Views/Components/PageSeo'
import TopLoading from 'Views/Components/TopLoading'
import FooterScroll from 'Views/Components/FooterScroll'
import AppSuspense from 'Views/Components/AppSuspense'
import { ClientOnly } from 'Views/Components/SafeRender'
import useLazyImg from 'Hooks/useLazyImg'
const HomeSwiper = lazy(() => import("./HomeSwiper"));

const Home = () => {
    const { data, isLoading } = useSWR('home', client.v1ApiHome)
    const hotCarousel = React.useMemo(
        () => (data?.data.items ? data.data.items.slice(0, 5) : []),
        [data]
    )
    const imgRef = useLazyImg(hotCarousel.map((item) => item.thumb_url))
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
                <div className="banner flex-shrink-0">
                    <ClientOnly>
                        <AppSuspense fallback={<Fallback/>} lazyComponent={HomeSwiper} hotCarousel={hotCarousel} />
                    </ClientOnly>
                </div>
                <div className="head-guide">
                    <div className="head-promotion" ref={imgRef}>
                        <div className="left">
                            <a href="https://xemdi.app/" className='block Lazy' target="_blank" style={{
                            backgroundImage: "url('/images/img-bj.png')"
                        }}>
                                <img
                                    lazy-src="/images/imagead.png"
                                    className='h-100 w-100 lazy-img'
                                    alt='qc1'
                                    width="351px"
                                    height="217px"
                                    src="/images/1px.png"
                                />
                            </a>
                        </div>
                        <div className="right">
                            <a href="https://xemdi.fun/" className='block Lazy' target="_blank" style={{
                            backgroundImage: "url('/images/img-bj.png')"
                        }}>
                                <img
                                    lazy-src="/images/imagead.png"
                                    className='h-100 w-100 lazy-img'
                                    alt='qc2'
                                    width="351px"
                                    height="217px"
                                    src='/images/1px.png'
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

const Fallback = React.memo(() => (
    <div className="swiper-slide w-100 h-100">
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white sping"></div>
    </div>
))
export default Home
