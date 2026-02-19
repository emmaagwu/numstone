import Link from "next/link";

const trustedBy = [
  "Stripe", "Vercel", "Linear", "Notion", "Figma", "Loom",
];

const stats = [
  { label: "Projects shipped", value: "120+" },
  { label: "Happy clients", value: "80+" },
  { label: "Years of experience", value: "8+" },
  { label: "Engineers", value: "25+" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-56px)] flex-col items-center justify-center overflow-hidden px-4 text-center">
        {/* Grid background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />

        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,0,0,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600 shadow-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Now accepting projects for Q2 2026
          </div>

          {/* Headline */}
          <h1 className="text-balance text-5xl font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-6xl lg:text-[72px]">
            We build software
            <br />
            <span className="text-neutral-400">your users will love</span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-neutral-500">
            Numstone is a software agency crafting high-performance web apps, mobile apps,
            and digital products for ambitious businesses worldwide.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/get-started"
              className="flex h-11 items-center gap-2 rounded-xl bg-black px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-800 hover:shadow-md"
            >
              Start a project
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/work"
              className="flex h-11 items-center rounded-xl border border-neutral-200 bg-white px-6 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-neutral-300 hover:bg-neutral-50"
            >
              View our work
            </Link>
          </div>

          {/* Social proof */}
          <p className="mt-12 text-xs font-medium uppercase tracking-widest text-neutral-400">
            Trusted by teams at
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustedBy.map((name) => (
              <span key={name} className="text-sm font-semibold text-neutral-300">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-neutral-100 bg-neutral-50">
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 divide-x divide-neutral-100 px-4 lg:grid-cols-4 lg:px-10">
          {stats.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1 px-8 py-10">
              <span className="text-3xl font-semibold tracking-tight text-neutral-900">
                {value}
              </span>
              <span className="text-sm text-neutral-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-screen-xl px-4 py-24 lg:px-10">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            What we do
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Full-stack software delivery
          </h2>
          <p className="mt-4 text-neutral-500">
            From discovery to deployment, we own the entire product lifecycle so you can
            focus on your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "💻",
              title: "Web Development",
              desc: "Next.js, TypeScript, and modern APIs — built to scale.",
            },
            {
              icon: "📱",
              title: "Mobile Apps",
              desc: "Cross-platform React Native apps for iOS & Android.",
            },
            {
              icon: "✦",
              title: "UI/UX Design",
              desc: "Clean, intuitive interfaces users actually enjoy using.",
            },
            {
              icon: "⚡",
              title: "Tech Consulting",
              desc: "Architecture reviews, hiring, and technology strategy.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all hover:border-neutral-200 hover:shadow-md"
            >
              <div className="mb-4 text-2xl">{icon}</div>
              <h3 className="mb-2 text-sm font-semibold text-neutral-900">{title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-t border-neutral-100">
        <div className="mx-auto max-w-screen-xl px-4 py-24 lg:px-10">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-neutral-900 px-8 py-16 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to build something great?
            </h2>
            <p className="max-w-md text-neutral-400">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="flex h-11 items-center rounded-xl bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-neutral-100"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row lg:px-10">
          <span className="text-sm font-semibold tracking-tight text-neutral-900">numstone</span>
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Numstone. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
