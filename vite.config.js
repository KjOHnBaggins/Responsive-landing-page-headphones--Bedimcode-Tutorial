import { defineConfig } from "vite";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    open: "./index.html",
    watch: {
      ignored: ["!**/node_modules/**"],
    },
  },
  preview: {
    port: 8080,
    strictPort: true,
    open: "./index.html",
  },
});
