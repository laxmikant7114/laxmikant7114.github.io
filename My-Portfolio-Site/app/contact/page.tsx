"use client"

import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react"
import { useState } from "react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "laxmikant@example.com",
    href: "mailto:laxmikant@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/laxmikant",
    href: "https://www.linkedin.com/in/laxmikant-yelgandrawar/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/laxmikant",
    href: "https://github.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission

    console.log("Form submitted:", formData)
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

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
                Get In Touch
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                Interested in collaboration or have a project in mind? I&apos;d love to hear from you. Let&apos;s discuss how data analytics can drive efficiency for your organization.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Methods */}
                <div>
                  <h2 className="font-[family-name:var(--font-headline)] text-2xl font-bold text-foreground mb-8">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => {
                      const Icon = method.icon
                      return (
                        <a
                          key={index}
                          href={method.href}
                          target={method.href.startsWith("http") ? "_blank" : undefined}
                          rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 p-4 bg-[#0d1017] border border-cyan-900/30 hover:border-cyan-400/50 transition-all group"
                        >
                          <div className="w-12 h-12 flex items-center justify-center border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500 mb-1">
                              {method.label}
                            </p>
                            <p className="text-foreground font-medium group-hover:text-cyan-400 transition-colors">
                              {method.value}
                            </p>
                          </div>
                        </a>
                      )
                    })}
                  </div>

                  {/* Availability */}
                  <div className="mt-8 p-6 bg-cyan-950/10 border border-cyan-400/20">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 bg-cyan-400 animate-pulse" />
                      <span className="font-[family-name:var(--font-headline)] text-[10px] text-cyan-400 uppercase tracking-widest">
                        Current Status
                      </span>
                    </div>
                    <p className="text-foreground font-[family-name:var(--font-headline)] text-lg">
                      Available for freelance projects and consulting
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="font-[family-name:var(--font-headline)] text-2xl font-bold text-foreground mb-8">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full bg-[#0d1017] border border-cyan-900/30 px-4 py-3 text-foreground placeholder-slate-600 focus:border-cyan-400/50 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-[#0d1017] border border-cyan-900/30 px-4 py-3 text-foreground placeholder-slate-600 focus:border-cyan-400/50 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full bg-[#0d1017] border border-cyan-900/30 px-4 py-3 text-foreground placeholder-slate-600 focus:border-cyan-400/50 focus:outline-none transition-colors"
                        placeholder="Project inquiry"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-[family-name:var(--font-headline)] uppercase tracking-widest text-slate-500 mb-2">
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full bg-[#0d1017] border border-cyan-900/30 px-4 py-3 text-foreground placeholder-slate-600 focus:border-cyan-400/50 focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-cyan-400 text-[#0a0c10] px-6 py-4 font-bold text-xs tracking-[0.2em] uppercase hover:bg-cyan-300 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
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
