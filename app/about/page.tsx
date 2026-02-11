import type { Metadata } from "next";
import {
  BookOpenIcon,
  GithubIcon,
  HeartIcon,
  LeafIcon,
  MailIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "关于 - qiuye-nextjs-template",
  description: "关于 qiuye-nextjs-template 项目模板",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Title */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
          <LeafIcon className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          关于此模板
        </h1>
        <p className="mt-3 text-muted-foreground">
          一个为高效开发而生的 Next.js 项目起点
        </p>
      </div>

      {/* Intro */}
      <section className="prose prose-neutral dark:prose-invert mx-auto mb-12 max-w-none">
        <Card>
          <CardHeader>
            <CardTitle>为什么创建这个模板？</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              每次启动新项目时，我们总要花大量时间配置构建工具、安装 UI
              组件库、设置主题系统、编写基础布局……这些重复性工作消耗了宝贵的开发时间。
            </p>
            <p>
              <strong className="text-foreground">
                qiuye-nextjs-template
              </strong>{" "}
              将这些最佳实践打包成一个开箱即用的模板：只需 clone
              仓库，就能立即开始编写业务代码。
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="mb-12" />

      {/* What's included */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">模板包含什么？</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "现代技术栈",
              desc: "Next.js 15 + React 19 + TypeScript + Tailwind CSS 4",
            },
            {
              title: "UI 组件库",
              desc: "30+ 基于 Radix UI 的 shadcn/ui 组件，可按需扩展",
            },
            {
              title: "主题系统",
              desc: "亮色/暗色主题切换，支持系统主题跟随，带 View Transition 动画",
            },
            {
              title: "开发工具",
              desc: "ESLint + Prettier 预配置，路径别名 @/ 已配置",
            },
            {
              title: "实用库",
              desc: "Zustand 状态管理、dayjs、lodash、ahooks 等已预装",
            },
            {
              title: "最佳实践",
              desc: "App Router、Turbopack、严格 TypeScript 模式",
            },
          ].map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      {/* How to use */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">
          <BookOpenIcon className="mr-2 inline-block h-5 w-5" />
          如何使用
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <div className="rounded-lg border bg-muted/40 p-4">
            <ol className="list-inside list-decimal space-y-3">
              <li>
                <strong className="text-foreground">Clone 模板仓库</strong>
                <code className="ml-2 rounded bg-muted px-2 py-0.5 font-mono text-xs">
                  git clone https://github.com/qiuyedx/qiuye-nextjs-template.git
                  my-app
                </code>
              </li>
              <li>
                <strong className="text-foreground">安装依赖</strong>
                <code className="ml-2 rounded bg-muted px-2 py-0.5 font-mono text-xs">
                  cd my-app &amp;&amp; pnpm install
                </code>
              </li>
              <li>
                <strong className="text-foreground">启动开发服务器</strong>
                <code className="ml-2 rounded bg-muted px-2 py-0.5 font-mono text-xs">
                  pnpm dev
                </code>
              </li>
              <li>
                <strong className="text-foreground">开始构建你的应用</strong>
                <span className="ml-2 text-sm">
                  修改 <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">app/page.tsx</code> 和其他文件
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border bg-muted/30 p-8 text-center">
        <HeartIcon className="mx-auto mb-3 h-6 w-6 text-red-500" />
        <h3 className="mb-2 text-lg font-semibold">喜欢这个模板？</h3>
        <p className="mb-6 text-sm text-muted-foreground">
          欢迎在 GitHub 上 Star 支持，或提出 Issue 和 PR
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <a
              href="https://github.com/qiuyedx/qiuye-nextjs-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:qiuye@qiuyedx.com">
              <MailIcon className="mr-2 h-4 w-4" />
              联系作者
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
