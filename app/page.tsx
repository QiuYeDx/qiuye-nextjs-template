"use client";

import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  ClipboardIcon,
  CodeIcon,
  FolderTreeIcon,
  LeafIcon,
  PackageIcon,
  PaletteIcon,
  RocketIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  ZapIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { useState, useCallback } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* ---------- data ---------- */

const techStack = [
  { name: "Next.js 15", desc: "App Router, Turbopack, RSC" },
  { name: "React 19", desc: "最新 React 特性" },
  { name: "TypeScript 5", desc: "类型安全" },
  { name: "Tailwind CSS 4", desc: "原子化样式" },
  { name: "shadcn/ui", desc: "高质量 UI 组件" },
  { name: "next-themes", desc: "亮/暗主题切换" },
  { name: "Motion", desc: "流畅动画" },
  { name: "Zustand", desc: "轻量级状态管理" },
];

const features = [
  {
    icon: RocketIcon,
    title: "开箱即用",
    desc: "预配置 ESLint、Prettier、路径别名，clone 后即可开始开发",
  },
  {
    icon: PaletteIcon,
    title: "30+ UI 组件",
    desc: "基于 Radix UI 的 shadcn/ui 组件库，可按需扩展",
  },
  {
    icon: ZapIcon,
    title: "极致性能",
    desc: "Turbopack 开发、自动代码分割、服务端渲染",
  },
  {
    icon: ShieldCheckIcon,
    title: "类型安全",
    desc: "全面 TypeScript 严格模式，减少运行时错误",
  },
  {
    icon: SmartphoneIcon,
    title: "响应式设计",
    desc: "移动端优先的响应式布局，适配所有设备",
  },
  {
    icon: PackageIcon,
    title: "工具丰富",
    desc: "内置 Zustand、dayjs、lodash、ahooks 等实用库",
  },
];

const projectTree = `qiuye-nextjs-template/
├── app/                  # 页面 & 路由
│   ├── layout.tsx        # 根布局
│   ├── page.tsx          # 首页
│   └── globals.css       # 全局样式 & 主题变量
├── components/
│   ├── ui/               # shadcn/ui 组件
│   ├── header.tsx        # 顶部导航
│   ├── footer.tsx        # 页脚
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── hooks/                # 自定义 Hooks
├── lib/                  # 工具函数
├── public/               # 静态资源
└── package.json`;

const cloneCommand = "git clone https://github.com/qiuyedx/qiuye-nextjs-template.git";

/* ---------- helpers ---------- */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

/* ---------- sub-components ---------- */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={copy}
      className="shrink-0 cursor-pointer rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      aria-label="复制命令"
    >
      {copied ? (
        <CheckIcon className="h-4 w-4 text-green-500" />
      ) : (
        <ClipboardIcon className="h-4 w-4" />
      )}
    </button>
  );
}

/* ---------- page ---------- */

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* ===== Hero ===== */}
      <section className="flex flex-col items-center py-20 text-center sm:py-28">
        <motion.div {...fadeUp(0)}>
          <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
            <LeafIcon className="h-3.5 w-3.5" />
            Next.js 15 开发模板
          </Badge>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          qiuye-nextjs-template
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl"
        >
          一个干净、现代、开箱即用的 Next.js 项目模板。
          <br className="hidden sm:block" />
          Clone 即可开始构建你的下一个应用。
        </motion.p>

        {/* Clone command */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-8 flex w-full max-w-lg items-center gap-2 rounded-lg border bg-muted/50 px-4 py-2.5 font-mono text-sm"
        >
          <span className="select-none text-muted-foreground">$</span>
          <div className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <code className="block whitespace-nowrap leading-5">{cloneCommand}</code>
          </div>
          <CopyButton text={cloneCommand} />
        </motion.div>

        <motion.div {...fadeUp(0.45)} className="mt-8 flex gap-3">
          <Button size="lg" asChild>
            <a
              href="https://github.com/qiuyedx/qiuye-nextjs-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">
              <CodeIcon className="mr-2 h-4 w-4" />
              了解更多
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* ===== Tech Stack ===== */}
      <section className="py-16">
        <motion.h2
          {...fadeUpView()}
          className="mb-2 text-center text-2xl font-bold sm:text-3xl"
        >
          技术栈
        </motion.h2>
        <motion.p
          {...fadeUpView(0.1)}
          className="mb-10 text-center text-muted-foreground"
        >
          基于主流、成熟的前端技术构建
        </motion.p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {techStack.map((t, i) => (
            <motion.div key={t.name} {...fadeUpView(i * 0.05)}>
              <Card className="h-full text-center transition-shadow hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{t.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t.desc}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="py-16">
        <motion.h2
          {...fadeUpView()}
          className="mb-2 text-center text-2xl font-bold sm:text-3xl"
        >
          模板特性
        </motion.h2>
        <motion.p
          {...fadeUpView(0.1)}
          className="mb-10 text-center text-muted-foreground"
        >
          为高效开发而设计
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} {...fadeUpView(i * 0.08)}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader className="flex-row items-center gap-3 space-y-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {f.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Project Structure ===== */}
      <section className="py-16">
        <motion.h2
          {...fadeUpView()}
          className="mb-2 text-center text-2xl font-bold sm:text-3xl"
        >
          <FolderTreeIcon className="mr-2 inline-block h-6 w-6" />
          项目结构
        </motion.h2>
        <motion.p
          {...fadeUpView(0.1)}
          className="mb-10 text-center text-muted-foreground"
        >
          清晰、规范的目录组织
        </motion.p>

        <motion.div {...fadeUpView(0.15)}>
          <div className="overflow-x-auto rounded-lg border bg-muted/40 p-5">
            <pre className="font-mono text-sm leading-relaxed text-foreground/90">
              {projectTree}
            </pre>
          </div>
        </motion.div>
      </section>

      {/* ===== Quick Start ===== */}
      <section className="py-16 pb-24">
        <motion.div
          {...fadeUpView()}
          className="rounded-2xl border bg-muted/30 p-8 text-center sm:p-12"
        >
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">快速开始</h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            三步即可启动你的新项目
          </p>

          <div className="mx-auto grid max-w-2xl gap-4 text-left sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Clone 仓库",
                cmd: "git clone https://github.com/qiuyedx/qiuye-nextjs-template.git my-app",
              },
              {
                step: "2",
                title: "安装依赖",
                cmd: "cd my-app && pnpm install",
              },
              {
                step: "3",
                title: "启动开发",
                cmd: "pnpm dev",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-lg border bg-background p-4"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {s.step}
                  </span>
                  <span className="font-medium">{s.title}</span>
                </div>
                <code className="block whitespace-pre-wrap rounded bg-muted px-2 py-1 font-mono text-xs leading-relaxed text-muted-foreground [overflow-wrap:anywhere]">
                  {s.cmd}
                </code>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
