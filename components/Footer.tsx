import Link from "next/link";
import { NavLogo } from "./navbar/NavLogo";

const footerLinks = [
  {
    label: "Services",
    links: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Apps", href: "/services/mobile" },
      { name: "UI/UX Design", href: "/services/design" },
      { name: "Tech Consulting", href: "/services/consulting" },
      { name: "Cloud & DevOps", href: "/services/devops" },
    ],
  },
  {
    label: "Products",
    links: [
      { name: "School Management", href: "/products/school-management" },
      { name: "LMS Platform", href: "/products/lms" },
      { name: "Point of Sale", href: "/products/pos" },
      { name: "Inventory System", href: "/products/inventory" },
      { name: "HR & Payroll", href: "/products/hr-payroll" },
      { name: "CRM & Sales", href: "/products/crm" },
    ],
  },
  {
    label: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Customers", href: "/work" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
  {
    label: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Pricing", href: "/pricing" },
      { name: "Changelog", href: "/changelog" },
      { name: "Status", href: "/status" },
    ],
  },
];

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "https://twitter.com/numstone",
    icon: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/numstone",
    icon: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/numstone",
    icon: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@numstone",
    icon: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-950">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-10">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-8 py-14 sm:grid-cols-3 lg:grid-cols-[220px_1fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-5">
            <NavLogo />
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-[190px]">
              Nigeria&apos;s premier software agency for ambitious businesses.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900 dark:border-white/10 dark:text-neutral-400 dark:hover:border-white/20 dark:hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              All systems operational
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ label, links }) => (
            <div key={label} className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-900 dark:text-white">
                {label}
              </p>
              <ul className="space-y-2.5">
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-100 py-6 sm:flex-row dark:border-white/10">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            © {new Date().getFullYear()} Numstone Technologies Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500">
            <span>Made with</span>
            <span className="text-rose-500">♥</span>
            <span>in Nigeria 🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
