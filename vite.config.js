import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: '../server/public',
    },
    /*server: {
        proxy: {
            '/': {
                target: 'http://localhost:5000/',
                changeOrigin: true,
                secure: false,
                ws: true
            }
        }
    },*/
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    }
})