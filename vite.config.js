import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: "/index.html",
    },
  },
  server: {
    historyApiFallback: true, // Ensures proper routing in development
  },
  base: "./", // Adjust if deploying to a subdirectory
});
