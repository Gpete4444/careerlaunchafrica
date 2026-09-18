import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cv: resolve(__dirname, "cv/index.html"),
        makeWord: resolve(__dirname, "cv/make-word.html"),
        saveProgress: resolve(__dirname, "cv/save-progress.html"),
      },
    },
  },
});
