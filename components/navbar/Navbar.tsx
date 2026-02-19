"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { NavLogo } from "./NavLogo";
import { MobileMenu } from "./MobileMenu";
import { ServicesDropdown } from "./dropdowns/ServicesDropdown";
import { CompanyDropdown } from "./dropdowns/CompanyDropdown";

export const navItems = [
  {
    name: "Services",
    dropdown: ServicesDropdown,
    segments: ["/services", "/web-development", "/mobile", "/design", "/consulting"],
  },
  {
    name: "Work",
    href: "/work",
    segments: ["/work", "/case-studies"],
  },
  {
    name: "Company",
    dropdown: CompanyDropdown,
    segments: ["/about", "/blog", "/careers", "/contact"],
  },
  {
    name: "Pricing",
    href: "/pricing",
    segments: ["/pricing"],
  },
];

function useScroll(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

function AnimatedChevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      fill="none"
      viewBox="0 0 9 9"
      className={cn(
        "ml-1.5 text-neutral-500 transition-transform duration-200",
        isOpen && "rotate-180"
      )}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.278 3.389 4.5 6.167 1.722 3.389"
      />
    </svg>
  );
}

export function Navbar() {
  const scrolled = useScroll(40);
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      ref={navRef}
      className="sticky inset-x-0 top-0 z-50 w-full transition-all"
    >
      {/* Background layer */}
      <div
        className={cn(
          "absolute inset-0 border-b border-transparent transition-all duration-300",
          scrolled
            ? "border-neutral-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0a]/80"
            : "bg-transparent"
        )}
      />

      <div className="relative mx-auto flex h-14 w-full max-w-screen-xl items-center justify-between px-4 lg:px-10">
        {/* Logo */}
        <div className="flex grow basis-0">
          <Link href="/" className="flex items-center gap-2 py-2 pr-2">
            <NavLogo />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="relative hidden lg:flex">
          <ul className="group flex items-center">
            {navItems.map(({ name, href, dropdown: Dropdown, segments }) => {
              const isActive = segments.some((s) => pathname?.startsWith(s));
              const isOpen = openDropdown === name;

              return (
                <li key={name} className="relative">
                  {href !== undefined ? (
                    <Link
                      href={href}
                      className={cn(
                        "relative flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                        "text-neutral-600 hover:text-neutral-900",
                        "hover:bg-neutral-900/5",
                        isActive && "bg-neutral-900/5 text-neutral-900",
                        // Fade active bg when sibling is hovered
                        "group-has-[li:hover_a:not([href='" + href + "'])]:bg-transparent"
                      )}
                    >
                      {name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : name)}
                      onMouseEnter={() => setOpenDropdown(name)}
                      className={cn(
                        "group/item relative flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                        "text-neutral-600 hover:text-neutral-900",
                        "hover:bg-neutral-900/5",
                        (isActive || isOpen) && "bg-neutral-900/5 text-neutral-900"
                      )}
                    >
                      {name}
                      <AnimatedChevron isOpen={isOpen} />
                    </button>
                  )}

                  {/* Dropdown */}
                  {Dropdown && isOpen && (
                    <div
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={cn(
                        "absolute left-1/2 top-full mt-3 -translate-x-1/2",
                        "animate-in fade-in zoom-in-95 slide-in-from-top-1 duration-150"
                      )}
                    >
                      <div className="overflow-hidden rounded-[20px] border border-neutral-200 bg-white shadow-lg">
                        <Dropdown />
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden grow basis-0 items-center justify-end gap-2 lg:flex">
          <Link
            href="/contact"
            className={cn(
              "flex h-8 items-center rounded-lg border border-neutral-200 bg-white px-4 text-sm font-medium",
              "text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900",
              "shadow-sm"
            )}
          >
            Contact us
          </Link>
          <Link
            href="/get-started"
            className={cn(
              "flex h-8 items-center rounded-lg border border-black bg-black px-4 text-sm font-medium",
              "text-white transition-colors hover:bg-neutral-800",
              "shadow-sm"
            )}
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative flex items-center justify-center rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open menu</span>
          <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
            <span
              className={cn(
                "h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 origin-center",
                mobileOpen && "translate-y-[6.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-5 rounded-full bg-current transition-all duration-300",
                mobileOpen && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 origin-center",
                mobileOpen && "-translate-y-[6.5px] -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
