import Link from "next/link";

const services = [
  {
    color: "bg-violet-500",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    name: "Web Development",
    desc: "Next.js, TypeScript & modern APIs built to scale",
    href: "/services/web-development",
    tags: ["Next.js", "TypeScript", "REST / GraphQL"],
  },
  {
    color: "bg-blue-500",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
      </svg>
    ),
    name: "Mobile Apps",
    desc: "Cross-platform iOS & Android with React Native",
    href: "/services/mobile",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    color: "bg-pink-500",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
    name: "UI/UX Design",
    desc: "Beautiful interfaces users genuinely want to use",
    href: "/services/design",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    color: "bg-amber-500",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    name: "Tech Consulting",
    desc: "Architecture, strategy & team augmentation",
    href: "/services/consulting",
    tags: ["CTO-as-a-Service", "Audits", "Roadmaps"],
  },
  {
    color: "bg-cyan-500",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 6 0m-6 0H3m16.5 0a3 3 0 0 0 3-3m-3 3a3 3 0 1 1-6 0m6 0h1.5m-7.5 0v-8.25" />
      </svg>
    ),
    name: "Cloud & DevOps",
    desc: "CI/CD pipelines, AWS/GCP, Docker & Kubernetes",
    href: "/services/devops",
    tags: ["AWS", "Docker", "CI/CD"],
  },
];

const highlight = {
  title: "End-to-end delivery",
  desc: "From MVP to enterprise scale — we own the full product lifecycle so you don't have to juggle vendors.",
  href: "/services",
};

export function ServicesDropdown() {
  return (
    <div className="flex w-[620px]">
      {/* Left: service list */}
      <div className="flex-1 p-4">
        <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Our capabilities
        </p>
        <div className="space-y-0.5">
          {services.map(({ color, icon, name, desc, href, tags }) => (
            <Link
              key={name}
              href={href}
              className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-neutral-50 dark:hover:bg-white/[0.04]"
            >
              <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${color}`}>
                {icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-neutral-800 group-hover:text-neutral-900 dark:text-neutral-200 dark:group-hover:text-white">
                    {name}
                  </p>
                </div>
                <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">{desc}</p>
                <div className="mt-1 flex gap-1">
                  {tags.map((t) => (
                    <span key={t} className="rounded-full border border-neutral-200 bg-white px-1.5 py-0.5 text-[9px] text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right: highlight panel */}
      <div className="w-[180px] shrink-0 border-l border-neutral-100 bg-neutral-50 p-5 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-black dark:bg-white">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" className="dark:stroke-black" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        </div>
        <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-tight">
          {highlight.title}
        </p>
        <p className="mt-1.5 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
          {highlight.desc}
        </p>
        <Link
          href={highlight.href}
          className="mt-4 flex items-center gap-1 text-xs font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors"
        >
          All services
          <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
