import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { ThemeProvider } from './Theme'

const Layout = () => {
    return (
        <ThemeProvider>
            <div className="page-content flex">
                <Header />
                <div className="container flex">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default Layout
