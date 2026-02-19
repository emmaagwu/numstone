import Link from "next/link";

const col1 = [
  {
    color: "bg-violet-500",
    name: "School Management System",
    desc: "End-to-end school operations — admissions, fees, attendance, exams, and parent portal.",
    tag: "Most Popular",
    tagColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    href: "/products/school-management",
    preview: (
      <div className="mt-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3 text-[10px] dark:border-white/5 dark:bg-white/5">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          <span className="font-medium text-neutral-500 dark:text-neutral-400">St. Mary&apos;s Academy · Live</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[["Students", "1,240"], ["Teachers", "86"], ["Classes", "42"]].map(([l, v]) => (
            <div key={l} className="rounded-lg bg-white p-2 text-center shadow-sm dark:bg-white/10">
              <div className="font-bold text-neutral-800 dark:text-neutral-100">{v}</div>
              <div className="text-neutral-400 dark:text-neutral-500">{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    color: "bg-orange-500",
    name: "Inventory Management",
    desc: "Real-time stock tracking, automated reorders, barcode scanning and supplier management.",
    href: "/products/inventory",
    preview: (
      <div className="mt-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3 text-[10px] dark:border-white/5 dark:bg-white/5">
        <div className="mb-2 text-neutral-400 dark:text-neutral-500 font-medium">Stock Levels</div>
        {[["Electronics", 78], ["Fashion", 42], ["Food & FMCG", 91]].map(([l, v]) => (
          <div key={l as string} className="mb-1.5">
            <div className="flex justify-between text-neutral-500 dark:text-neutral-400 mb-0.5"><span>{l}</span><span>{v}%</span></div>
            <div className="h-1 rounded-full bg-neutral-200 dark:bg-white/10">
              <div className="h-1 rounded-full bg-orange-400" style={{ width: `${v}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const col2 = [
  {
    color: "bg-blue-500",
    name: "Learning Management System",
    desc: "Host courses, track learner progress, issue certificates, and run live virtual classes.",
    tag: "New",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    href: "/products/lms",
    preview: (
      <div className="mt-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3 text-[10px] dark:border-white/5 dark:bg-white/5">
        <div className="mb-2 text-neutral-400 dark:text-neutral-500 font-medium">Course Progress</div>
        {[["React Masterclass", 82], ["UI/UX Design", 47], ["Node.js API", 65]].map(([l, v]) => (
          <div key={l as string} className="mb-1.5">
            <div className="flex justify-between text-neutral-500 dark:text-neutral-400 mb-0.5"><span>{l}</span><span>{v}%</span></div>
            <div className="h-1 rounded-full bg-neutral-200 dark:bg-white/10">
              <div className="h-1 rounded-full bg-blue-400" style={{ width: `${v}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    color: "bg-rose-500",
    name: "HR & Payroll System",
    desc: "Manage employees, automate payroll, track leave, run performance reviews & organogram.",
    href: "/products/hr-payroll",
    preview: (
      <div className="mt-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3 text-[10px] dark:border-white/5 dark:bg-white/5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-neutral-400 dark:text-neutral-500 font-medium">This Month Payroll</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">✓ Processed</span>
        </div>
        <div className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1">₦8,420,000</div>
        <div className="flex gap-2 text-[9px] text-neutral-400 dark:text-neutral-500">
          <span>48 employees</span><span>·</span><span>0 pending</span>
        </div>
      </div>
    ),
  },
];

const col3 = [
  {
    color: "bg-emerald-500",
    name: "Point of Sale (POS)",
    desc: "Modern POS for retail & restaurants — multi-location, inventory sync, and mobile payments.",
    tag: "Enterprise",
    tagColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    href: "/products/pos",
    preview: (
      <div className="mt-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3 text-[10px] dark:border-white/5 dark:bg-white/5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-neutral-400 dark:text-neutral-500 font-medium">Today&apos;s Sales</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">+18.4%</span>
        </div>
        <div className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-2">₦1,248,500</div>
        <div className="flex items-end gap-0.5 h-8">
          {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-emerald-200 dark:bg-emerald-800" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    color: "bg-cyan-500",
    name: "CRM & Sales Pipeline",
    desc: "Track leads, manage deals, automate follow-ups and close more sales with AI-powered insights.",
    href: "/products/crm",
    preview: (
      <div className="mt-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3 text-[10px] dark:border-white/5 dark:bg-white/5">
        <div className="mb-2 text-neutral-400 dark:text-neutral-500 font-medium">Pipeline</div>
        {[["Qualified", "12 deals", "bg-cyan-400"], ["Proposal", "8 deals", "bg-blue-400"], ["Closing", "5 deals", "bg-emerald-400"]].map(([l, v, c]) => (
          <div key={l as string} className="mb-1 flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${c}`} />
            <span className="text-neutral-600 dark:text-neutral-300">{l}</span>
            <span className="ml-auto text-neutral-400 dark:text-neutral-500">{v}</span>
          </div>
        ))}
      </div>
    ),
  },
];

function ProductCard({ color, name, desc, tag, tagColor, href, preview }: {
  color: string; name: string; desc: string; tag?: string;
  tagColor?: string; href: string; preview: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-neutral-100 bg-white p-4 transition-all hover:border-neutral-200 hover:shadow-md dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-white/10 dark:hover:bg-white/[0.06]"
    >
      <div className="flex items-start gap-2.5">
        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${color}`}>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <p className="text-sm font-semibold leading-tight text-neutral-900 dark:text-neutral-100">{name}</p>
            {tag && <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${tagColor}`}>{tag}</span>}
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">{desc}</p>
        </div>
      </div>
      {preview}
    </Link>
  );
}

export function ProductsDropdown() {
  return (
    <div className="p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-white/5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Ready-made SaaS Products
        </p>
        <Link
          href="/products"
          className="flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors dark:text-neutral-400 dark:hover:text-white"
        >
          View all products
          <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* 3 equal columns */}
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-3">
          {col1.map((p) => <ProductCard key={p.name} {...p} preview={p.preview} />)}
        </div>
        <div className="flex flex-col gap-3">
          {col2.map((p) => <ProductCard key={p.name} {...p} preview={p.preview} />)}
        </div>
        <div className="flex flex-col gap-3">
          {col3.map((p) => <ProductCard key={p.name} {...p} preview={p.preview} />)}
        </div>
      </div>
    </div>
  );
}
