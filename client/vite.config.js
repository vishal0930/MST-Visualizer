import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // or 3000 if you prefer
    proxy: {
      "/api": {
        target: "http://localhost:8000", // your backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

