"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { navItems, mobileSubLinks } from "./Navbar";

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "overflow-hidden border-b border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-950 transition-all duration-300 lg:hidden",
        isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <nav className="mx-auto max-w-screen-xl px-4 pb-6 pt-2">
        <ul className="space-y-0.5">
          {navItems.map(({ name, href, segments }) => {
            const hasChildren = !!mobileSubLinks[name];
            const isExpanded = openSection === name;
            const isActive = segments.some((s) => pathname?.startsWith(s));

            return (
              <li key={name}>
                {href !== undefined ? (
                  <Link
                    href={href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900",
                      "dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white",
                      isActive && "bg-neutral-50 text-neutral-900 dark:bg-white/5 dark:text-white"
                    )}
                  >
                    {name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setOpenSection(isExpanded ? null : name)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900",
                        "dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white"
                      )}
                    >
                      {name}
                      <svg
                        width="12" height="12" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth={2}
                        className={cn("transition-transform duration-200 text-neutral-400", isExpanded && "rotate-180")}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {hasChildren && isExpanded && (
                      <ul className="ml-3 mt-0.5 border-l border-neutral-100 dark:border-white/10 pl-3 space-y-0.5 pb-1">
                        {mobileSubLinks[name].map(({ name: subName, href: subHref }) => (
                          <li key={subName}>
                            <Link
                              href={subHref}
                              onClick={onClose}
                              className={cn(
                                "block rounded-lg px-3 py-2 text-sm transition-colors",
                                "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900",
                                "dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white"
                              )}
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
        <div className="mt-4 flex flex-col gap-2 border-t border-neutral-100 dark:border-white/10 pt-4">
          <Link
            href="/contact"
            onClick={onClose}
            className={cn(
              "flex h-10 items-center justify-center rounded-xl border text-sm font-medium transition-colors",
              "border-neutral-200 text-neutral-700 hover:bg-neutral-50",
              "dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/5"
            )}
          >
            Contact us
          </Link>
          <Link
            href="/get-started"
            onClick={onClose}
            className={cn(
              "flex h-10 items-center justify-center rounded-xl text-sm font-medium transition-colors",
              "bg-black text-white hover:bg-neutral-800",
              "dark:bg-white dark:text-black dark:hover:bg-neutral-100"
            )}
          >
            Get started
          </Link>
        </div>
      </nav>
    </div>
  );
}
