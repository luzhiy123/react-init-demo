## 项目介绍

采用vite 创建，使用mobx作为状态管理，默认示例用scss，支持less

### 目录结构

```bash
├─ 📁public               -- 静态文件输出
│  ├─ 📄favicon.ico
│  └─ 📄index.html
├─ 📁src
│  ├─ 📁router            -- 路由管理
│  ├─ 📁assets
│  ├─ 📁components        -- 全局通用组件
│  ├─ 📁components        -- 通用组件
│  ├─ 📁constans          -- 全局常量
│  ├─ 📁hooks             -- 全局hooks
│  ├─ 📁store             -- 全局状态管理
│  ├─ 📁typings           -- 类型重写
│  ├─ 📁layout            -- 统一布局
│  ├─ 📁pages             -- 所有页面
│  │  ├- 📁home           -- 页面示例
│  │  │  ├─ index.tsx
│  │  │  ├─ home-store.tsx      -- 局部状态管理
│  │  │  └─ index.scss/index.less
│  │  └─ 📁user                         -- 业务相关页面示例
│  │      ├─ 📁components               -- user逻辑下通用组件
│  │      ├─ 📁 ...                     -- 只在该业务下使用的多页面constans、hooks、utils等
│  │      ├─ 📁table                    -- user下的列表页面
│  │      ├─  ├─ 📄index.tsx
│  │      ├─  ├─ 📄table-store.tsx
│  │      ├─  └─ 📄index.scss/index.less
│  │      └─ 📁form                      -- user下的表单页面
│  │          ├─ 📄index.tsx
│  │          ├─ 📄form-store.tsx
│  │          └─ 📄index.scss/index.less
│  ├─ 📁utils             -- 全局通用方法
│  ├─ 📄app.less
│  ├─ 📄app.tsx
│  └─ 📄main.tsx
├─ 📄.babelrc
├─ 📄.eslintignore
├─ 📄.eslintrc.js
├─ 📄.gitignore
├─ 📄package.json
├─ 📄tsconfig.json
```
