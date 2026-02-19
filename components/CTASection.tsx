import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-neutral-100 bg-white dark:border-white/10 dark:bg-neutral-950">
      {/* Subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 100% 100% at 50% 0%, black 30%, transparent 80%)",
          opacity: 0.4,
        }}
      />

      <div className="relative mx-auto max-w-screen-xl px-4 py-28 lg:px-10">
        <div className="flex flex-col items-center gap-8 text-center">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Now accepting new projects — limited Q2 spots remaining
          </div>

          {/* Headline */}
          <div className="max-w-3xl">
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
              Your next breakthrough
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">starts with one conversation</span>
            </h2>
          </div>

          {/* Subtext */}
          <p className="max-w-lg text-balance text-lg text-neutral-500 dark:text-neutral-400">
            From idea to live product — Numstone delivers world-class software that drives real business results.
            We are Nigeria&apos;s most trusted software partner.
          </p>

          {/* Social proof chips */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            {[
              { icon: "⚡", text: "Fast delivery, no excuses" },
              { icon: "🏆", text: "#1 Rated in Nigeria" },
              { icon: "🔐", text: "Enterprise-grade security" },
              { icon: "🌍", text: "World-class standards" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/get-started"
              className="flex h-12 items-center gap-2 rounded-xl bg-black px-8 text-sm font-semibold text-white shadow-md transition-all hover:bg-neutral-800 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-neutral-100"
            >
              Start your project
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="flex h-12 items-center rounded-xl border border-neutral-200 bg-white px-8 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-neutral-300 hover:bg-neutral-50 dark:border-white/10 dark:bg-transparent dark:text-neutral-200 dark:hover:bg-white/5"
            >
              Book a free consultation
            </Link>
          </div>

          {/* Trust line */}
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            No commitment required · Response within 24 hours · Free initial review
          </p>
        </div>
      </div>
    </section>
  );
}
