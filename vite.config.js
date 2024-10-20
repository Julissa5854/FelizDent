// vite.config.js
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/SociableKIT_Widgets': {
        target: 'https://widgets.sociablekit.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/SociableKIT_Widgets/, ''),
      },
    },
  },
});
