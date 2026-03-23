# 个人博客

## 技术栈

- **通用**
  - typescript
  - @uiw/react-markdown-preview (markdown 预览)
  - react-icons (logo 图标)
  - tailwindcss
  - daisyui
  - @catppuccin/daisyui
- **前后端分离** (react-fastapi/)
  - 前端
    - react.js
    - react-dom
    - react-router-dom
  - **后端** (建议 Python 版本使用 3.12 以上)
    - fastapi
    - uvicorn
    - python-frontmatter
- **全栈** (next/)
  - next.js
  - gray-matter (markdown 解析)

## 项目启动

### 前后端分离

> react-fastapi 目录下

- 开发模式启动
  - 后端安装库: `pip install fastapi uvicorn python-frontmatter`
  - 前端安装库: `npm install` 或 `pnpm install`
  - 启动: `npm run dev` 或 `pnpm dev`
  - 访问: `http://localhost:5173`
- Docker 一键部署
  - 构建镜像: `docker build -t blog .`
  - 运行镜像: `docker run -d -p 80:80 blog`
  - 访问: `http://localhost`

### 全栈

> next 目录下

- 安装库: `npm install` 或 `pnpm install`
- 启动: `npm run dev` 或 `pnpm dev`
- 访问: `http://localhost:3000`

> 也可以执行`build`命令静态导出, 但需要静态服务器才能运行, `start`命令会启动 serve 在 3000 端口
