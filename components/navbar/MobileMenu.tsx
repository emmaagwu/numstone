"use client";

import Link from "next/link";
import { cn } from "../../lib/utils";
import { navItems } from "./Navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const mobileSubLinks: Record<string, { name: string; href: string }[]> = {
    Services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Apps", href: "/services/mobile" },
      { name: "UI/UX Design", href: "/services/design" },
      { name: "Tech Consulting", href: "/services/consulting" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <div
      className={cn(
        "overflow-hidden border-b border-neutral-200 bg-white transition-all duration-300 lg:hidden",
        isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <nav className="mx-auto max-w-screen-xl px-4 pb-6 pt-2">
        <ul className="space-y-0.5">
          {navItems.map(({ name, href, dropdown }) => {
            const hasChildren = !!dropdown && mobileSubLinks[name];
            const isExpanded = openSection === name;

            return (
              <li key={name}>
                {href !== undefined ? (
                  <Link
                    href={href}
                    onClick={onClose}
                    className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                  >
                    {name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setOpenSection(isExpanded ? null : name)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                    >
                      {name}
                      <svg
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className={cn(
                          "transition-transform duration-200 text-neutral-400",
                          isExpanded && "rotate-180"
                        )}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {hasChildren && isExpanded && (
                      <ul className="ml-3 mt-0.5 border-l border-neutral-100 pl-3 space-y-0.5">
                        {mobileSubLinks[name].map(({ name: subName, href: subHref }) => (
                          <li key={subName}>
                            <Link
                              href={subHref}
                              onClick={onClose}
                              className="block rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                            >
                              {subName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile CTAs */}
        <div className="mt-4 flex flex-col gap-2 border-t border-neutral-100 pt-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex h-10 items-center justify-center rounded-lg border border-neutral-200 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            Contact us
          </Link>
          <Link
            href="/get-started"
            onClick={onClose}
            className="flex h-10 items-center justify-center rounded-lg bg-black text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Get started
          </Link>
        </div>
      </nav>
    </div>
  );
}
