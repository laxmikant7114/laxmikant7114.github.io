import Link from "next/link"

export function Footer() {
  return (
    <footer className="p-8 md:p-12 border-t border-border/10 bg-[#0b0e14]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="text-center md:text-left">
          <p className="font-[family-name:var(--font-headline)] font-bold text-primary tracking-tighter text-lg md:text-xl">
            STARKS ANALYTICS
          </p>
          <p className="text-xs text-secondary/50 font-[family-name:var(--font-headline)] tracking-widest mt-1">
            EST. 2025
          </p>
        </div>
        <div className="flex gap-6 md:gap-8">
          {/* <Link
            href="#"
            className="text-secondary/60 hover:text-primary transition-colors text-sm uppercase tracking-widest font-[family-name:var(--font-headline)]"
          >
            Archive
          </Link> */}
          <Link
            href="/contact"
            className="text-secondary/60 hover:text-primary transition-colors text-sm uppercase tracking-widest font-[family-name:var(--font-headline)]"
          >
            Contact
          </Link>
          <Link
            href="https://www.linkedin.com/in/laxmikant-yelgandrawar/"
            className="text-secondary/60 hover:text-primary transition-colors text-sm uppercase tracking-widest font-[family-name:var(--font-headline)]"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
