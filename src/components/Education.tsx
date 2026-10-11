import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container grid items-start gap-12 md:grid-cols-2 md:gap-12 lg:gap-16">
        <Reveal>
          <div className="h-full">
            <p className="eyebrow">Education</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.15] tracking-[-0.035em]">
              Foundations
            </h2>
            <ul className="mt-8 space-y-6 border-t border-[var(--line)] pt-7">
              {profile.education.map((item) => (
                <li key={item.school} className="min-w-0">
                  <p className="text-sm font-semibold text-[var(--muted)]">
                    {item.period}
                  </p>
                  <p className="mt-2 font-semibold leading-snug text-[var(--ink)]">
                    {item.school}
                  </p>
                  <p className="mt-1.5 text-[var(--ink-soft)]">{item.degree}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="h-full">
            <p className="eyebrow">Also</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.15] tracking-[-0.035em]">
              Languages & certs
            </h2>
            <div className="mt-8 grid gap-8 border-t border-[var(--line)] pt-7 sm:grid-cols-2 sm:gap-6">
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                  Languages
                </p>
                <ul className="mt-4 space-y-3">
                  {profile.languages.map((lang) => (
                    <li key={lang.name} className="leading-snug text-[var(--ink-soft)]">
                      <span className="font-semibold text-[var(--ink)]">
                        {lang.name}
                      </span>
                      <span className="text-[var(--muted)]"> · {lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                  Certifications
                </p>
                <ul className="mt-4 space-y-3">
                  {profile.certifications.map((cert) => (
                    <li key={cert} className="leading-snug text-[var(--ink-soft)]">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
