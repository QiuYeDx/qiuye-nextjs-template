# 🍂 秋夜 Next.js 模板

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

基于 Next.js 15 构建的现代化、功能完整的 React 模板项目。集成了最新的技术栈和丰富的 UI 组件库，遵循最佳实践，让你的项目开发更加高效、优雅。

## ✨ 特性

- 🚀 **最新技术栈**: Next.js 15 + React 19 + TypeScript + Tailwind CSS 4
- 🎨 **丰富的UI组件**: 基于 shadcn/ui 的 30+ 精美组件
- 🌙 **主题切换**: 内置深色/浅色主题，支持系统主题自动跟随
- 📱 **响应式设计**: 完美适配各种设备尺寸
- ⚡ **高性能**: 支持 Turbopack，构建和开发体验极佳
- 🎭 **动画效果**: 集成 Motion 动画库，丰富的交互体验
- 🛠️ **最佳实践**: 代码规范、类型安全、组件化开发
- 🌍 **国际化支持**: 集成 i18next，轻松实现多语言
- 📦 **状态管理**: 集成 Zustand 轻量级状态管理
- 🎯 **开发体验**: 完整的开发工具链和 ESLint 配置

## 🛠️ 技术栈

### 核心框架

- **Next.js 15** - React 全栈框架
- **React 19** - 用户界面构建库
- **TypeScript 5** - 类型安全的 JavaScript

### 样式和UI

- **Tailwind CSS 4** - 实用优先的 CSS 框架
- **shadcn/ui** - 高质量的 React 组件库
- **Radix UI** - 无障碍的低级 UI 原语
- **Lucide React** - 精美的图标库

### 动画和交互

- **Motion** - 强大的动画库
- **React Spring** - 基于 Spring 物理的动画

### 状态管理和工具

- **Zustand** - 轻量级状态管理
- **ahooks** - 实用的 React Hooks 库
- **React Use** - 常用 React Hooks 集合

### 开发工具

- **ESLint** - 代码检查
- **Prettier** - 代码格式化
- **Turbopack** - 极速构建工具

## 🚀 快速开始

### 环境要求

- Node.js >= 20.0 (推荐，shadcn/ui 要求)，开发最低 >= 18.17
- pnpm >= 8.0 (推荐) 或 npm/yarn

### 安装

1. **克隆仓库**

   ```bash
   git clone https://github.com/your-username/qiuye-nextjs-template.git
   cd qiuye-nextjs-template
   ```

2. **安装依赖**

   ```bash
   pnpm install
   # 或
   npm install
   # 或
   yarn install
   ```

3. **启动开发服务器**

   ```bash
   pnpm dev
   # 或
   npm run dev
   # 或
   yarn dev
   ```

4. **访问应用**

   打开 [http://localhost:3000](http://localhost:3000) 查看应用

## 📝 可用脚本

```bash
# 开发模式（使用 Turbopack）
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 静态文件服务（用于静态导出）
pnpm serve

# 代码检查
pnpm lint
```

### 静态导出模式

如果在 `next.config.ts` 中配置了 `output: 'export'`，则不能使用 `pnpm start`，应该按以下步骤操作：

```bash
# 1. 构建静态文件
pnpm build

# 2. 启动静态文件服务器
pnpm serve
```

> **注意**: 静态导出模式会将应用构建为纯静态文件，输出到 `out` 目录，适用于静态托管服务如 GitHub Pages、Netlify 等。

## 📁 项目结构

```text
qiuye-nextjs-template/
├── app/                    # Next.js 应用目录
│   ├── favicon.ico
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页
├── components/            # React 组件
│   ├── ui/               # UI 基础组件
│   ├── app-sidebar.tsx   # 应用侧边栏
│   ├── header.tsx        # 头部组件
│   ├── theme-provider.tsx # 主题提供者
│   └── theme-toggle.tsx  # 主题切换
├── hooks/                # 自定义 Hooks
├── lib/                  # 工具函数
├── public/               # 静态资源
├── components.json       # shadcn/ui 配置
├── next.config.ts        # Next.js 配置
├── tailwind.config.js    # Tailwind CSS 配置
└── tsconfig.json         # TypeScript 配置
```

## 🎨 UI 组件

模板包含了 30+ 精心设计的 UI 组件：

- **布局组件**: Card, Sheet, Sidebar, Resizable
- **导航组件**: Navigation Menu, Breadcrumb, Pagination
- **表单组件**: Button, Input, Select, Textarea, Switch
- **反馈组件**: Alert Dialog, Toast, Progress, Skeleton
- **数据展示**: Table, Avatar, Badge, Tooltip
- **其他**: Tabs, Dropdown Menu, Popover, Slider 等

所有组件都支持主题切换，具有完整的类型定义和无障碍支持。

## 🌙 主题系统

内置完整的主题系统：

- 🌞 浅色主题
- 🌙 深色主题  
- 🔄 系统主题自动跟随
- 🎨 可自定义主题色彩

使用 `next-themes` 实现，支持 SSR 无闪烁切换。

## 📦 部署

### Vercel 部署 (推荐)

最简单的部署方式是使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/qiuye-nextjs-template)

### 静态导出部署

如果需要部署到静态托管服务（如 GitHub Pages、Netlify 静态托管等），可以使用静态导出模式：

1. **配置静态导出**

   在 `next.config.ts` 中添加：

   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   ```

2. **构建和部署**

   ```bash
   # 构建静态文件
   pnpm build
   
   # 本地预览（可选）
   pnpm serve
   
   # 部署 out 目录到静态托管服务
   ```

### 其他部署选项

- **Netlify**: 支持静态导出和服务器端渲染
- **Railway**: 简单的全栈部署
- **Docker**: 容器化部署
- **自托管**: 使用 `pnpm build` 和 `pnpm start`

详细部署指南请参考 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。

## 🤝 贡献指南

我们欢迎所有形式的贡献！请阅读我们的贡献指南：

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📜 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React 全栈框架
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Radix UI](https://www.radix-ui.com/) - 底层 UI 组件
- [Lucide](https://lucide.dev/) - 图标库

## 📞 支持

如果你喜欢这个项目，请给它一个 ⭐️！

有问题或建议？欢迎：

- 创建 [Issue](https://github.com/your-username/qiuye-nextjs-template/issues)
- 提交 [Pull Request](https://github.com/your-username/qiuye-nextjs-template/pulls)
- 加入我们的 [讨论](https://github.com/your-username/qiuye-nextjs-template/discussions)

---

<div align="center">
  Made with ❤️ by the Qiuye Team
</div>
