import Link from "next/link";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2>Systems that move data when it matters.</h2>
            <p>
              Production platforms from bigbasket — report engines, microservices,
              and notification pipelines built for scale.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:gap-5">
          {profile.projects.map((project, index) => (
            <Reveal key={project.slug} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid overflow-hidden rounded-[10px] border border-[var(--line)] bg-[var(--bg-elevated)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[rgba(15,159,110,0.35)] hover:shadow-[0_22px_50px_rgba(13,17,22,0.12)] md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]"
              >
                <div
                  className="relative min-h-[148px] overflow-hidden md:min-h-[100%] md:self-stretch"
                  style={{
                    background: `linear-gradient(155deg, ${project.accent} 0%, #111 78%)`,
                  }}
                >
                  <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_55%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-[family-name:var(--font-display)] text-[1.7rem] tracking-[-0.03em] text-white lg:text-[1.85rem]">
                      {project.name}
                    </p>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
                      {project.year}
                    </p>
                  </div>
                </div>

                <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6 md:p-7 lg:p-8">
                  <p className="text-sm font-semibold text-[var(--muted)]">
                    {project.role}
                  </p>
                  <p className="mt-3 text-[1.02rem] leading-[1.65] text-[var(--ink-soft)] md:text-[1.05rem]">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <ul className="stack-list text-sm text-[var(--muted)]">
                      {project.stack.slice(0, 4).map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <span className="shrink-0 text-sm font-bold text-[var(--accent-deep)] transition-colors group-hover:text-[var(--accent)]">
                      Case study →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
