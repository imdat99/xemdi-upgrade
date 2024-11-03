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
                    <a className="ecTop" onClick={scrollToTop}>
                        <i className="iconfont icon-shouqi" />
                    </a>
                    {menuList
                        .filter((i) => i.type == NavType.Nav)
                        .map((item, index) => (
                            <Link
                                key={index}
                                style={{
                                    fontSize: '1.25rem',
                                }}
                                to={item.link}
                                className={item.icon}
                            />
                        ))}
                </div>
                <a
                    onClick={handleSwitch}
                    title="菜单"
                    className="ec-lrmenukey active"
                >
                    <i className="iconfont icon-yingyong" />
                </a>
            </div>
        </>
    )
}

export default FooterScroll
