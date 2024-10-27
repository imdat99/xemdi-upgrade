import { defaultTheme, storageThemeKey } from "lib/Constants"
import { Theme } from "lib/Types"
import { getCookie, setCookie } from "lib/Utils"
import React, { PropsWithChildren } from "react"

export type ThemeContextType = [Theme, React.Dispatch<React.SetStateAction<Theme>>]
const ThemeContext = React.createContext<ThemeContextType>([defaultTheme, () => { }])
export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return React.useMemo(() => context, [context])
};

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const context = React.useState<Theme>((getCookie(storageThemeKey) as Theme) || defaultTheme)
    React.useEffect(() => {
        setCookie(storageThemeKey, context[0])
        const root = window.document.documentElement
        root.attributes.removeNamedItem('xemdi-theme')
        root.attributes.setNamedItem(document.createAttribute('xemdi-theme'))
        root.setAttribute('xemdi-theme', context[0])
    }, [context])
    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    )
}
