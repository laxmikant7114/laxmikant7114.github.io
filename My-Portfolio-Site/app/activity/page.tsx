import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"
import { Calendar, Github, Linkedin, FileText, Award, BookOpen } from "lucide-react"

const activities = [
  {
    icon: Award,
    date: "March 2026",
    title: "Fuel Optimization Achievement",
    description: "Achieved 98.5% prediction accuracy in vessel fuel consumption model, driving $1.2M+ annual savings.",
    type: "achievement",
  },
  {
    icon: FileText,
    date: "February 2026",
    title: "Technical Documentation Published",
    description: "Published comprehensive analytics framework documentation for industrial data modeling.",
    type: "publication",
  },
  {
    icon: Github,
    date: "January 2026",
    title: "Open Source Contribution",
    description: "Released vessel telemetry analysis toolkit on GitHub for the data science community.",
    type: "contribution",
  },
  {
    icon: Linkedin,
    date: "December 2025",
    title: "Industry Recognition",
    description: "Featured article on LinkedIn about industrial efficiency optimization strategies.",
    type: "social",
  },
  {
    icon: BookOpen,
    date: "November 2025",
    title: "Workshop Presentation",
    description: "Presented data modeling techniques at Industrial Analytics Conference 2025.",
    type: "event",
  },
  {
    icon: Award,
    date: "October 2025",
    title: "Performance Dashboard Launch",
    description: "Launched comprehensive vessel performance dashboard for fleet management.",
    type: "achievement",
  },
]

export default function ActivityPage() {
  return (
    <>
      <TopNav />
      <div className="min-h-screen pt-16">
        <main className="bg-[#0a0c10] min-h-screen relative overflow-x-hidden">
          {/* Header */}
          <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 border-b border-cyan-900/10">
            <div className="max-w-6xl mx-auto">
              <div className="w-12 h-1 bg-cyan-400 mb-8" />
              <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                My Activity
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                A timeline of my professional achievements, contributions, and milestones in data analytics and industrial optimization.
              </p>
            </div>
          </section>

          {/* Activity Timeline */}
          <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-cyan-900/30" />
                
                {activities.map((activity, index) => {
                  const Icon = activity.icon
                  const isLeft = index % 2 === 0
                  
                  return (
                    <div
                      key={index}
                      className={`relative mb-12 ${
                        isLeft ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 z-10" />
                      
                      {/* Content */}
                      <div
                        className={`ml-8 md:ml-0 ${
                          isLeft ? "md:mr-8" : "md:ml-8"
                        }`}
                      >
                        <div
                          className={`bg-[#0d1017] border border-cyan-900/30 p-6 hover:border-cyan-400/50 transition-all group`}
                        >
                          <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                            <Icon className="w-5 h-5 text-cyan-400" />
                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                              <Calendar className="w-4 h-4" />
                              {activity.date}
                            </div>
                          </div>
                          <h3 className="font-[family-name:var(--font-headline)] text-lg font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                            {activity.title}
                          </h3>
                          <p className="text-slate-400 text-sm">{activity.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Stats Summary */}
          <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#0d1017]">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cyan-900/20 border border-cyan-900/20">
                <div className="p-8 bg-[#0a0c10] text-center">
                  <div className="text-3xl md:text-4xl font-[family-name:var(--font-headline)] font-bold text-cyan-400 mb-2">
                    15+
                  </div>
                  <div className="text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500">
                    Projects Completed
                  </div>
                </div>
                <div className="p-8 bg-[#0a0c10] text-center">
                  <div className="text-3xl md:text-4xl font-[family-name:var(--font-headline)] font-bold text-cyan-400 mb-2">
                    5+
                  </div>
                  <div className="text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500">
                    Years Experience
                  </div>
                </div>
                <div className="p-8 bg-[#0a0c10] text-center">
                  <div className="text-3xl md:text-4xl font-[family-name:var(--font-headline)] font-bold text-cyan-400 mb-2">
                    10+
                  </div>
                  <div className="text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500">
                    Publications
                  </div>
                </div>
                <div className="p-8 bg-[#0a0c10] text-center">
                  <div className="text-3xl md:text-4xl font-[family-name:var(--font-headline)] font-bold text-cyan-400 mb-2">
                    3
                  </div>
                  <div className="text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500">
                    Awards
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  )
}
