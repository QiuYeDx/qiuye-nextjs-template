import type { Metadata } from "next";
import Link from "next/link";
import {
  BoxesIcon,
  CheckCircle2Icon,
  ExternalLinkIcon,
  LayersIcon,
  PackagePlusIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}`,
};

const includedItems = [
  "Next.js App Router",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "shadcn/ui primitives",
  "Theme switching",
  "Basic app shell",
  "ESLint and Prettier",
];

const excludedItems = [
  "Blog system",
  "Markdown renderer",
  "Authentication",
  "Database",
  "CMS",
  "Uploads",
  "Analytics",
  "3D effects",
];

const usageSteps = [
  "Clone the template into a new project folder.",
  "Update site metadata, navigation, and package name.",
  "Replace the starter pages with product screens.",
  "Install domain packages only when the project needs them.",
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-14 sm:px-6 sm:py-20">
      <section className="space-y-5 text-center">
        <Badge variant="secondary" className="mx-auto w-fit">
          About this template
        </Badge>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A clean base for new Next.js projects
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {siteConfig.name} keeps the repeatable setup work in one place while
            leaving product-specific decisions to each new project.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
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
            <Link href="/">Back home</Link>
          </Button>
        </div>
      </section>

      <Separator />

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: LayersIcon,
            title: "Starter shell",
            description:
              "A small layout, provider setup, theme toggle, and starter routes.",
          },
          {
            icon: BoxesIcon,
            title: "Common UI",
            description:
              "A focused set of shadcn/ui primitives that can grow on demand.",
          },
          {
            icon: PackagePlusIcon,
            title: "Bring your domain",
            description:
              "Add auth, data, charts, docs, or media only when the project asks.",
          },
        ].map((item) => (
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

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Included baseline</CardTitle>
            <CardDescription>
              The pieces expected in most new frontend projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {includedItems.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Not included by default</CardTitle>
            <CardDescription>
              These belong in project-specific implementation work.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {excludedItems.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">How to use it</CardTitle>
          <CardDescription>
            Treat this repository as a base layer, then let each project define
            its own product shape.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="grid gap-3 sm:grid-cols-2">
            {usageSteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 rounded-md border bg-muted/30 p-3 text-sm leading-6"
              >
                <CheckCircle2Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  <span className="font-medium text-foreground">
                    {index + 1}.
                  </span>{" "}
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
