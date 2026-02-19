"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

const tabs = [
  {
    id: "web",
    label: "Web Development",
    emoji: "💻",
    color: "violet",
    tagline: "Production-ready apps from day one.",
    description:
      "We architect and build scalable web applications using Next.js, TypeScript, and modern APIs. Your product is fast, secure, and built to grow.",
    metrics: [
      { label: "Avg. build time", value: "6 weeks" },
      { label: "Performance score", value: "98/100" },
      { label: "Uptime SLA", value: "99.9%" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS"],
    preview: (
      <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-3 py-2.5 dark:border-white/5 dark:bg-white/5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <div className="ml-2 flex-1 rounded-md border border-neutral-200 bg-white px-2 py-0.5 text-[10px] text-neutral-400 dark:border-white/10 dark:bg-white/5">
            numstone.app/dashboard
          </div>
        </div>
        {/* Content */}
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-neutral-100 dark:bg-white/10" />
            <div className="h-6 w-16 rounded-lg bg-violet-500 opacity-80" />
          </div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {["Total Revenue", "Active Users", "Conversion"].map((l, i) => (
              <div key={l} className="rounded-xl border border-neutral-100 bg-neutral-50 p-2.5 dark:border-white/5 dark:bg-white/5">
                <div className="text-[9px] text-neutral-400 dark:text-neutral-500 mb-1">{l}</div>
                <div className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
                  {["₦4.2M", "12,840", "3.8%"][i]}
                </div>
                <div className={`text-[9px] font-medium ${["text-emerald-500", "text-emerald-500", "text-blue-500"][i]}`}>
                  {["↑ 18%", "↑ 340", "↑ 0.4%"][i]}
                </div>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3 dark:border-white/5 dark:bg-white/5">
            <div className="mb-2 text-[9px] font-medium text-neutral-500 dark:text-neutral-400">Monthly Revenue</div>
            <div className="flex items-end gap-1 h-12">
              {[35, 55, 42, 70, 60, 85, 72, 90, 78, 95, 82, 100].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-violet-200 dark:bg-violet-800" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    emoji: "📱",
    color: "blue",
    tagline: "Native-quality cross-platform apps.",
    description:
      "React Native apps that feel fully native on iOS and Android. We handle the full cycle — design, development, deployment to the App Store and Play Store.",
    metrics: [
      { label: "Platforms", value: "iOS + Android" },
      { label: "App store rating", value: "4.8 ★" },
      { label: "Load time", value: "< 1.2s" },
    ],
    stack: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
    preview: (
      <div className="mx-auto w-[160px] h-full relative">
        <div className="absolute inset-0 rounded-[32px] border-[8px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 shadow-2xl overflow-hidden">
          <div className="h-4 bg-neutral-800 dark:bg-neutral-700 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-12 rounded-full bg-neutral-900" />
          </div>
          <div className="bg-white dark:bg-neutral-900 h-full p-2">
            <div className="mb-2 flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-lg bg-blue-500" />
              <div className="h-2 w-16 rounded bg-neutral-200 dark:bg-white/10" />
            </div>
            <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 p-2 mb-2">
              <div className="text-[8px] text-blue-600 dark:text-blue-300 font-medium mb-1">Balance</div>
              <div className="text-sm font-bold text-neutral-800 dark:text-neutral-100">₦248,500</div>
              <div className="text-[8px] text-emerald-500">↑ +18.4% this month</div>
            </div>
            <div className="grid grid-cols-2 gap-1 mb-2">
              {["Send", "Receive", "Pay Bills", "History"].map((l) => (
                <div key={l} className="rounded-lg border border-neutral-100 bg-neutral-50 dark:border-white/5 dark:bg-white/5 p-1.5 text-center">
                  <div className="text-[8px] text-neutral-500 dark:text-neutral-400">{l}</div>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              {["Coffee Shop", "Salary credit", "Airtime"].map((l, i) => (
                <div key={l} className="flex items-center justify-between rounded-lg bg-neutral-50 dark:bg-white/5 px-1.5 py-1">
                  <div className="text-[7px] text-neutral-600 dark:text-neutral-300">{l}</div>
                  <div className={`text-[7px] font-medium ${i === 1 ? "text-emerald-500" : "text-red-400"}`}>
                    {["-₦2,500", "+₦180K", "-₦500"][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "design",
    label: "UI/UX Design",
    emoji: "✦",
    color: "pink",
    tagline: "Interfaces users genuinely enjoy.",
    description:
      "We design intuitive, beautiful products backed by user research. From wireframes to polished design systems — everything pixel-perfect and dev-ready.",
    metrics: [
      { label: "Avg. task success rate", value: "94%" },
      { label: "User satisfaction", value: "4.9/5" },
      { label: "Design iterations", value: "Unlimited" },
    ],
    stack: ["Figma", "Framer", "Adobe XD", "Prototyping", "User Research"],
    preview: (
      <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900 p-4">
        <div className="mb-3 text-[10px] font-medium text-neutral-400 dark:text-neutral-500">Design System · Colors</div>
        <div className="grid grid-cols-6 gap-1.5 mb-3">
          {["bg-violet-500", "bg-blue-500", "bg-pink-500", "bg-amber-500", "bg-emerald-500", "bg-cyan-500",
            "bg-violet-200", "bg-blue-200", "bg-pink-200", "bg-amber-200", "bg-emerald-200", "bg-cyan-200",
          ].map((c, i) => (
            <div key={i} className={`${c} h-6 rounded-lg`} />
          ))}
        </div>
        <div className="mb-3 text-[10px] font-medium text-neutral-400 dark:text-neutral-500">Typography</div>
        {[["H1 · 48px", "font-bold text-base"], ["Body · 16px", "text-xs font-normal"], ["Caption · 12px", "text-[10px]"]].map(([l, cls]) => (
          <div key={l} className={`${cls} text-neutral-800 dark:text-neutral-200 mb-1`}>{l.split("·")[0].trim()}</div>
        ))}
        <div className="mt-3 text-[10px] font-medium text-neutral-400 dark:text-neutral-500 mb-2">Components</div>
        <div className="flex gap-2">
          <button className="rounded-lg bg-black px-3 py-1.5 text-[10px] font-medium text-white dark:bg-white dark:text-black">Primary</button>
          <button className="rounded-lg border border-neutral-200 px-3 py-1.5 text-[10px] font-medium text-neutral-700 dark:border-white/10 dark:text-neutral-300">Secondary</button>
          <button className="rounded-lg bg-violet-100 px-3 py-1.5 text-[10px] font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">Accent</button>
        </div>
      </div>
    ),
  },
  {
    id: "consulting",
    label: "Tech Consulting",
    emoji: "⚡",
    color: "amber",
    tagline: "Strategy that moves the needle.",
    description:
      "From architecture reviews to acting as your fractional CTO — we give you the technical leadership to make the right calls at every stage.",
    metrics: [
      { label: "Cost savings avg.", value: "40%" },
      { label: "Delivery speed", value: "3× faster" },
      { label: "Client NPS", value: "92" },
    ],
    stack: ["System Architecture", "Code Audits", "Team Coaching", "CTO Services", "Vendor Selection"],
    preview: (
      <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900 p-4">
        <div className="mb-4 text-[10px] font-medium text-neutral-400 dark:text-neutral-500">Technology Roadmap · Q2–Q4</div>
        <div className="space-y-3">
          {[
            { phase: "Discovery & Audit", done: true, color: "bg-emerald-500", weeks: "Wk 1–2" },
            { phase: "Architecture Design", done: true, color: "bg-emerald-500", weeks: "Wk 3–4" },
            { phase: "Team Setup & Tooling", done: false, color: "bg-amber-500", weeks: "Wk 5–6" },
            { phase: "Build & Ship MVP", done: false, color: "bg-neutral-200", weeks: "Wk 7–14" },
            { phase: "Scale & Optimize", done: false, color: "bg-neutral-200", weeks: "Wk 15+" },
          ].map(({ phase, done, color, weeks }) => (
            <div key={phase} className="flex items-center gap-3">
              <div className={`h-2.5 w-2.5 rounded-full ${color} shrink-0`} />
              <div className="flex-1">
                <div className={`text-[11px] font-medium ${done ? "text-neutral-700 dark:text-neutral-300" : "text-neutral-400 dark:text-neutral-500"}`}>
                  {phase}
                </div>
              </div>
              <div className="text-[10px] text-neutral-400 dark:text-neutral-500">{weeks}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 p-3">
          <div className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 mb-0.5">Current Recommendation</div>
          <div className="text-[11px] text-amber-600 dark:text-amber-300">Migrate monolith to microservices — est. 40% cost reduction.</div>
        </div>
      </div>
    ),
  },
];

const colorMap: Record<string, { tab: string; accent: string; badge: string }> = {
  violet: {
    tab: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    accent: "bg-violet-500",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  },
  blue: {
    tab: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    accent: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  pink: {
    tab: "bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    accent: "bg-pink-500",
    badge: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  },
  amber: {
    tab: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    accent: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  },
};

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("web");
  const tab = tabs.find((t) => t.id === activeTab) ?? tabs[0];
  const colors = colorMap[tab.color];

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-24 lg:px-10">
      {/* Header */}
      <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            What we build
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Full-stack delivery,
            <br className="hidden sm:block" /> zero compromise
          </h2>
        </div>
        <Link
          href="/services"
          className="group flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          All services
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="transition-transform group-hover:translate-x-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* Tab switcher */}
      <div className="mb-8 flex flex-wrap gap-2">
        {tabs.map((t) => {
          const c = colorMap[t.color];
          const isActive = t.id === activeTab;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={cn(
                "flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all",
                isActive
                  ? c.tab
                  : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-neutral-200"
              )}
            >
              <span className="text-base leading-none">{t.emoji}</span>
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Dashboard panel */}
      <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-neutral-900/50">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_340px]">

          {/* Left: info */}
          <div className="flex flex-col justify-between p-8 lg:p-10">
            <div>
              <div className={cn("mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold", colors.badge)}>
                <span className={cn("h-1.5 w-1.5 rounded-full", colors.accent)} />
                {tab.label}
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                {tab.tagline}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-lg">
                {tab.description}
              </p>

              {/* Metrics */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                {tab.metrics.map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">{value}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{label}</div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {tab.stack.map((s) => (
                  <span key={s} className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link
                href={`/services/${tab.id}`}
                className="inline-flex h-9 items-center gap-2 rounded-lg bg-black px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-100"
              >
                Learn more about {tab.label}
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: live preview */}
          <div className="border-t border-neutral-200 bg-neutral-100/50 p-6 dark:border-white/10 dark:bg-white/[0.02] lg:border-l lg:border-t-0">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Live preview
            </p>
            <div className="h-[320px]">
              {tab.preview}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
