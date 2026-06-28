"use client";

import Link from "next/link";
import {
  CheckIcon,
  ClipboardIcon,
  CodeIcon,
  ExternalLinkIcon,
  LayersIcon,
  PaletteIcon,
  RocketIcon,
  ShieldCheckIcon,
  TerminalIcon,
} from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

const cloneCommand =
  "git clone https://github.com/qiuyedx/qiuye-nextjs-template.git my-app";

const stackItems = [
  "Next.js 15",
  "React 19",
  "TypeScript 5",
  "Tailwind CSS 4",
  "shadcn/ui",
  "next-themes",
];

const principles = [
  {
    icon: RocketIcon,
    title: "Clean start",
    description: "A small app shell, theme support, and starter pages.",
  },
  {
    icon: LayersIcon,
    title: "Clear structure",
    description: "Predictable folders for app routes, UI, hooks, and utils.",
  },
  {
    icon: ShieldCheckIcon,
    title: "No domain baggage",
    description: "No blog, CMS, gallery, auth, database, or upload system.",
  },
  {
    icon: PaletteIcon,
    title: "Composable UI",
    description: "Keep common shadcn/ui primitives and add more on demand.",
  },
];

function CopyCommandButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Command copied");
    window.setTimeout(() => setCopied(false), 1500);
  }, [value]);

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      onClick={copy}
      aria-label="Copy command"
    >
      {copied ? <CheckIcon className="text-green-500" /> : <ClipboardIcon />}
    </Button>
  );
}

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-4 py-14 sm:px-6 sm:py-20">
      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-7">
          <Badge variant="secondary" className="w-fit">
            Clean Next.js starter
          </Badge>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {siteConfig.description} Use it as a quiet base for any new
              product, tool, dashboard, or experiment.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ExternalLinkIcon />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">
                <CodeIcon />
                About template
              </Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <TerminalIcon className="h-4 w-4" />
              Start a project
            </CardTitle>
            <CardDescription>
              Clone, install dependencies, then start the dev server.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 rounded-md border bg-muted/40 px-3 py-2 font-mono text-sm">
              <span className="select-none text-muted-foreground">$</span>
              <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap">
                {cloneCommand}
              </code>
              <CopyCommandButton value={cloneCommand} />
            </div>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <code className="rounded-md bg-muted px-3 py-2">cd my-app</code>
              <code className="rounded-md bg-muted px-3 py-2">
                pnpm install
              </code>
              <code className="rounded-md bg-muted px-3 py-2">pnpm dev</code>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((item) => (
          <Card key={item.title}>
            <CardHeader className="space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <item.icon className="h-4 w-4" />
              </div>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-6">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Stack</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            The template keeps only the baseline pieces most new projects need.
            Install domain packages only when a project asks for them.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stackItems.map((item) => (
            <Badge key={item} variant="outline" className="px-3 py-1">
              {item}
            </Badge>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">UI smoke test</CardTitle>
            <CardDescription>
              A tiny check that Button, Dialog, Input, and Toast are wired up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Reusable input primitive" />
            <div className="flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Template primitives</DialogTitle>
                    <DialogDescription>
                      This dialog is only a starter example. Replace it with
                      your product UI when a real project begins.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Button
                type="button"
                variant="secondary"
                onClick={() => toast("Toast is ready")}
              >
                Show toast
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Not included by default</CardTitle>
            <CardDescription>
              Keep project-specific systems out of the base template.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "Markdown",
                "CMS",
                "Auth",
                "Database",
                "Uploads",
                "Analytics",
                "Comments",
                "3D scenes",
              ].map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
