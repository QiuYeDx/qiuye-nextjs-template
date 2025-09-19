"use client";

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
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

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
  { label: "UI 组件", value: "30+", numericValue: 30 },
  { label: "技术栈", value: "最新", numericValue: null },
  { label: "代码质量", value: "A+", numericValue: null },
  { label: "文档完整度", value: "100%", numericValue: 100 },
];

// 计数器组件
function Counter({
  value,
  numericValue,
}: {
  value: string;
  numericValue: number | null;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && numericValue) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev >= numericValue) {
            clearInterval(timer);
            return numericValue;
          }
          return prev + Math.ceil(numericValue / 30);
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  if (!numericValue) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>{count === numericValue ? value : count.toString()}</span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="px-4 py-2">
              <SparklesIcon className="mr-2 h-4 w-4" />
              全新发布
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            秋夜 Next.js 模板
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            基于 Next.js 15 构建的现代化模板，包含完整的 UI 组件库和最佳实践。
            让你的项目开发更加高效、优雅。
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" asChild>
                <Link href="/docs">
                  开始使用
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="outline" size="lg" asChild>
                <Link href="/components">
                  <CodeIcon className="mr-2 h-4 w-4" />
                  查看组件
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="text-2xl font-bold text-foreground sm:text-3xl">
                  <Counter
                    value={stat.value}
                    numericValue={stat.numericValue}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              为什么选择秋夜模板？
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              我们提供了开发现代 Web 应用所需的一切工具和组件
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              transition: { duration: 0.2 },
                            }}
                          >
                            <feature.icon className="h-6 w-6 text-primary-foreground" />
                          </motion.div>
                          <CardTitle className="text-xl">
                            {feature.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              立即开始构建你的应用
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              使用秋夜模板，让你的开发效率提升 10 倍
            </motion.p>
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" asChild>
                  <Link href="/docs">
                    <BookOpenIcon className="mr-2 h-4 w-4" />
                    查看文档
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button variant="outline" size="lg" asChild>
                  <Link href="/components">
                    浏览组件
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
