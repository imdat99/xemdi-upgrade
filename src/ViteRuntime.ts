import { createServer, createViteRuntime } from "vite";

export const server = await createServer({
  configFile: "./vite.config.ts",
  root: process.cwd(),
  server: {
      middlewareMode: true,
      hmr: true,
  },
  appType: 'custom',
});

export const runtime = await createViteRuntime(server);