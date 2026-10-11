"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { ShareProfile } from "./ShareProfile";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter,color] duration-300 ${
        scrolled || open
          ? "border-b border-[var(--line)] bg-[rgba(244,246,248,0.9)] text-[var(--ink)] backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-black/55 to-transparent text-white"
      }`}
    >
      <div className="container flex h-[4.25rem] items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-[1.1rem] font-bold tracking-[-0.03em]"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex items-baseline gap-0">
            {profile.firstName}
            <span
              className={`ml-[1px] inline-block h-[0.28em] w-[0.28em] translate-y-[-0.05em] rounded-[1px] ${
                onDark ? "bg-[var(--accent)]" : "bg-[var(--accent-deep)]"
              }`}
              aria-hidden="true"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-opacity hover:opacity-100 ${
                onDark ? "opacity-75" : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ShareProfile
            variant={onDark ? "ghost-dark" : "light"}
            label="Share profile"
          />
          <Link
            href="/#contact"
            className={`btn !min-h-10 !px-4 !text-sm ${onDark ? "btn-on-dark" : "btn-primary"}`}
          >
            Hire me
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ShareProfile
            variant={onDark ? "ghost-dark" : "light"}
            label="Share"
          />
          <button
            type="button"
            className="relative h-10 w-10"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
          <span
            className={`absolute left-2 right-2 h-px transition-transform duration-300 ${
              open ? "top-1/2 rotate-45 bg-[var(--ink)]" : `top-[14px] ${onDark ? "bg-[#f4fff8]" : "bg-[var(--ink)]"}`
            }`}
          />
          <span
            className={`absolute left-2 right-2 top-1/2 h-px transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            } ${onDark ? "bg-[#f4fff8]" : "bg-[var(--ink)]"}`}
          />
          <span
            className={`absolute left-2 right-2 h-px transition-transform duration-300 ${
              open ? "top-1/2 -rotate-45 bg-[var(--ink)]" : `top-[26px] ${onDark ? "bg-[#f4fff8]" : "bg-[var(--ink)]"}`
            }`}
          />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--bg-elevated)] text-[var(--ink)] md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-lg font-semibold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="btn btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              Hire me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
