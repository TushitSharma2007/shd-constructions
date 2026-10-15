"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-shd-cream/95 backdrop-blur border-b border-shd-line">
      <div className="section-wrap flex items-center justify-between h-[76px]">
        <Logo />

        <nav className="hidden lg:flex items-center gap-9 text-[13px] text-shd-ink/70">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-shd-ink ${
                  active ? "text-shd-ink font-medium" : ""
                }`}
              >
                {link.label}
                {active && <span className="absolute left-0 right-0 -bottom-1 h-px bg-shd-gold" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-px bg-shd-ink mb-1.5" />
          <div className="w-6 h-px bg-shd-ink mb-1.5" />
          <div className="w-6 h-px bg-shd-ink" />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden section-wrap pb-6 flex flex-col gap-4 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={pathname === link.href ? "text-shd-ink font-medium" : "text-shd-ink/70"}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary w-fit" onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
