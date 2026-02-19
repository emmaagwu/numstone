import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    name: "Web Development",
    desc: "Scalable, high-performance web applications",
    href: "/services/web-development",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
      </svg>
    ),
    name: "Mobile Apps",
    desc: "iOS & Android apps built with React Native",
    href: "/services/mobile",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
    name: "UI/UX Design",
    desc: "Beautiful, intuitive product design",
    href: "/services/design",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    name: "Tech Consulting",
    desc: "Strategic guidance for your technology decisions",
    href: "/services/consulting",
  },
];

export function ServicesDropdown() {
  return (
    <div className="w-[420px] p-3">
      <p className="mb-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
        What we build
      </p>
      <div className="grid grid-cols-1 gap-0.5">
        {services.map(({ icon, name, desc, href }) => (
          <Link
            key={name}
            href={href}
            className="group flex items-start gap-3.5 rounded-xl px-3 py-3 transition-colors hover:bg-neutral-50"
          >
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 shadow-sm transition-colors group-hover:border-neutral-300 group-hover:text-neutral-900">
              {icon}
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-800 group-hover:text-neutral-900">
                {name}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">{desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
