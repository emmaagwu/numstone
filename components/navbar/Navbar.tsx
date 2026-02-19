"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { NavLogo } from "./NavLogo";
import { MobileMenu } from "./MobileMenu";
import { ServicesDropdown } from "./dropdowns/ServicesDropdown";
import { ProductsDropdown } from "./dropdowns/ProductsDropdown";
import { CompanyDropdown } from "./dropdowns/CompanyDropdown";

export const navItems = [
  {
    name: "Services",
    dropdown: ServicesDropdown,
    wide: false,
    segments: ["/services", "/web-development", "/mobile", "/design", "/consulting"],
  },
  {
    name: "Products",
    dropdown: ProductsDropdown,
    wide: true,
    segments: ["/products"],
  },
  {
    name: "Work",
    href: "/work",
    segments: ["/work", "/case-studies"],
  },
  {
    name: "Company",
    dropdown: CompanyDropdown,
    wide: false,
    segments: ["/about", "/blog", "/careers", "/contact"],
  },
  {
    name: "Pricing",
    href: "/pricing",
    segments: ["/pricing"],
  },
];

export const mobileSubLinks: Record<string, { name: string; href: string }[]> = {
  Services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile" },
    { name: "UI/UX Design", href: "/services/design" },
    { name: "Tech Consulting", href: "/services/consulting" },
  ],
  Products: [
    { name: "School Management", href: "/products/school-management" },
    { name: "LMS", href: "/products/lms" },
    { name: "Point of Sale", href: "/products/pos" },
    { name: "Inventory System", href: "/products/inventory" },
    { name: "HR & Payroll", href: "/products/hr-payroll" },
    { name: "CRM & Sales", href: "/products/crm" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};

function useScroll(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > threshold);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, [threshold]);
  return scrolled;
}

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Light is always the default — only persist user's explicit choice
    const stored = localStorage.getItem("numstone-theme") as "light" | "dark" | null;
    const initial = stored ?? "light";
    setTheme(initial);
    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("numstone-theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return { theme, toggle };
}

function SunIcon() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  );
}

function AnimatedChevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9" height="9" fill="none" viewBox="0 0 9 9"
      className={cn("ml-1.5 text-neutral-400 dark:text-neutral-500 transition-transform duration-200", isOpen && "rotate-180")}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.278 3.389 4.5 6.167 1.722 3.389" />
    </svg>
  );
}

export function Navbar() {
  const scrolled = useScroll(40);
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header ref={navRef} className="sticky inset-x-0 top-0 z-50 w-full transition-all">
      {/* Glass background */}
      <div
        className={cn(
          "absolute inset-0 border-b border-transparent transition-all duration-300",
          scrolled
            ? "border-neutral-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/85"
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

        {/* Desktop Nav */}
        <nav className="relative hidden lg:flex" onMouseLeave={() => setOpenDropdown(null)}>
          <ul className="group flex items-center">
            {navItems.map(({ name, href, dropdown: Dropdown, wide, segments }) => {
              const isActive = segments.some((s) => pathname?.startsWith(s));
              const isOpen = openDropdown === name;

              return (
                <li key={name} className="relative">
                  {href !== undefined ? (
                    <Link
                      href={href}
                      className={cn(
                        "flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                        "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-900/5",
                        "dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10",
                        isActive && "bg-neutral-900/5 text-neutral-900 dark:bg-white/10 dark:text-white"
                      )}
                    >
                      {name}
                    </Link>
                  ) : (
                    <button
                      onMouseEnter={() => setOpenDropdown(name)}
                      onClick={() => setOpenDropdown(isOpen ? null : name)}
                      className={cn(
                        "flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                        "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-900/5",
                        "dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10",
                        (isActive || isOpen) && "bg-neutral-900/5 text-neutral-900 dark:bg-white/10 dark:text-white"
                      )}
                    >
                      {name}
                      <AnimatedChevron isOpen={isOpen} />
                    </button>
                  )}

                  {/* Dropdown Panel */}
                  {Dropdown && isOpen && (
                    <div
                      className={cn(
                        "absolute top-full mt-3",
                        wide
                          ? "fixed left-0 right-0 mx-auto px-4 lg:px-10"
                          : "left-1/2 -translate-x-1/2",
                        "dropdown-enter"
                      )}
                      style={wide ? { top: "calc(56px + 12px)" } : undefined}
                    >
                      <div className={cn(
                        "overflow-hidden border border-neutral-200 bg-white shadow-xl dark:border-white/10 dark:bg-neutral-950",
                        wide ? "rounded-[20px]" : "rounded-[20px]"
                      )}>
                        <Dropdown />
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Theme toggle + CTAs */}
        <div className="hidden grow basis-0 items-center justify-end gap-2 lg:flex">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
              "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100",
              "dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/10"
            )}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <div className="mx-1 h-4 w-px bg-neutral-200 dark:bg-white/10" />

          <Link
            href="/contact"
            className={cn(
              "flex h-8 items-center rounded-lg border px-4 text-sm font-medium transition-all",
              "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 shadow-sm",
              "dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
            )}
          >
            Contact us
          </Link>
          <Link
            href="/get-started"
            className={cn(
              "flex h-8 items-center rounded-lg border px-4 text-sm font-medium transition-all shadow-sm",
              "border-black bg-black text-white hover:bg-neutral-800",
              "dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-100"
            )}
          >
            Get started
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggle}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="flex items-center justify-center rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
              <span className={cn("h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 origin-center", mobileOpen && "translate-y-[6.5px] rotate-45")} />
              <span className={cn("h-[1.5px] w-5 rounded-full bg-current transition-all duration-300", mobileOpen && "opacity-0 scale-x-0")} />
              <span className={cn("h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 origin-center", mobileOpen && "-translate-y-[6.5px] -rotate-45")} />
            </div>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
