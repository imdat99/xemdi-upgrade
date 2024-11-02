import React from 'react'

const Falback = () => {
    return (
        <div className="movie-list-body2 flex">
            {Array(5)
                .fill({})
                .map((_, index) => (
                    <div key={index} className="movie-list-item">
                        <div className="movie-post-wrapper">
                            <div
                                className="movie-post-lazyload line h-100 Lazy"
                                data-original=""
                                style={{
                                    backgroundImage: `url('/images/img-bj.png')`,
                                }}
                            />
                        </div>
                        <div className="movie-info">
                            <div className="movie-title txtHide line"></div>
                            <div className="movie-sub txtHide line short mt-1"></div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Falback
