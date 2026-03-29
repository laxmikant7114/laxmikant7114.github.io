import Image from "next/image"

export function ProofSection() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-8 lg:px-16 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-12 md:mb-16">
          <div className="w-12 h-1 bg-cyan-400 mb-6 md:mb-8" />
          <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Proof of Work: <br />Fuel Optimization
          </h2>
          <p className="text-slate-400 text-base md:text-lg mt-6 md:mt-8 max-w-3xl border-l border-cyan-900/50 pl-4 md:pl-6">
            This time-series analysis demonstrates the{" "}
            <span className="text-cyan-400 font-bold">98.5% prediction accuracy</span> achieved through rigorous algorithmic
            tuning and advanced data modeling, comparing actual consumption against projected telemetry.
          </p>
        </div>

        {/* Actual vs Predicted */}
        <h3 className="font-[family-name:var(--font-headline)] text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-slate-100 mb-6 md:mb-8 mt-12 md:mt-16 border-l-4 border-cyan-400 pl-4 md:pl-6 uppercase tracking-[0.1em]">
          Result: <br />
          <span className="text-cyan-400">
            Actual vs Predicted Vessel Fuel Consumption Accuracy
          </span>
        </h3>
        
        <div className="relative group bg-[#0d1017] border border-cyan-900/30 p-2 md:p-4">
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30" />
          <div className="overflow-hidden">
            <Image
              src="/images/actual-vs-predicted-fuel.png"
              alt="Actual vs Predicted Fuel Graph"
              width={1200}
              height={600}
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-all duration-700"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-cyan-400" />
              <span className="font-[family-name:var(--font-headline)] text-[10px] text-cyan-400 uppercase tracking-widest">
                Model Fidelity Validation
              </span>
            </div>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="font-[family-name:var(--font-headline)] text-[10px] text-slate-500 uppercase tracking-widest">
              Actual vs Predicted Fuel Usage Report
            </span>
          </div>
        </div>

        {/* Stats */}
        <h3 className="font-[family-name:var(--font-headline)] text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-slate-100 mb-6 mt-12 border-l-4 border-cyan-400 pl-4 md:pl-6 uppercase tracking-[0.1em]">
          <span className="text-cyan-400">Stats</span>
        </h3>
        
        <div className="relative group mt-8 md:mt-12 bg-[#0d1017] border border-cyan-900/30 p-2 md:p-4">
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30" />
          <div className="overflow-hidden">
            <Image
              src="/images/stats.png"
              alt="Fuel Usage Distribution Table"
              width={1200}
              height={400}
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-all duration-700 brightness-90 contrast-125"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-cyan-400" />
              <span className="font-[family-name:var(--font-headline)] text-[10px] text-cyan-400 uppercase tracking-widest">
                Data Breakdown
              </span>
            </div>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="font-[family-name:var(--font-headline)] text-[10px] text-slate-500 uppercase tracking-widest">
              State-wise Economy &amp; Distribution Analysis
            </span>
          </div>
        </div>

        {/* Model Accuracy Rate */}
        <h3 className="font-[family-name:var(--font-headline)] text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-slate-100 mb-6 md:mb-8 mt-12 md:mt-16 border-l-4 border-cyan-400 pl-4 md:pl-6 uppercase tracking-[0.1em]">
          <span className="text-cyan-400">Model Accuracy Rate %</span>
        </h3>
        
        <div className="relative group mt-8 md:mt-12 bg-[#0d1017] border border-cyan-900/30 p-2 md:p-4">
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30" />
          <div className="overflow-hidden">
            <Image
              src="/images/model-accuracy-rate.png"
              alt="Outcome Accuracy Rates"
              width={1200}
              height={400}
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-all duration-700 brightness-90 contrast-125"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-cyan-400" />
              <span className="font-[family-name:var(--font-headline)] text-[10px] text-cyan-400 uppercase tracking-widest">
                Outcome Accuracy Rates
              </span>
            </div>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="font-[family-name:var(--font-headline)] text-[10px] text-slate-500 uppercase tracking-widest">
              State-wise accuracy validation
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
