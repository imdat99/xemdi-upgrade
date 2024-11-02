import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
interface LinkPreloadProps extends LinkProps {
    onHover?: () => void
}
const LinkPreload = React.forwardRef<HTMLAnchorElement, LinkPreloadProps>(({onHover, ...props}, ref) => {
    const timer = React.useRef<number>();
    const handleMouseEnter = () => {
        if(!onHover) return;
        timer.current = window.setTimeout(onHover, 300)
    }
    const handleMouseLeave = () => {
        clearTimeout(timer.current)
    }
    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, [props])
  return (
    <Link {...props} ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onTouchStart={handleMouseEnter}/>
  )
})
LinkPreload.displayName = 'xemdi.Link'
export default LinkPreload