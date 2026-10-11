import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2>Building since 2019 — from business to backends.</h2>
            <p>
              Seven-plus years at bigbasket: business development, technical
              operations, then engineering ownership of real-time platforms.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-[var(--line)]">
          {profile.experience.map((job, index) => (
            <Reveal
              key={`${job.company}-${job.role}`}
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <article className="grid gap-5 border-b border-[var(--line)] py-9 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-start md:gap-10 md:py-11 lg:gap-14">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[var(--accent-deep)]">
                    {job.period}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.55rem] leading-[1.15] tracking-[-0.03em] md:text-[1.7rem]">
                    {job.role}
                  </h3>
                  <p className="mt-2.5 font-semibold text-[var(--ink-soft)]">
                    {job.company}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-[1.02rem] leading-[1.7] text-[var(--ink-soft)] md:text-[1.05rem]">
                    {job.summary}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="relative pl-5 text-[0.97rem] leading-[1.6] text-[var(--ink)] before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-sm before:bg-[var(--accent)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
