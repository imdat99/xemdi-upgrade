import { menuList, NavType } from 'lib/Constants'
import { scrollToTop } from 'lib/Utils'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterScroll = () => {
    const mobileRef = React.useRef<HTMLDivElement>(null)
    const handleSwitch = () => {
        mobileRef.current?.classList.toggle('ec-lrshow')
    }
    return (
        <>
            <ul className="fixed-nav">
                {menuList
                    .filter((i) => i.type == NavType.Nav)
                    .map((item, index) => (
                        <li
                            key={index}
                            title={item.name}
                            className='flex ecTop'
                            data-id={index + 1}
                        >
                            <Link
                                style={{
                                    fontSize: '1.25rem',
                                    color: 'var(--SUB-TITLE)',
                                }}
                                aria-label={item.name}
                                to={item.link}
                                className={[item.icon,"fixed-nav-content",(index == 0 ? 'first' : '')].join(" ")}
                            />
                        </li>
                    ))}
                <li
                    className="fixed-nav-content flex last ecTop"
                    onClick={scrollToTop}
                >
                    <span className="iconfont icon-shouqi"></span>
                </li>
            </ul>
            <div className="ec-footer_scroll">
                <div className="ec-lrmenu" ref={mobileRef}>
                    <div className="mobile-btn ecTop text-center" onClick={scrollToTop}>
                        <i className="iconfont icon-shouqi" />
                    </div>
                    {menuList
                        .filter((i) => i.type == NavType.Nav)
                        .map((item, index) => (
                            <Link
                                key={index}
                                style={{
                                    fontSize: '1.25rem',
                                }}
                                to={item.link}
                                aria-label={item.name}
                                className={item.icon}
                            />
                        ))}
                </div>
                <div
                    onClick={handleSwitch}
                    title="菜单"
                    className="mobile-btn ec-lrmenukey text-center active"
                >
                    <i className="iconfont icon-yingyong" />
                </div>
            </div>
        </>
    )
}

export default FooterScroll
