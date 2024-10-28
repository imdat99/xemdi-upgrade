import path from "path"
import { UserConfig, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import tsConfigPaths from 'vite-tsconfig-paths';
import babel from "vite-plugin-babel";
// import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    if (command === 'build') {
        return {
            ...devConfig,
            ssr: {
                optimizeDeps: {
                    include: ["lodash"]
                  },
                noExternal: ['react-helmet-async', 'lodash', 'devtools-detector'],
                // Add your external dependencies here for the SSR build, otherwise,
                // the bundled won't have enough libraries to render noExternal:
                // [/@\w+\/*/],
            },
        }
    }

    return devConfig
})

const devConfig: UserConfig = {
    plugins: [
        react(),
        tsConfigPaths(),
        babel({
            filter: /\.[jt]sx?$/,
            babelConfig: {
              presets: ["@babel/preset-typescript"], // if you use TypeScript
              plugins: [
                ["babel-plugin-react-compiler", {
                    target: "18"
                }],
              ],
            },
          }),
        // federation({

        // }),
        // cssInjectedByJsPlugin()
    ],
    server: {
        hmr: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        terserOptions: {
            format: {
              comments: false
            }
        },
        rollupOptions: {
            plugins: [{
                name: "remove-router-version",
                async transform(code) {
                    return code.replace("window.__reactRouterVersion", "window.__reactRouterVersion=\"https://dat09.dev\";window.__movie")
                    .replace("%c ArtPlayer %c", "%c XemĐi %c")
                    .replace("https://artplayer.org", "https://xemdi.fun")
                }
              }],
            input: './src/main.tsx',
            output: {
                manualChunks: undefined,
                // entryFileNames: `assets/[hash].js`,
                chunkFileNames: `assets/[hash].js`,
                // assetFileNames: `assets/[name].[ext]`
                // assetFileNames: `assets/[hash].[ext]`
            },

        },
        chunkSizeWarningLimit: 512,
        target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari11'],
    },
    esbuild: { legalComments: 'none' },
}
