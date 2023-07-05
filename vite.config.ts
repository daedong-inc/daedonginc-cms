import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      constants: "/src/constants",
      contexts: "/src/contexts",
      env: "/src/env",
      features: "/src/features",
      layouts: "/src/layouts",
      pages: "/src/pages",
      services: "/src/services",
      theme: "/src/theme",
      types: "/src/types",
      utils: "/src/utils",
    },
  },
});
