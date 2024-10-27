// import type * as ex from 'express'
import { PassThrough } from "node:stream";
import ReactDOMServer from 'react-dom/server';
import {
    createStaticHandler,
    createStaticRouter,
    StaticRouterProvider,
} from 'react-router-dom/server';
import routes from './router';
// import { ErrorBoundary } from './views/components/Errorboundary'
import { EventHandlerRequest, getRequestProtocol, H3Event, readBody, setResponseHeader } from 'h3';
import Html from './Views/Components/Html';
import { storageThemeKey } from './lib/Constants';
import { HelmetServerState, HelmetProvider } from "react-helmet-async";
import { minifyJavaScript } from "./lib/Utils";

export async function render(
    event: H3Event<EventHandlerRequest>,
    styles: string[],
    listScript: string[]
) {
    const { req } = event.node
    const { query, dataRoutes } = createStaticHandler(routes, {
        future: {
            v7_throwAbortReason: true,
        },
    })

    const remixRequest = await createFetchRequest(event)
    const context = await query(remixRequest)

    if (context instanceof Response) {
        throw context
    }
    const router = createStaticRouter(dataRoutes, context)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const helmetContext: { helmet: HelmetServerState } = { helmet: {} as any }

    const cookies: Record<string, string> =
        req.headers.cookie
            ?.split('; ')
            .reduce(
                (acc, cur) => ({
                    ...acc,
                    [cur.split('=')[0]]: cur.split('=')[1],
                }),
                {}
            ) || {}

    // const ggAnalytics = import.meta.env.DEV ? '' : `<script async src="https://www.googletagmanager.com/gtag/js?id=G-JHH53M709Q"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-JHH53M709Q');</script>`
    const fastRefresh = import.meta.env.DEV ? `<script type="module" src="/@vite/client"></script><script type="module" src="/src/refresh-hack.js"></script>` : ''
    const scripts = import.meta.env.PROD ? listScript.map((url) => `<link rel="preload" href="${url}" as="script" crossorigin="anonymous" />`).join('') : "";
    const styleStr = styles.map((url) => `<link rel="stylesheet" href="${url}" /><link rel="preload" href="${url}" as="style"/>`).join('');
    const header =
        `<!DOCTYPE html>
                <html lang="en" xemdi-theme="${cookies[storageThemeKey]}">
                <head>
                    <meta charset="utf-8" />
                    <link rel="icon" href="favicon.ico" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="application-name" content="MOVIE Xemdi" />
                    <meta name="author" content="Xemdi.fun" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
                    <link rel="manifest" href="/site.webmanifest">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />`
        + styleStr
        + fastRefresh + scripts
        +
        Object.values(helmetContext.helmet).map((value) => value.toString()).filter(Boolean).join('') +
        '</head>';

    // const stream = new ReadableStream();
    const body = new PassThrough();
    const { pipe } = ReactDOMServer.renderToPipeableStream(
        <Html>
            <HelmetProvider context={helmetContext}>
                <StaticRouterProvider
                    router={router}
                    context={context}
                    nonce="the-nonce"
                />
            </HelmetProvider>
        </Html>,
        {
            onShellReady() {
                body.write(minifyJavaScript(header));
                pipe(body);
                body.end('</html>');
            },
            bootstrapModules: listScript.filter((s) => s.includes('main')),
        }
    )
    setResponseHeader(event, 'content-type', 'text/html');
    return body;
}

async function createFetchRequest(event: H3Event<EventHandlerRequest>): Promise<Request> {
    const protocol = getRequestProtocol(event);
    const req = event.node.req
    const origin = `${protocol}://${req.headers.host}`;

    const url = new URL(req.headers.origin || req.url!, origin)
    // const controller = new AbortController()
    // req.on('close', () => {
    //     try {
    //         controller.abort()
    //     } catch (error) {
    //         console.error(error)
    //     }
    // })

    const headers = new Headers()

    for (const [key, values] of Object.entries(req.headers)) {
        if (values) {
            if (Array.isArray(values)) {
                for (const value of values) {
                    headers.append(key, value)
                }
            } else {
                headers.set(key, values)
            }
        }
    }

    const init: RequestInit = {
        method: req.method,
        headers,
        // signal: controller.signal,
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
        await readBody(event).then((body) => {
            init.body = body;
        })
    }

    return new Request(url.href, init)
}
