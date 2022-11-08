import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import laravel from "vite-plugin-laravel";

export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),

        quasar(),
        laravel({
            postcss: [autoprefixer()],
        }),
    ],
});
