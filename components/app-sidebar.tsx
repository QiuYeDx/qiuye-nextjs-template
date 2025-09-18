"use client"

import * as React from "react"
import {
  BookOpenIcon,
  HomeIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UsersIcon,
  FileTextIcon,
  PaletteIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// 菜单数据
const data = {
  navMain: [
    {
      title: "首页",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "仪表板",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "用户管理",
      url: "/users", 
      icon: UsersIcon,
    },
    {
      title: "内容管理",
      url: "/content",
      icon: FileTextIcon,
    },
  ],
  navSecondary: [
    {
      title: "组件",
      url: "/components",
      icon: PaletteIcon,
    },
    {
      title: "文档",
      url: "/docs",
      icon: BookOpenIcon,
    },
    {
      title: "设置",
      url: "/settings",
      icon: SettingsIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 py-1">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <HomeIcon className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">秋夜模板</span>
            <span className="truncate text-xs">Next.js Template</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>主要功能</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>其他</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="p-2 text-xs text-muted-foreground truncate">
          © 2024 秋夜模板
        </div>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}
