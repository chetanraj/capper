import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react(), dts({ outputDir: "dist", insertTypesEntry: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "CapperUIReact",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom", "@capper-ui/tokens", "@phosphor-icons/react"],
    },
  },
});
