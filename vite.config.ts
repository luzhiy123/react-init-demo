import react from '@vitejs/plugin-react';
import path from 'path';
import { ConfigEnv, UserConfigExport } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default ({}: ConfigEnv): UserConfigExport => ({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8000,
    proxy: {
      '^/api': {
        target: 'http://test.host.com',
        changeOrigin: true,
      },
    },
  },
});
