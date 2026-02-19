import Link from "next/link";

const primaryProducts = [
  {
    color: "bg-violet-500",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    name: "School Management System",
    desc: "Complete end-to-end solution for schools — admissions, academics, fees, attendance, and parent portal.",
    tag: "Most Popular",
    tagColor: "bg-violet-100 text-violet-700",
    href: "/products/school-management",
    preview: (
      <div className="mt-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3 text-[10px]">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          <span className="font-medium text-neutral-500">St. Mary's Academy</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {["Students 1,240", "Teachers 86", "Subjects 48"].map((s) => (
            <div key={s} className="rounded-lg bg-white p-1.5 text-center">
              <div className="font-semibold text-neutral-800">{s.split(" ")[1]}</div>
              <div className="text-neutral-400">{s.split(" ")[0]}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    color: "bg-blue-500",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    name: "Learning Management System",
    desc: "Deliver online courses, track learner progress, manage certifications, and run live classes seamlessly.",
    tag: "New",
    tagColor: "bg-blue-100 text-blue-700",
    href: "/products/lms",
    preview: (
      <div className="mt-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3 text-[10px]">
        <div className="mb-2 text-neutral-400 font-medium">Course Progress</div>
        {[["React Masterclass", 82], ["UI/UX Design", 47], ["Node.js API", 65]].map(([label, pct]) => (
          <div key={label as string} className="mb-1.5">
            <div className="flex justify-between text-neutral-500 mb-0.5">
              <span>{label}</span><span>{pct}%</span>
            </div>
            <div className="h-1 rounded-full bg-neutral-200">
              <div className="h-1 rounded-full bg-blue-400" style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    color: "bg-emerald-500",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    name: "Point of Sale (POS)",
    desc: "Modern POS for retail & restaurants. Real-time inventory, multi-location, receipt printing & mobile payments.",
    tag: "Enterprise",
    tagColor: "bg-emerald-100 text-emerald-700",
    href: "/products/pos",
    preview: (
      <div className="mt-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3 text-[10px]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-neutral-400 font-medium">Today&apos;s Sales</span>
          <span className="text-emerald-600 font-semibold">+18.4%</span>
        </div>
        <div className="text-xl font-bold text-neutral-800 mb-1">₦1,248,500</div>
        <div className="flex gap-1 mt-1">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-emerald-200" style={{ height: `${h * 0.3}px` }} />
          ))}
        </div>
      </div>
    ),
  },
];

const secondaryProducts = [
  {
    color: "bg-orange-500",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    name: "Inventory Management",
    desc: "Track stock levels, automate reorders, manage suppliers, and get real-time warehouse visibility.",
    href: "/products/inventory",
    tags: ["Warehousing", "Barcode Scanning", "Multi-location", "Purchase Orders"],
  },
  {
    color: "bg-rose-500",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    name: "HR & Payroll",
    desc: "Automate payroll, leave management, employee onboarding and performance tracking.",
    href: "/products/hr-payroll",
    tags: ["Payroll", "Leave Tracking", "Performance", "Organogram"],
  },
  {
    color: "bg-cyan-500",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    name: "CRM & Sales Pipeline",
    desc: "Manage customers, track deals, automate follow-ups and close more sales with smart insights.",
    href: "/products/crm",
    tags: ["Lead Tracking", "Email Automation", "Pipeline", "Analytics"],
  },
];

export function ProductsDropdown() {
  return (
    <div className="w-[80vw] max-w-[1100px] p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
          Ready-made SaaS Products
        </p>
        <Link
          href="/products"
          className="flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-800 transition-colors"
        >
          View all products
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* Primary row — 3 large cards */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        {primaryProducts.map(({ color, icon, name, desc, tag, tagColor, href, preview }) => (
          <Link
            key={name}
            href={href}
            className="group relative rounded-2xl border border-neutral-100 bg-white p-4 transition-all hover:border-neutral-200 hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${color}`}>
                {icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-semibold text-neutral-900 group-hover:text-black leading-tight">{name}</p>
                  {tag && (
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${tagColor}`}>{tag}</span>
                  )}
                </div>
                <p className="mt-1 text-[12px] leading-relaxed text-neutral-500">{desc}</p>
              </div>
            </div>
            {preview}
          </Link>
        ))}
      </div>

      {/* Secondary row — 3 wider cards */}
      <div className="grid grid-cols-3 gap-3">
        {secondaryProducts.map(({ color, icon, name, desc, href, tags }) => (
          <Link
            key={name}
            href={href}
            className="group flex items-start gap-3 rounded-2xl border border-neutral-100 bg-neutral-50 p-4 transition-all hover:border-neutral-200 hover:bg-white hover:shadow-sm"
          >
            <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${color} mt-0.5`}>
              {icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-800 group-hover:text-neutral-900">{name}</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-neutral-500">{desc}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[10px] text-neutral-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
