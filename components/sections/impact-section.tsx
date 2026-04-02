import { Info } from "lucide-react"

export function ImpactSection() {
  return (
    <section className="pb-16 md:pb-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Strategic Impact Note */}
      <div className="relative group bg-cyan-950/10 border border-cyan-400/20 p-6 md:p-8 lg:p-10 mb-12 md:mb-16">
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-400/40" />

        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center bg-cyan-400/5 text-cyan-400">
              <Info className="w-6 h-6" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400/50" />
              <span className="font-[family-name:var(--font-headline)] text-[10px] text-cyan-400 uppercase tracking-[0.3em]">
                Strategic Impact Note
              </span>
            </div>
            <p className="text-slate-300 font-[family-name:var(--font-headline)] text-base md:text-lg lg:text-xl leading-relaxed">
              The <span className="text-cyan-400 font-bold">$1.2M dollars</span> of fuel
              savings is achieved by optimizing{" "}
              <span className="text-white border-b border-cyan-400/30">8 such vessels</span>{" "}
              which resulted in annual fuel savings of around{" "}
              <span className="text-cyan-400 font-bold">400,000+ gallons</span> — a major commercial win.
            </p>
          </div>
        </div>

        <div className="absolute bottom-2 right-4 opacity-[0.03] pointer-events-none select-none font-[family-name:var(--font-headline)] text-4xl font-bold tracking-tighter text-cyan-400">
          IMPACT_REPORT_V.08
        </div>
      </div>

      {/* LinkedIn Post Embed */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-start-3 md:col-span-8 flex justify-center">
          <div className="w-full max-w-[504px] border border-cyan-900/30 bg-[#0d1017] p-4 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400/40" />
            <div className="custom-scrollbar overflow-y-auto h-[500px] md:h-[700px] lg:h-[1000px]">
              <iframe
                allowFullScreen
                frameBorder="0"
                height="1276"
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7407156243028418560"
                style={{
                  filter: "invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)",
                  mixBlendMode: "screen",
                }}
                title="LinkedIn Post"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
