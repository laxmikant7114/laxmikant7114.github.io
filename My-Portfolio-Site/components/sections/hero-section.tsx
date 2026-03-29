import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 overflow-hidden border-b border-cyan-900/10">
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />
      <div className="scanline" />
      
      <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full max-w-7xl mx-auto py-12">
        <div className="md:col-span-7 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/30 text-cyan-400 font-[family-name:var(--font-headline)] text-[10px] tracking-[0.3em] mb-6 md:mb-8 uppercase border border-cyan-400/20">
            <span className="w-1.5 h-1.5 bg-cyan-400 animate-pulse" />
            LAXMIKANT YELGANDRAWAR | Data Analyst
          </div>
          
          <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tighter mb-6 md:mb-8 text-foreground">
            Driving $1.2M+ in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-slate-400">
              Annual Savings.
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mb-8 md:mb-12 leading-relaxed border-l border-cyan-900/50 pl-4 md:pl-6">
            Specializing in industrial efficiency by optimizing fuel prediction engines (98.5%
            accuracy) and architecting vessel performance dashboards for narrative strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
            <button className="bg-cyan-400 text-[#0a0c10] px-6 md:px-10 py-4 md:py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-cyan-300 transition-all shadow-[0_0_30px_-5px_rgba(0,206,209,0.3)] active:scale-95">
              Explore Methodology
            </button>
            <button className="border border-slate-700 text-slate-300 px-6 md:px-10 py-4 md:py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-all active:scale-95">
              Technical Stack
            </button>
          </div>
        </div>
        
        <div className="md:col-span-5 flex justify-center items-center relative z-10 mt-8 md:mt-0">
          <div className="relative group">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
            <div className="w-56 h-72 md:w-64 md:h-80 lg:w-80 lg:h-[450px] bg-cyan-950/20 border border-cyan-900/30 overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
              <Image
                src="/images/profile.jpg"
                alt="Laxmikant Yelgandrawar"
                width={320}
                height={450}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
          </div>
        </div>
      </div>
    </section>
  )
}
