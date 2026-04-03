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
    date: "July 2025",
    title: "Actual Vessel Fuel Consumption per state Unlocked",
    description: " - By cleverly breaking down aggregated fuel data over different Vessel state, unlocked the decision making to identify the actual vs predicted fuel difference at vessel state. - It helped to draw an analysis based on fuel difference in a particular vessel state.",
    type: "contribution",

  },
  {
    icon: Github,
    date: "March 2025",
    title: "Published Research Paper in IEEE Conference Gwalior",
    description: "Built and Automated smart system to ease the Vehicle Traffic at Shopping malls my mitagating the Manual process with smart and Convenient System for the Customers.",
    type: "publication",
  },
  {
    icon: Linkedin,
    date: "February 2024",
    title: "Stated a Startup in IT Industry",
    description: "Built and scaled a cross-functional team of 16 members, Orchestrated daily business operations and automated lead generation pipelines, build Business strategies to reach the targeted clients by optimizing marketing workflows",
    type: "social",
  },
  {
    icon: BookOpen,
    date: "November 2023",
    title: "Authored the paper - The Unsung Warriors of Independence",
    description: "earning selection as one of India’s top 400 researchers at the National Young Researcher’s Conclave held at Delhi 2022. Represented the Devgiri Region on a national platform, demonstrating excellence in academic research and communication.",
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
                      className={`relative mb-12 ${isLeft ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                        }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 z-10" />

                      {/* Content */}
                      <div
                        className={`ml-8 md:ml-0 ${isLeft ? "md:mr-8" : "md:ml-8"
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
                    5+
                  </div>
                  <div className="text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500">
                    Projects Completed
                  </div>
                </div>
                <div className="p-8 bg-[#0a0c10] text-center">
                  <div className="text-3xl md:text-4xl font-[family-name:var(--font-headline)] font-bold text-cyan-400 mb-2">
                    1.5+
                  </div>
                  <div className="text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500">
                    Years Experience
                  </div>
                </div>
                <div className="p-8 bg-[#0a0c10] text-center">
                  <div className="text-3xl md:text-4xl font-[family-name:var(--font-headline)] font-bold text-cyan-400 mb-2">
                    2+
                  </div>
                  <div className="text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500">
                    Research Paper Published
                  </div>
                </div>
                <div className="p-8 bg-[#0a0c10] text-center">
                  <div className="text-3xl md:text-4xl font-[family-name:var(--font-headline)] font-bold text-cyan-400 mb-2">

                  </div>
                  <div className="text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500">

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
