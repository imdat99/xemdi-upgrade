import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    matchRoutes,
    RouterProvider,
} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import router from './router'
import "assets/test.css"
import "assets/index.css"
import "assets/icon.css"

const render = () => {
    ReactDOM.hydrateRoot(
        document.getElementById('root') as HTMLElement,
        <HelmetProvider>
            <RouterProvider
                router={createBrowserRouter(router)}
                fallbackElement={<div>Loading...</div>}
            />
        </HelmetProvider>
    )
}
// Determine if any of the initial routes are lazy
const lazyMatches = matchRoutes(router, window.location)?.filter(
    (m) => m.route.lazy
)
// Load the lazy matches and update the routes before creating your router
// so we can hydrate the SSR-rendered content synchronously

if (typeof window === 'object' && lazyMatches && lazyMatches?.length > 0) {
    Promise.all(
        lazyMatches.map(async (m) => {
            if (m.route.lazy) {
                const routeModule = await m.route.lazy()
                Object.assign(m.route, {
                    ...routeModule,
                    lazy: undefined,
                })
            }
        })
    ).then(render)
}
if (lazyMatches?.length === 0) {
    render()
}
