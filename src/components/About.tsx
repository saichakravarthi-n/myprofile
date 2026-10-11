import Image from "next/image";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section bg-[var(--bg-elevated)]">
      <div className="container grid items-start gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[380px_minmax(0,1fr)]">
        <Reveal className="w-full">
          <div className="relative mx-auto w-full max-w-[380px] overflow-hidden rounded-[10px] bg-black lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/sai-portrait.jpg"
                alt={`${profile.name} — professional portrait`}
                fill
                sizes="(max-width: 1024px) 380px, 380px"
                className="object-cover object-[50%_12%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.7)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-[family-name:var(--font-display)] text-xl tracking-[-0.03em] text-white">
                  {profile.formalName}
                </p>
                <p className="mt-1 text-sm text-white/70">{profile.location}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="min-w-0">
          <Reveal delay={1}>
            <div className="section-head !mb-7">
              <p className="eyebrow">About</p>
              <h2>Engineer who grew up inside the problem space.</h2>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-[1.2rem] leading-[1.65] text-[var(--ink)] md:text-[1.28rem]">
              {profile.about.lead}
            </p>
          </Reveal>

          <div className="mt-5 space-y-5">
            {profile.about.paragraphs.map((paragraph, index) => (
              <Reveal
                key={paragraph.slice(0, 24)}
                delay={((index % 3) + 1) as 1 | 2 | 3}
              >
                <p className="text-[1.02rem] leading-[1.75] text-[var(--ink-soft)] md:text-[1.05rem]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3}>
            <dl className="stat-grid mt-10 border-t border-[var(--line)] pt-8">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.7rem,2.8vw,2.35rem)] tracking-[-0.04em] text-[var(--accent-deep)]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
