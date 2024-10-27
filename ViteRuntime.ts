import { createServer, createViteRuntime } from "vite";

export const server = await createServer({
  configFile: "./vite.config.ts",
});

export const runtime = await createViteRuntime(server);