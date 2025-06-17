import react from '@vitejs/plugin-react';
import path from 'path';
import { ConfigEnv, UserConfigExport } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

export default ({ command }: ConfigEnv): UserConfigExport => ({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
      enable: command === 'serve',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 自动注入全局变量
        additionalData: "@use '@/styles/variables' as *;",
        // 配置 Sass 的根路径查找
        loadPaths: ['./src'],
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
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
