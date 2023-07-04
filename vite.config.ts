import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: "/src",
      assets: "/assets",
      components: "/src/components",
      contexts: "/contexts",
      env: "/env",
      layouts: "/layouts",
      pages: "pages",
      services: "services",
      theme: "theme",
      types: "/src/types",
      utils: "utils",
    },
  },
});
