import { TopNav } from "@/components/top-nav"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const projects = {
  "actual-fuel-consumption": {
    title: "Actual Fuel Consumption",
    subtitle: "Real-time Fuel Monitoring System",
    description: "A comprehensive fuel consumption tracking and analysis system that monitors vessel fuel usage in real-time, providing accurate data for operational optimization.",
    highlights: [
      "Real-time fuel flow monitoring with 99% accuracy",
      "Integration with vessel telemetry systems",
      "Automated data collection and reporting",
      "Historical trend analysis and forecasting",
    ],
    impact: "Reduced fuel wastage by 12% through accurate consumption tracking",
    technologies: ["Python", "SQL", "Power BI", "Azure IoT"],
  },
  "analytics-dashboard": {
    title: "Analytics Dashboard",
    subtitle: "Interactive Data Visualization",
    description: "A real-time analytics dashboard providing comprehensive visibility into vessel operations, fuel efficiency, and performance metrics across the entire fleet.",
    highlights: [
      "Interactive drill-down capabilities",
      "Real-time data streaming",
      "Customizable widget layouts",
      "Mobile-responsive design",
    ],
    impact: "Enabled 24/7 operational monitoring for fleet managers",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
  },
  "performance-report": {
    title: "Vessel Performance Report",
    subtitle: "Vessel Performance Analytics",
    description: "Advanced performance reporting system that generates comprehensive vessel efficiency reports, enabling data-driven decision making for fleet management.",
    highlights: [
      "Automated weekly and monthly performance reports",
      "KPI tracking and benchmarking",
      "Comparative fleet analysis",
      "Executive dashboard summaries",
    ],
    impact: "Improved fleet efficiency visibility by 40%",
    technologies: ["Python", "Tableau", "PostgreSQL", "Apache Airflow"],
  },

  "report-summary": {
    title: "Report Summary",
    subtitle: "AI-Powered Report Generation",
    description: "An intelligent report summarization system that uses machine learning to extract key insights from complex vessel performance data and generate executive summaries.",
    highlights: [
      "Natural language report generation",
      "Anomaly detection and alerting",
      "Trend identification and recommendations",
      "Automated distribution scheduling",
    ],
    impact: "Reduced report preparation time by 80%",
    technologies: ["Python", "OpenAI API", "FastAPI", "Pandas"],
  },
  "smart-parking": {
    title: "Smart Parking",
    subtitle: "Intelligent Parking Management",
    description: "A smart parking solution using IoT sensors and machine learning to optimize parking space utilization and provide real-time availability information.",
    highlights: [
      "Real-time parking space detection",
      "Predictive availability forecasting",
      "Mobile app integration",
      "Revenue optimization analytics",
    ],
    impact: "Increased parking utilization by 25%",
    technologies: ["Python", "TensorFlow", "AWS", "React Native"],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <>
      <TopNav />
      <div className="flex min-h-screen pt-16">
        <Sidebar />
        <main className="flex-1 bg-[#0a0c10] min-h-screen relative overflow-x-hidden">
          <div className="w-full">
            {/* Header */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 border-b border-cyan-900/10">
              <div className="max-w-6xl mx-auto">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="font-[family-name:var(--font-headline)] text-[11px] uppercase tracking-widest">
                    Back to Projects
                  </span>
                </Link>

                <div className="w-12 h-1 bg-cyan-400 mb-8" />
                <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
                  {project.title}
                </h1>
                <p className="text-cyan-400 font-[family-name:var(--font-headline)] text-lg mb-6">
                  {project.subtitle}
                </p>
                <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>
            </section>

            {/* Project Image */}
            <section className="py-12 px-4 md:px-8 lg:px-16">
              <div className="max-w-6xl mx-auto">
                <div className="relative group bg-[#0d1017] border border-cyan-900/30 p-4">
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30" />
                  <div className="aspect-video bg-cyan-950/20 flex items-center justify-center">
                    <Image
                      src={`/images/projects/${slug}.png`}
                      alt={project.title}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Highlights */}
            <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#0d1017]">
              <div className="max-w-6xl mx-auto">
                <h2 className="font-[family-name:var(--font-headline)] text-2xl font-bold text-foreground mb-8 border-l-4 border-cyan-400 pl-4">
                  Key Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-[#0a0c10] border border-cyan-900/30"
                    >
                      <div className="w-8 h-8 flex items-center justify-center border border-cyan-400/30 text-cyan-400 font-[family-name:var(--font-headline)] text-sm shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <p className="text-slate-300">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Impact */}
            <section className="py-12 px-4 md:px-8 lg:px-16">
              <div className="max-w-6xl mx-auto">
                <div className="bg-cyan-950/10 border border-cyan-400/20 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-cyan-400/50" />
                    <span className="font-[family-name:var(--font-headline)] text-[10px] text-cyan-400 uppercase tracking-[0.3em]">
                      Impact
                    </span>
                  </div>
                  <p className="text-foreground font-[family-name:var(--font-headline)] text-2xl">
                    {project.impact}
                  </p>
                </div>
              </div>
            </section>

            {/* Technologies */}
            <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#0d1017]">
              <div className="max-w-6xl mx-auto">
                <h2 className="font-[family-name:var(--font-headline)] text-2xl font-bold text-foreground mb-8 border-l-4 border-cyan-400 pl-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#0a0c10] border border-cyan-900/30 text-slate-300 font-[family-name:var(--font-headline)] text-sm uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}
