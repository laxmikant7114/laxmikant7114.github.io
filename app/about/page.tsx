import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Code2, Database, LineChart, Brain, Briefcase, GraduationCap } from "lucide-react"

const experience = [
  {
    title: "Data Analyst",
    company: "Gekko - Applied Drilling Intelligence, UK",
    period: "April 2025 - Present",
    description: "Leading fuel optimization projects with 98.5% prediction accuracy, driving $1.2M+ annual savings.",
    details: [
      {
        heading: "Built and optimized a vessel fuel prediction model that",
        bullets: [
          "Helped our clients save ~$1.2M annually in fuel costs",
          "Helped the environment by conserving over 400k+ gallons of fuel yearly",
          "Made vessels 15% more efficient on average",
          "Elevated our model accuracy from 80% to 98.5%",
        ],
      },
      {
        heading: "Created intricate Power BI reports",
        bullets: [
          "To drive decision making of vessel speeds, dispatch timings, etc",
          "For optimal vessel utilization and fuel savings",
          "By driving clear narratives using vessel trips, fuel utilization, and wait time visualizations",
        ],
      },
      {
        heading: "Automated monthly report generation, summarization, and QC that",
        bullets: [
          "Saved our team 120+ hours monthly",
          "Allowed the team to focus on higher-value QC processes instead of manual report churning",
          "Added Report automation that sends the Vessel reports every Monday",
        ],
      },
      {
        heading: "Built an AI Report Summarization tool",
        bullets: [
          "Trained the model to Identify the KPIs like Top performing trips, Vessel Utilization, Short/Long trip, Fuel Consumption, Cost Savings, etc.",
          "It generates the Tailored summary reducing the Quality Analysis time by 70%",
        ],
      },
      {
        heading: "Fuel Consumption breakdown per vessel state",
        bullets: [
          "By cleverly breaking down aggregated fuel data over different Vessel state, unlocked the decision making to identify the actual vs predicted fuel difference at vessel state",
          "It helped to draw an analysis based on fuel difference in a particular vessel state",
        ],
      },
      {
        heading: "Trained 4 Data Analysts on PowerBI Vessel Report development & Quality Analysis process for ~8 months",
        bullets: [],
      },
    ],
  },
  {
    title: "Co-founder & Product Head ",
    company: "HR6 Solutions",
    period: "Feb 2024 - Oct 2024",
    description: "Built and scaled a cross-functional team of 16 members, driving the end-to-end product lifecycle for enterprise SaaS platforms.",
    details: [
      {
        heading: "Strategic Product Operations",
        bullets: [
          "Formulated data-driven GTM strategies and business models by synthesizing real-time market signals, bridging the gap between engineering roadmaps and commercial goals",
        ],
      },
      {
        heading: "Growth & Operational Excellence",
        bullets: [
          "Orchestrated daily business operations and automated lead generation pipelines, optimizing marketing workflows to secure strategic client partnerships and accelerate early-stage growth",
        ],
      },
    ],
  },
]

const skills = [
  { icon: Code2, label: "Python & SQL", description: "Advanced data manipulation and analysis" },
  { icon: Database, label: "Analytics", description: "PowerBI, Tableau, Matplotlib" },
  { icon: LineChart, label: "Product Management", description: "Proven Experience in PM, Business strategies" },
  { icon: Brain, label: "Machine Learning", description: "Predictive models and optimization" },
]

export default function AboutPage() {
  return (
    <>
      <TopNav />
      <div className="min-h-screen pt-16">
        <main className="bg-[#0a0c10] min-h-screen relative overflow-x-hidden">
          {/* Hero Section */}
          <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 border-b border-cyan-900/10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-12 h-1 bg-cyan-400 mb-8" />
                  <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                    About Me
                  </h1>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    I&apos;m <span className="text-cyan-400 font-bold">Laxmikant Yelgandrawar</span>, Data Analyst experienced in transforming raw data into business intelligence using advanced analytics in fast-paced startup environments. Driving $1.2M+ in annual savings by optimizing fuel prediction engine (98.5% accuracy) and automated reporting ecosystems. Expert in transforming raw vessel telemetry into scalable business intelligence using Power BI., I help organizations achieve significant cost savings through data-driven strategies.
                  </p>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    My work focuses on transforming complex vessel telemetry data into actionable insights, creating dashboards that drive strategic decision-making.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
                    <div className="w-80 h-96 bg-cyan-950/20 border border-cyan-900/30 overflow-hidden">
                      <Image
                        src="/images/profile.jpg"
                        alt="Laxmikant Yelgandrawar"
                        width={320}
                        height={384}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Experience Section */}
          <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="w-12 h-1 bg-cyan-400 mb-8" />
              <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
                Experience
              </h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-cyan-900/30 hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400" />
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      <h3 className="font-[family-name:var(--font-headline)] text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-cyan-400 font-[family-name:var(--font-headline)] text-sm mb-2">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="text-slate-400">{exp.description}</p>
                    {exp.details && exp.details.length > 0 && (
                      <div className="mt-4 space-y-4">
                        {exp.details.map((detail, dIndex) => (
                          <div key={dIndex}>
                            <p className="text-slate-300 font-medium text-sm">
                              <span className="text-cyan-400 mr-2">{dIndex + 1}.</span>
                              {detail.heading}
                            </p>
                            {detail.bullets.length > 0 && (
                              <ul className="mt-1.5 ml-6 space-y-1">
                                {detail.bullets.map((bullet, bIndex) => (
                                  <li key={bIndex} className="text-slate-400 text-sm flex items-start gap-2">
                                    <span className="text-cyan-400/60 mt-1.5 w-1 h-1 rounded-full bg-cyan-400/60 flex-shrink-0" />
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Skills Section */}
          <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#0d1017]">
            <div className="max-w-6xl mx-auto">
              <div className="w-12 h-1 bg-cyan-400 mb-8" />
              <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
                Technical Skills
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={index}
                      className="bg-[#0a0c10] border border-cyan-900/30 p-6 group hover:border-cyan-400/50 transition-all"
                    >
                      <Icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-[family-name:var(--font-headline)] text-lg font-bold text-foreground mb-2">
                        {skill.label}
                      </h3>
                      <p className="text-slate-500 text-sm">{skill.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#0d1017]">
            <div className="max-w-6xl mx-auto">
              <div className="w-12 h-1 bg-cyan-400 mb-8" />
              <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
                Education
              </h2>
              <div className="relative pl-8 border-l-2 border-cyan-900/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400" />
                <div className="flex items-center gap-4 mb-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-[family-name:var(--font-headline)] text-xl font-bold text-foreground">
                    Bachelor&apos;s in Information Technology
                  </h3>
                </div>
                <p className="text-cyan-400 font-[family-name:var(--font-headline)] text-sm mb-2">
                  Savitribai Phule Pune University | 2021 - 2024
                </p>
                <p className="text-slate-400">
                  Specialized in Information Technology with Honours in Artificial Intelligence & Machine Learning.
                </p>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  )
}
