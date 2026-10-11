import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="container flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <p className="text-sm tracking-[-0.01em] text-[var(--muted)]">
          © 2026 {profile.name}
        </p>
        <nav className="flex items-center gap-6 text-sm font-medium text-[var(--ink-soft)]">
          <Link href="/#work" className="transition-colors hover:text-[var(--ink)]">
            Work
          </Link>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--ink)]"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-[var(--ink)]"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
