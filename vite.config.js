import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// const env = loadEnv("all", process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    proxy: {
      "/api": {
        // target: env.VITE_API_URL,
        target: "http://43.218.88.7:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace("^/api/", ""),
      },
    },
  },
});
