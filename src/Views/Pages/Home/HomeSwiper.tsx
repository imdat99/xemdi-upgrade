import { MovieItem } from 'lib/client'
import { ImageTypes } from 'lib/Constants'
import { buildWebpImageUrl } from 'lib/Utils'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface HomeSwiperProps {
    hotCarousel: MovieItem[]
}
const HomeSwiper: React.FC<HomeSwiperProps> = ({ hotCarousel }) => {
    return (
        <div className="banner-box swiper-container">
            <Swiper
                modules={[
                    Pagination,
                    Autoplay,
                    /* Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax, Lazy, EffectFade, EffectCube, EffectCoverflow, EffectFlip */
                ]}
                style={{ width: '100%', height: '100%' }}
                spaceBetween={50}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 3000 }}
                loop={!!hotCarousel.length}
                pagination={{ clickable: true, type: 'bullets' }}
            >
                {(hotCarousel || [{ thumb_url: '' }]).map((item, index) => (
                    <SwiperSlide key={item._id+index}>
                        <a
                            className="slide-img Lazy img-lazyload"
                            style={{
                                backgroundImage: `url(${buildWebpImageUrl(
                                    item.slug, ImageTypes.poster
                                )})`,
                                display: 'block',
                            }}
                        ></a>
                    </SwiperSlide>
                ))}

            </Swiper>
            {/* <div className="swiper-wrapper">
        <div className="swiper-slide Lazy">
        </div>
        <div className="swiper-slide Lazy">
          <a className="Lazy img-lazyload" style={{backgroundImage: 'url(https://s1.imagehub.cc/images/2024/03/22/2883f87d35d947c7f7992d382e0ab3fd.jpeg)', display: 'block'}} href="/index.php/vod/detail/id/794.html" />
        </div>
        <div className="swiper-slide Lazy">
        </div>
        <div className="swiper-slide Lazy">
          <a className="Lazy img-lazyload" style={{backgroundImage: 'url(https://tv.puui.qpic.cn/tv/0/mz_tv_image_frontend_0d72fa-0_918129916_1714101695148492_pic_1920x800/0?imageView2/2/w/1680&max_age=7776001)', display: 'block'}} href="/index.php/vod/detail/id/127.html" />
        </div>
      </div>
      <div className="swiper-pagination" /> */}
        </div>
    )
}

export default HomeSwiper
