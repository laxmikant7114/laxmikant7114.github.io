import Image from "next/image"

const methodologySteps = [
  { number: "01", label: "Optimised the Vessel constants" },
  { number: "02", label: "Implemented the vessel strategy" },
  { number: "03", label: "Strategic Dashboarding" },
]

export function MethodologySection() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-8 lg:px-16 bg-[#0d1017] border-b border-cyan-900/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-12">
            <div className="w-12 h-1 bg-cyan-400 mb-6 md:mb-8" />
            <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 tracking-tight text-foreground">
              System Overview <br />&amp; Methodology
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="space-y-6">
                <ul className="text-slate-400 text-base md:text-lg leading-relaxed space-y-6 list-none">
                  <li>
                    <p>
                      <b className="text-cyan-400">Data Modeling &amp; Optimization:</b> Engineered an advanced fuel prediction
                      framework by analyzing 6 months of discrete vessel telemetry,
                      replacing legacy static models with dynamic, density-based interpolation.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="text-cyan-400">Algorithmic Tuning:</b> Applied Root Mean Square (RMS) error minimization to historical
                      scatter data (Speed vs. GPH), recalculating variable fuel constants
                      against fixed speed coordinates to optimally fit the data density.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="text-cyan-400">Commercial Impact:</b> Skyrocketed prediction accuracy from 80% to 98.5%, directly driving
                      a ~15% per-vessel efficiency gain, conserving 400k+ gallons of fuel per annum,
                      and unlocking $1.2M in annual cost savings.
                    </p>
                  </li>
                </ul>

                <div className="flex flex-col gap-4 mt-8 md:mt-12">
                  {methodologySteps.map((step) => (
                    <div
                      key={step.number}
                      className="flex items-center gap-4 group cursor-pointer active:scale-[0.98] transition-transform"
                    >
                      <div className="w-10 h-10 flex items-center justify-center border border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/50 transition-all font-[family-name:var(--font-headline)]">
                        {step.number}
                      </div>
                      <span className="text-sm font-[family-name:var(--font-headline)] tracking-widest uppercase text-slate-500 group-hover:text-slate-200 transition-colors">
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-cyan-400/40" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-cyan-400/40" />
                <div className="bg-[#05070a] border border-cyan-900/30 p-2 overflow-hidden">
                  <Image
                    src="/images/gph-interpolation-graph.png"
                    alt="GPH Interpolation Graph"
                    width={600}
                    height={400}
                    className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-400" />
                  <span className="font-[family-name:var(--font-headline)] text-[9px] text-cyan-400/70 uppercase tracking-[0.2em]">
                    Fig 1.1 // Density-Based GPH Fuel Interpolation Curve
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
