import React, { Fragment } from 'react'

const Test = () => {
    return (
        <div className='flex'>

        <div className={'border-shadow panel'} data-index="1" style={{width: "80%"}}>
            <div className="list">
                <div className="container-more">
                    <div className="left-section">
                        <span className="movie-list-title">电影 dsfasd</span>
                        <a
                            href="/index.php/vod/type/id/1.html"
                            className="movie-list-more"
                        >
                            Xem thêm
                            <span className="iconfont icon-right-line"></span>
                        </a>
                    </div>
                    <div className="right-section movie-list-subject-block">
                        <a
                            href="#"
                            className="tab-link active movie-list-subject"
                            data-tab="tab1"
                        >
                            子类1
                        </a>
                        <a
                            href="#"
                            className="tab-link  movie-list-subject"
                            data-tab="tab2"
                        >
                            子类2
                        </a>
                        <a
                            href="#"
                            className="tab-link  movie-list-subject"
                            data-tab="tab3"
                        >
                            子类3
                        </a>
                        <a
                            href="#"
                            className="tab-link  movie-list-subject"
                            data-tab="tab4"
                        >
                            子类4
                        </a>
                        <a
                            href="#"
                            className="tab-link  movie-list-subject"
                            data-tab="tab5"
                        >
                            子类5
                        </a>
                        <a
                            href="#"
                            className="tab-link  movie-list-subject"
                            data-tab="tab6"
                        >
                            子类6
                        </a>
                        <a
                            href="#"
                            className="tab-link  movie-list-subject"
                            data-tab="tab7"
                        >
                            子类7
                        </a>
                    </div>
                </div>
                <div className="movie-list-header">
                    <span className="movie-list-title">电视剧</span>
                    <a
                        href="/index.php/vod/type/id/2.html"
                        className="movie-list-more"
                    >
                        Xem thêm
                        <span className="iconfont icon-right-line"></span>
                    </a>
                </div>
                <div className="movie-list-subject-block">
                    <a
                        href="#"
                        className="tab-link movie-list-subject active"
                        data-tab="tab1"
                    >
                        子类8
                    </a>
                    <a
                        href="#"
                        className="tab-link movie-list-subject"
                        data-tab="tab2"
                    >
                        子类9
                    </a>
                    <a
                        href="#"
                        className="tab-link movie-list-subject"
                        data-tab="tab3"
                    >
                        子类10
                    </a>
                    <a
                        href="#"
                        className="tab-link movie-list-subject"
                        data-tab="tab4"
                    >
                        子类11
                    </a>
                </div>
                <div id="tab1" className="tab-content active">
                    <div className="movie-list-body flex">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <Fragment key={index}>
                                aaa
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Test
