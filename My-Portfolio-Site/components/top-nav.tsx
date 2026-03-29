"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
  { href: "/activity", label: "MY ACTIVITY" },
  { href: "/contact", label: "CONTACT" },
]

export function TopNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isProjectPage = pathname === "/" || pathname.startsWith("/projects/")

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0a0c10]/95 backdrop-blur-md border-b border-cyan-900/30 flex items-center justify-between px-4 md:px-8 lg:px-12 z-[100]">
      <div className="flex items-center">
        <span className="text-primary font-[family-name:var(--font-headline)] font-bold text-base md:text-lg tracking-tighter uppercase">
          LAXMIKANT YELGANDRAWAR
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = link.href === "/" 
              ? isProjectPage 
              : pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-headline)] text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-secondary/60 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <button className="border border-cyan-400/50 text-primary px-4 lg:px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary/10 transition-all active:scale-95 flex items-center gap-2">
          <Download className="w-3 h-3" />
          Download CV
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-primary p-2"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0a0c10]/98 backdrop-blur-md border-b border-cyan-900/30 md:hidden">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => {
              const isActive = link.href === "/" 
                ? isProjectPage 
                : pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-[family-name:var(--font-headline)] text-sm font-bold tracking-[0.2em] uppercase transition-colors py-2 ${
                    isActive
                      ? "text-primary border-l-2 border-primary pl-4"
                      : "text-secondary/60 hover:text-primary pl-4"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <button className="border border-cyan-400/50 text-primary px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary/10 transition-all active:scale-95 flex items-center justify-center gap-2 mt-2">
              <Download className="w-3 h-3" />
              Download CV
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
