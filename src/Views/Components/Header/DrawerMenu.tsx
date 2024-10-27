import { menuList } from 'lib/Constants'
import React, { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

interface DrawerMenuProps extends PropsWithChildren {
    visible: boolean
    onClose: () => void
}
const DrawerMenu: React.FC<DrawerMenuProps> = React.memo(({
    visible,
    onClose
}) => {
    const [className, setclassName] = React.useState("")
    const [show, setShow] = React.useState(false)
    React.useEffect(() => {
            setclassName(visible ? "bm-menu-wrap bm-list-right" : "bm-menu-wrap")
            const timer = setTimeout(() => {
                setShow(visible)
            }, 200)
            return () => {
                clearTimeout(timer)
            }
    }, [visible])
    if (!(show || visible)) return null
    return ReactDOM.createPortal(
        <div>
            <div className="bm-overlay" onClick={onClose}/>
            <div className={className}>
                <div className="bm-menu">
                    <nav className="bm-item-list">
                        {
                            menuList.map((item, index) => (
                                <Link to={item.link} className="bm-item" key={index} >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </nav>
                </div>
                <span className="iconfont icon-guanbi" onClick={onClose} />
            </div>
        </div>,
        document.body
    )
})

export default DrawerMenu
