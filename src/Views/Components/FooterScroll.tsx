import React from 'react'

const FooterScroll = () => {
    return (
        <>
            <ul className="fixed-nav">
                <li className="fixed-nav-content flex first ecTop" data-id="1">
                    电影
                </li>
                <li className="fixed-nav-content flex ecTop" data-id="2">
                    电视剧
                </li>

                <li className="fixed-nav-content flex last ecTop">
                    <span className="iconfont icon-shouqi"></span>
                </li>
            </ul>
            <div className="ec-footer_scroll">
                <div className="ec-lrmenu" id="switch">
                    <a href="#" className="ecTop">
                        <i className="iconfont icon-shouqi" />
                    </a>
                    <a href="/index.php/gbook/index.html" title="留言">
                        <i className="iconfont icon-fankuixuanzhong" />
                    </a>
                    <a href="#" title="主题切换">
                        <i className="skin iconfont icon-yueliang" />
                    </a>
                </div>
                <a
                    href="#"
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
