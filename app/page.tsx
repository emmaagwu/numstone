import Link from "next/link";
import { CTASection } from "../components/CTASection";

const stats = [
  { label: "Projects delivered", value: "150+" },
  { label: "Satisfied clients", value: "90+" },
  { label: "Years building", value: "8+" },
  { label: "Engineers on team", value: "30+" },
];

const services = [
  {
    emoji: "💻",
    color: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-100 dark:border-violet-900/50",
    title: "Web Development",
    desc: "Next.js, TypeScript & modern APIs — built to scale from day one.",
  },
  {
    emoji: "📱",
    color: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-100 dark:border-blue-900/50",
    title: "Mobile Apps",
    desc: "Cross-platform React Native apps for iOS & Android that users love.",
  },
  {
    emoji: "✦",
    color: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-rose-100 dark:border-rose-900/50",
    title: "UI/UX Design",
    desc: "Clean, intuitive interfaces that convert visitors into loyal customers.",
  },
  {
    emoji: "⚡",
    color: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-100 dark:border-amber-900/50",
    title: "Tech Consulting",
    desc: "Architecture reviews, team augmentation, and technology strategy.",
  },
];

const products = [
  { name: "School Management System", href: "/products/school-management", tag: "Most Popular" },
  { name: "Learning Management System", href: "/products/lms", tag: "New" },
  { name: "Point of Sale (POS)", href: "/products/pos" },
  { name: "Inventory Management", href: "/products/inventory" },
  { name: "HR & Payroll", href: "/products/hr-payroll" },
  { name: "CRM & Sales Pipeline", href: "/products/crm" },
];

const trustedBy = ["Dangote", "Zenith Bank", "GTBank", "MTN", "Flutterwave", "Paystack"];

export default function HomePage() {
  return (
    <main className="dark:bg-neutral-950">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100vh-56px)] flex-col items-center justify-center overflow-hidden px-4 text-center">
        {/* Grid backdrop */}
        <div
          className="pointer-events-none absolute inset-0 dark:opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(124,58,237,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Trust badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Nigeria&apos;s #1 Rated Software Agency · Trusted by 90+ businesses
          </div>

          {/* Main headline */}
          <h1 className="text-balance text-5xl font-semibold leading-[1.08] tracking-[-0.04em] text-neutral-900 dark:text-white sm:text-6xl lg:text-[4.5rem]">
            We don&apos;t just build software.
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">
              We build your competitive edge.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
            Numstone is Nigeria&apos;s most trusted software partner — delivering world-class web apps,
            mobile solutions, enterprise SaaS products, and digital experiences for businesses
            that refuse to be average.
          </p>

          {/* Credential chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
              🥇 <span><strong className="text-neutral-900 dark:text-white">#1 Rated</strong> Software Agency in Nigeria</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
              🚀 <span><strong className="text-neutral-900 dark:text-white">Top Ranked</strong> System Developers</span>
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/get-started"
              className="flex h-12 items-center gap-2.5 rounded-xl bg-black px-7 text-sm font-semibold text-white shadow-sm transition-all hover:bg-neutral-800 hover:shadow-md dark:bg-white dark:text-black dark:hover:bg-neutral-100"
            >
              Start your project
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="flex h-12 items-center rounded-xl border border-neutral-200 bg-white px-7 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-neutral-300 hover:bg-neutral-50 dark:border-white/10 dark:bg-transparent dark:text-neutral-200 dark:hover:bg-white/5"
            >
              Book consultation
            </Link>
          </div>

          {/* Capability tags */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {["Custom Software Development", "IT Training & Internships", "AI & DevOps Solutions", "Enterprise SaaS"].map((tag) => (
              <span key={tag} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400">
                {tag}
              </span>
            ))}
          </div>

          {/* Trusted by */}
          <div className="mt-14">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Trusted by leading Nigerian businesses
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {trustedBy.map((name) => (
                <span key={name} className="text-sm font-bold text-neutral-200 dark:text-neutral-700">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="border-y border-neutral-100 bg-neutral-50/80 dark:border-white/10 dark:bg-neutral-900/20">
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 px-4 lg:grid-cols-4 lg:px-10">
          {stats.map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-1 px-8 py-12 ${i < 3 ? "border-r border-neutral-100 dark:border-white/10" : ""}`}
            >
              <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {value}
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-4 py-24 lg:px-10">
        <div className="mb-14">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            What we build
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Full-stack delivery,
              <br className="hidden sm:block" /> zero compromise
            </h2>
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
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ emoji, color, border, title, desc }) => (
            <div
              key={title}
              className={`group rounded-2xl border ${border} ${color} p-6 transition-all hover:shadow-md`}
            >
              <div className="mb-4 text-2xl">{emoji}</div>
              <h3 className="mb-2 text-sm font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────────────── */}
      <section className="border-t border-neutral-100 bg-neutral-50/80 dark:border-white/10 dark:bg-neutral-900/20">
        <div className="mx-auto max-w-screen-xl px-4 py-24 lg:px-10">
          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Ready-made SaaS
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                Launch faster with
                <br /> our proven products
              </h2>
              <p className="mt-3 max-w-md text-neutral-500 dark:text-neutral-400">
                Battle-tested SaaS products you can deploy today — customised for your brand and business.
              </p>
            </div>
            <Link
              href="/products"
              className="group flex items-center gap-1 self-start text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white sm:self-auto"
            >
              See all products
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="transition-transform group-hover:translate-x-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(({ name, href, tag }) => (
              <Link
                key={name}
                href={href}
                className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-sm dark:border-white/10 dark:bg-neutral-900/50 dark:hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 dark:bg-white/10">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-neutral-600 dark:text-neutral-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {tag && (
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-white/10 dark:text-neutral-300">
                      {tag}
                    </span>
                  )}
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-neutral-300 transition-transform group-hover:translate-x-0.5 dark:text-neutral-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <CTASection />

    </main>
  );
}
