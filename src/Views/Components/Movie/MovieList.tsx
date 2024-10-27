import React, { Fragment } from 'react'
import MovieListItem from './MovieListItem'
import { MovieItem } from 'lib/client';

export interface MovieListProps {
    type?: 'panel' | 'card'
    header: React.ReactNode;
    items: MovieItem[]
}
const MovieList: React.FC<MovieListProps> = ({ type, header, items }) => {
    return (
        <div className={'border-shadow ' + (type || 'panel')} data-index="1">
            <div className="list">
                {header}
                {/* <div className="container-more">
                    <div className="left-section">
                        <span className="movie-list-title">电影</span>
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
                </div> */}
             
                {/* <div className="movie-list-subject-block">
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
                </div> */}
                <div className="tab-content active">
                    <div className="movie-list-body flex">
                        {items.map((item, index) => (
                            <Fragment key={index}>
                                <MovieListItem movieInfo={item}/>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieList
