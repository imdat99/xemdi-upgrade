const Html: React.FC<React.PropsWithChildren> = ({ children }) => {
    // inject vite refresh script to avoid "React refresh preamble was not loaded"

    return (
        <body>
            <div id="root">{children}</div>
        </body>
    )
}

export default Html
