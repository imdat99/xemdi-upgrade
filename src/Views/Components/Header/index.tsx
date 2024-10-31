import React from 'react'
import { useTheme } from '../Theme'
import SafeRender from '../SafeRender'
import DrawerMenu from './DrawerMenu'
import { Link } from 'react-router-dom'
import { Theme } from 'lib/Types'

const Header = () => {
    const [theme, setTheme] = useTheme()
    const [visible, setVisible] = React.useState(false);
    const handleToggle = React.useCallback(() => {
        setVisible((prev) => !prev)
    }, [])
    const handleToggletheme = React.useCallback(() => {
        setTheme((prev: Theme) => (prev === 'dark' ? 'light' : 'dark'))
    }, [])
    return (
        <>
            <div className="header header-top relative">
                <div className="header-box flex">
                    <div className="logo-wrapper">
                        <Link to="/" className="logo">
                             <img src="/logo.webp" alt='xemdi-logo'/>
                        </Link>
                    </div>
                    <form
                        className="search-box flex"
                        name="search"
                        method="get"
                        action="/index.php/vod/search.html"
                    >
                        <input
                            type="text"
                            autoComplete="off"
                            name="wd"
                            placeholder="Nhập từ khóa tìm kiếm."
                            className="search-field"
                        />
                        <div className="suggestions">
                            <div className="history" />
                            <div className="top">
                                <div className="movie-list-header">
                                    <span>热门搜索</span>
                                </div>
                                <a
                                    className="movie-list-subject search"
                                    href="/index.php/vod/search/wd/%E4%B9%A1%E6%9D%91%E7%88%B1%E6%83%8515.html"
                                >
                                    <span className="iconfont icon-remen-fill" />
                                    乡村爱情15
                                </a>
                                <a
                                    className="movie-list-subject search"
                                    href="/index.php/vod/search/wd/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85.html"
                                >
                                    <span className="iconfont icon-remen-fill" />
                                    速度与激情
                                </a>
                                <a
                                    className="movie-list-subject search"
                                    href="/index.php/vod/search/wd/%E6%B1%AA%E6%B1%AA%E7%AB%8B%E5%8A%9F%E9%98%9F+%E7%AC%AC%E5%85%AD%E5%AD%A3.html"
                                >
                                    <span className="iconfont icon-remen-fill" />
                                    汪汪立功队 第六季
                                </a>
                            </div>
                        </div>
                        <button className="search-button">
                            <span className="iconfont icon-sousuo" />
                        </button>
                    </form>
                    <ul className="navs flex">
                        <li>
                            <div className="nav history-box">
                                <div className="nav-b flex">
                                    <span className="iconfont icon-lishi" />
                                </div>
                                <div className="shadow history_box animated fadeInUp" />
                            </div>
                        </li>
                        <li>
                            <div className="nav">
                                    <SafeRender className="nav-b flex">
                                      <span className={(theme === 'light' ? 'icon-yueliang' : 'icon-bairi')+" skin iconfont"}
                                        onClick={handleToggletheme} />
                                      </SafeRender>
                                </div>
                        </li>
                        <li>
                            <div className="nav">
                                <div className="nav-b flex">
                                    <span className="iconfont icon-caidan" onClick={handleToggle}/>
                                    <DrawerMenu visible={visible} onClose={handleToggle} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='absolute h-100 w-100 top-0 left-0 backdrop-blur'></div>
            </div>
        </>
    )
}

export default Header
