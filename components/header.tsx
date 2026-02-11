"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LeafIcon } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于", href: "/about" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Logo & Nav */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <LeafIcon className="h-5 w-5 text-primary" />
            <span className="hidden sm:inline">qiuye-nextjs-template</span>
          </Link>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
