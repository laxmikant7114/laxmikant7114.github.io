const stats = [
  { value: "$1.2M+", label: "Annual Savings Generated" },
  { value: "98.5%", label: "Fuel Prediction Accuracy" },
  { value: "200,000+", label: "Gallons of Fuel Conserved" },
  { value: "120+", label: "Hours/Month Automated" },
]

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-cyan-900/20 border border-cyan-900/20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 md:p-12 bg-[#0a0c10] flex flex-col items-center text-center group"
          >
            <div className="text-2xl md:text-4xl lg:text-5xl font-[family-name:var(--font-headline)] font-bold text-cyan-400 mb-2 md:mb-4 group-hover:scale-105 transition-transform">
              {stat.value}
            </div>
            <div className="text-[9px] md:text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-[0.2em] text-slate-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
