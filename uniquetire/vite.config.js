import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()], // Correctly closed the plugins array
  resolve: {
    alias: {
      "@": "/src", // Alias for cleaner imports
    },
  },
});
