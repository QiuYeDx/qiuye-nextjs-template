import {
  ArrowRightIcon,
  BookOpenIcon,
  CodeIcon,
  LayersIcon,
  PaletteIcon,
  RocketIcon,
  SparklesIcon,
  StarIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "现代化技术栈",
    description: "基于 Next.js 15、React 19、TypeScript 和 Tailwind CSS 构建",
    icon: RocketIcon,
  },
  {
    title: "丰富的UI组件",
    description: "包含 30+ 精美的 UI 组件，满足各种开发需求",
    icon: PaletteIcon,
  },
  {
    title: "最佳实践",
    description: "遵循最新的开发规范和最佳实践，代码质量有保障",
    icon: StarIcon,
  },
  {
    title: "高性能",
    description: "优化的打包配置，支持服务端渲染和静态生成",
    icon: ZapIcon,
  },
  {
    title: "主题切换",
    description: "内置深色/浅色主题切换，支持系统主题自动跟随",
    icon: SparklesIcon,
  },
  {
    title: "响应式设计",
    description: "完全响应式设计，在各种设备上都有完美的显示效果",
    icon: LayersIcon,
  },
];

const stats = [
  { label: "UI 组件", value: "30+" },
  { label: "技术栈", value: "最新" },
  { label: "代码质量", value: "A+" },
  { label: "文档完整度", value: "100%" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <Badge variant="secondary" className="px-4 py-2">
              <SparklesIcon className="mr-2 h-4 w-4" />
              全新发布
            </Badge>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            秋夜 Next.js 模板
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            基于 Next.js 15 构建的现代化模板，包含完整的 UI 组件库和最佳实践。
            让你的项目开发更加高效、优雅。
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="/docs">
                开始使用
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="/components">
                <CodeIcon className="mr-2 h-4 w-4" />
                查看组件
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              为什么选择秋夜模板？
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              我们提供了开发现代 Web 应用所需的一切工具和组件
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              立即开始构建你的应用
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              使用秋夜模板，让你的开发效率提升 10 倍
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/docs">
                  <BookOpenIcon className="mr-2 h-4 w-4" />
                  查看文档
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/components">
                  浏览组件
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
