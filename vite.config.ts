import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    // IMPORTANT: custom domain -> keep "/"
    // If you ever deploy to username.github.io/repo-name, change to: base: "/<repo-name>/"
    base: "/",

    server: {
      host: "::",
      port: 8080,
    },
    build: {
      outDir: "dist", // (default, but explicit is nice)
    },
    plugins: [react(), isDev && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
