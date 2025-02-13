"use client"

import {
  BadgeCheck,
  Building2,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingCart,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function DashboardSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      title: "Skills & Assesments",
      icon: GraduationCap,
      href: "/skills",
    },
    {
      title: "Marketplace",
      icon: ShoppingCart,
      href: "/marketplace",
    },
    {
      title: "Products & Services",
      icon: Package,
      href: "/products",
    },
    {
      title: "Job Board",
      icon: Building2,
      href: "/job-board",
    },
    {
      title: "Messages",
      icon: MessageSquare,
      href: "/messages",
    },
    {
      title: "Certifications",
      icon: BadgeCheck,
      href: "/certifications",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <span>FundiConnect</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2">
          <img src="https://github.com/shadcn.png" alt="User Avatar" className="h-8 w-8 rounded-full" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Artisan</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}