"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { 
  Fuel, 
  BarChart3, 
  FileBarChart, 
  LayoutDashboard, 
  Sparkles, 
  ParkingCircle,
  Menu,
  X
} from "lucide-react"
import { useState } from "react"

const projects = [
  { 
    href: "/", 
    label: "Fuel Optimization", 
    icon: Fuel,
    slug: ""
  },
  { 
    href: "/projects/actual-fuel-consumption", 
    label: "Actual Fuel Consumption", 
    icon: BarChart3,
    slug: "actual-fuel-consumption"
  },
  { 
    href: "/projects/performance-report", 
    label: "Performance Report", 
    icon: FileBarChart,
    slug: "performance-report"
  },
  { 
    href: "/projects/analytics-dashboard", 
    label: "Analytics Dashboard", 
    icon: LayoutDashboard,
    slug: "analytics-dashboard"
  },
  { 
    href: "/projects/report-summary", 
    label: "Report Summary", 
    icon: Sparkles,
    slug: "report-summary"
  },
  { 
    href: "/projects/smart-parking", 
    label: "Smart Parking", 
    icon: ParkingCircle,
    slug: "smart-parking"
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const isProjectsPage = pathname === "/" || pathname.startsWith("/projects/")

  if (!isProjectsPage) return null

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed bottom-6 left-6 z-[60] bg-primary text-primary-foreground p-3 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`w-[280px] h-[calc(100vh-64px)] fixed lg:sticky top-16 left-0 bg-sidebar flex flex-col py-6 z-50 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="px-6 mb-10">
          <div className="text-primary font-bold text-lg tracking-tighter uppercase font-[family-name:var(--font-headline)]">
            Project Portfolio
          </div>
          <div className="flex items-center mt-6 gap-3">
            <div className="w-10 h-10 bg-surface-container-high overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2I9xZyO20cYNxSR2UyfzfwJFDECjsNTV1eEGefHQzCqLUF-gB01WHopUQy7tT-dAAlkj3-jVUPjo7NF7xGzb2DIrTrnXMZP7iSlf9QcwqeLcediHTs_BokczjMZH9RPeXFS7QDaSy73OpQdML-rJdYYtApInbI5y-kusDFPzAcJbJFyJKT2utGREaambxPSHOuff2gKs1nBwwl4KeyG7nFofPbq186_1qZnk0csqKRTG4xUHXgUsfUFHx5lhz_0Hg32kMOdyHYmE"
                alt="Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] font-[family-name:var(--font-headline)] font-medium uppercase tracking-wider text-primary">
                Data Analyst
              </p>
              <p className="text-[10px] text-secondary opacity-60">
                BORN: 04092001
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {projects.map((project) => {
            const Icon = project.icon
            const isActive = project.href === "/" 
              ? pathname === "/" 
              : pathname === project.href

            return (
              <Link
                key={project.href}
                href={project.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center px-6 py-3 space-x-3 transition-all duration-200 ease-in-out hover:bg-sidebar-accent active:scale-95 ${
                  isActive
                    ? "text-primary bg-sidebar-accent border-r-2 border-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                <Icon className="w-[18px] h-[18px]" />
                <span className="font-[family-name:var(--font-headline)] font-medium uppercase tracking-wider text-[11px]">
                  {project.label}
                </span>
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto px-6 py-4 border-t border-border/10">
          <div className="flex items-center justify-between text-[10px] text-secondary/40 font-[family-name:var(--font-headline)] tracking-widest uppercase">
            <span>System Status</span>
            <span className="text-primary">Online</span>
          </div>
        </div>
      </aside>
    </>
  )
}
