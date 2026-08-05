import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  root: "src/site",
  plugins: [react()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      ...(command === "serve"
        ? {
            "@capper/react": new URL("../react/src/index.ts", import.meta.url)
              .pathname,
          }
        : {}),
    },
  },
  optimizeDeps: {
    exclude: ["@capper/react", "@capper/tokens"],
  },
  server: {
    port: 5173,
    fs: {
      allow: [
        new URL(".", import.meta.url).pathname,
        new URL("../react", import.meta.url).pathname,
        new URL("../tokens", import.meta.url).pathname,
      ],
    },
  },
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
  },
}));
