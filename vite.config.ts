import react from '@vitejs/plugin-react'
import path from 'path'
import { ConfigEnv, UserConfigExport } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({}: ConfigEnv): UserConfigExport => ({
  build: {
    sourcemap: true, // 生成完整的 Sourcemap 文件（.map）
    rollupOptions: {
      external: ['ag-grid-community'] // 防止 Vite 打包该库
    }
  },
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
      enable: true
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 自动注入全局变量（可选）
        additionalData: "@use '@/styles/variables' as *;",
        // 配置 Sass 的根路径查找
        loadPaths: ['./src']
      }
    }
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: ''
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  server: {
    port: 8000,
    proxy: {
      '^/api': {
        target: 'http://test.host.com',
        changeOrigin: true
      }
    }
  }
})
