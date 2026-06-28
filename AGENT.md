# AI Agent 开发指南

本文件用于约束 AI Agent 在本仓库内的开发行为。本仓库是一个纯净的 Next.js 启动模板，不是业务系统或某个特定领域的 starter kit。

## 项目定位

- 项目名称：Qiuye Next.js Template
- 目标：作为创建任意新 Next.js 项目的初始化脚手架代码来源。
- 核心技术栈：Next.js 15、React 19、TypeScript 5、Tailwind CSS 4、shadcn/ui、Radix UI、next-themes、lucide-react、Motion、pnpm 8.7.0。
- 默认能力：基础 App Router、主题系统、少量通用 UI、基础 Header/Footer、模板首页和 About 示例。

## 最高优先级规则

- 保持模板纯净。不要默认加入博客、文档站、图库、后台、CMS、认证、数据库、评论、统计、上传、支付、地图、图表、Markdown、MDX、3D 或 Canvas 特效。
- 新增依赖前，必须确认默认模板代码会直接使用它。否则写入 README 的可选推荐，不要放进 `package.json`。
- `components/ui/` 只能放 shadcn/ui 组件，不放自研组件和业务组件。
- `components/qiuye-ui/` 只能放通用、轻量、无业务语义的 qiuye-ui 组件。
- 默认使用 Server Component。只有需要 hooks、浏览器 API、主题运行态、动画交互时才使用 `"use client"`。
- 不复制 `/Users/qiuyedx/Documents/Github/qiuyedx-blog` 中的业务文件、个人内容、视觉特效、Markdown 系统、Reference Gallery、OSS 能力或 API。
- 回答结束前必须关闭本轮启动的前端服务进程。

## 目录职责

```text
app/                  Next.js App Router 页面和布局
components/ui/        shadcn/ui 基础组件
components/qiuye-ui/  通用 qiuye-ui 组件
components/layout/    SiteHeader、SiteFooter 等通用布局
components/providers/ AppProviders 等全局 Provider 组合
components/           主题组件和兼容 re-export
config/               siteConfig 等模板级配置
hooks/                通用 React hooks
lib/                  通用工具函数
public/               静态资源
docs/开发设计文档/    大功能设计、执行计划和实施记录
```

不要在没有明确需求时创建 `content/`、`features/`、`server/`、`db/`、`scripts/` 等业务目录。

## 组件规则

- shadcn/ui 组件保持原子、可替换、无业务语义。
- 自研组件不要放入 `components/ui/`。
- 页面级业务组合优先放到对应业务目录；本模板默认不应新增业务组合。
- 图标优先使用 `lucide-react`。
- Button 内部图标和文字之间不要手写 `mr-2` / `ml-2`，优先使用组件已有 gap 或父级 gap。
- UI 文案保持通用，不写个人品牌、博客栏目、摄影、AI 内容站等领域文案。

## Next.js 规则

- `app/layout.tsx` 保持薄，只负责字体、metadata、全局 CSS、Provider 和基础 Shell 组合。
- 不在 Client Component 中 import `fs`、`path`、服务端 SDK、私密环境变量或其他服务端专用能力。
- 不在 `next.config.ts` 默认加入远程图片通配域名、静态导出、serverExternalPackages 或个人局域网 allowedDevOrigins。
- 静态导出、远程图片、分析、服务端包等配置应作为 README 片段，由具体项目按需添加。

## 样式规则

- Tailwind CSS 4 使用 CSS-first 配置。
- 全局主题变量集中在 `app/globals.css`。
- 保留 shadcn/ui token、dark variant、View Transition 主题切换样式和 Dialog/Sheet 滚动锁修复。
- 不加入 QiuVision 个人站品牌色、大型 keyframes、复杂视觉背景或页面特效。
- 保持页面示例易删除、易替换、无强视觉绑定。

## 依赖规则

默认保留依赖应服务于模板基础能力，例如：

- Next.js / React / TypeScript
- Tailwind CSS / PostCSS
- shadcn/ui 所需 Radix 包
- `next-themes`
- `lucide-react`
- `motion`
- `sonner`
- `vaul`
- `clsx`
- `tailwind-merge`
- `class-variance-authority`

以下能力不要默认加入模板依赖：

- Markdown / MDX：`react-markdown`、`remark-gfm`、`rehype-raw`、`mdx`
- 内容解析：`gray-matter`
- 代码块和图表：`prism-react-renderer`、`mermaid`
- OSS / 图片处理：`ali-oss`、`sharp`
- 3D：`three`、`@react-three/*`
- 评论和统计：`twikoo`、`@vercel/analytics`、`@vercel/speed-insights`
- 认证、数据库、支付、CMS 相关包

如果用户明确要某类能力，再按项目需求添加。

## 文档工作流

中大型需求使用：

```text
docs/开发设计文档/
  <feature_slug>_final_design.md
  <feature_slug>_execution_plan.md
  <feature_slug>_implementation_records/
```

当前现代化工作文档：

```text
docs/开发设计文档/20260628_nextjs_template_modernization/
```

实现每个工作包前：

1. 阅读 final design。
2. 阅读 execution plan。
3. 查看进度台账。
4. 只认领一个最小工作包。
5. 完成后更新台账并写实施记录。

## 验证规则

常规验证：

```bash
pnpm lint
pnpm build
```

如需视觉检查可运行：

```bash
pnpm dev
```

但结束前必须关闭本轮启动的前端服务进程。

## 禁止事项

- 禁止把模板改成博客、内容站、图库、后台或品牌官网。
- 禁止默认添加 Markdown 渲染器、文章系统、Reference Gallery、OSS、评论、Analytics。
- 禁止把未使用依赖留在模板里当“以后可能用”。
- 禁止把业务组件放入 `components/ui/`。
- 禁止复制其他项目的私有配置、个人信息、token、bucket、社交账号或内容素材。
- 禁止在未验证引用的情况下删除组件或依赖。
