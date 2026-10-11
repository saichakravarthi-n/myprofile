import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-black text-[#f7f7f5]">
      <div className="grid min-h-[100svh] lg:grid-cols-[1.15fr_0.85fr]">
        {/* Portrait — face stays clear, no text on top */}
        <div className="relative min-h-[52vh] overflow-hidden lg:min-h-[100svh]">
          <Image
            src="/images/sai-portrait.jpg"
            alt={`${profile.name} — professional portrait`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="hero-photo object-cover object-[48%_12%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,transparent_28%,transparent_70%,rgba(0,0,0,0.45)_100%)] lg:bg-[linear-gradient(90deg,transparent_70%,rgba(0,0,0,0.55)_100%)]" />
        </div>

        {/* Copy panel — separate from the photo */}
        <div className="relative flex items-end px-6 pb-12 pt-10 sm:px-10 lg:items-center lg:px-12 lg:pb-0 lg:pt-20 xl:px-16">
          <div className="hero-copy w-full max-w-md">
            <h1
              className="display text-[clamp(2.6rem,5vw,4.1rem)] leading-[1.05] text-white"
              style={{ animation: "rise-in 1000ms var(--ease-out) both" }}
            >
              <span className="block">Sai</span>
              <span className="block">Chakravarthi</span>
            </h1>
            <p
              className="mt-5 font-[family-name:var(--font-display)] text-[clamp(1.05rem,2vw,1.35rem)] leading-snug tracking-[-0.02em] text-white"
              style={{ animation: "rise-in 1000ms var(--ease-out) 90ms both" }}
            >
              {profile.title} at bigbasket
            </p>
            <p
              className="mt-3 text-[0.98rem] leading-[1.65] text-white/72"
              style={{ animation: "rise-in 1000ms var(--ease-out) 150ms both" }}
            >
              Backend & microservices · real-time data platforms · Python,
              Django, Node.js
            </p>
            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animation: "rise-in 1000ms var(--ease-out) 220ms both" }}
            >
              <Link href="/#work" className="btn btn-on-dark">
                View my work
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-ghost-on-dark"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
