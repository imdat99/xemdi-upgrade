import React, { Suspense } from 'react'

type AppSuspenseProps<T extends React.FC<any>> = {
    [key in keyof React.ComponentProps<T>]: React.ComponentProps<T>[keyof React.ComponentProps<T>]
} & {
    lazyComponent: React.LazyExoticComponent<T>
}

const AppSuspense = <T extends React.FC<any>>({
    lazyComponent,
    ...componentProps
}: AppSuspenseProps<T>) => {
    return (
        <Suspense fallback="loading...">
            {React.createElement(lazyComponent, componentProps as any)}
        </Suspense>
    )
}

export default React.memo(AppSuspense)
