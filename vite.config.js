import { defineConfig} from "vite";

export default defineConfig({
    base: "./",
    build: {
        minify: "terser", // bug in kaboom, default doesn't work
    },
})