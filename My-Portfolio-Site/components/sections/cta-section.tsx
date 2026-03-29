export function CTASection() {
  return (
    <section className="pb-16 md:pb-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="bg-cyan-400 p-1 bg-gradient-to-r from-cyan-400 to-cyan-700">
        <div className="bg-[#0a0c10] p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-[family-name:var(--font-headline)] text-xl md:text-2xl font-bold text-slate-100 tracking-tight">
              Access Technical Documentation
            </h4>
            <p className="text-slate-500 text-sm mt-1">
              Review my GitHub repositories for core analytics frameworks and models.
            </p>
          </div>
          <button className="bg-cyan-400 text-[#0a0c10] px-6 md:px-10 py-4 md:py-5 font-bold text-xs tracking-[0.2em] uppercase hover:bg-cyan-300 transition-all whitespace-nowrap active:scale-95">
            Visit Repository
          </button>
        </div>
      </div>
    </section>
  )
}
