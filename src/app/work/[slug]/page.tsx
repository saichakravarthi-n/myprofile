import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, profile } from "@/data/profile";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export async function generateStaticParams() {
  return profile.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = profile.projects.findIndex((p) => p.slug === slug);
  const next = profile.projects[(index + 1) % profile.projects.length];

  return (
    <article className="pt-[4.25rem]">
      <header className="container pb-10 pt-14 md:pb-14 md:pt-20">
        <Link
          href="/#work"
          className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
        >
          ← All work
        </Link>
        <p className="eyebrow mt-8">
          {project.year} · {project.role}
        </p>
        <h1 className="display mt-4 max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)]">
          {project.name}
        </h1>
        <p className="mt-6 max-w-2xl text-[1.15rem] leading-[1.7] text-[var(--ink-soft)]">
          {project.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Source
          </a>
        </div>
      </header>

      <div
        className="relative mx-auto aspect-[21/9] w-full max-w-[1400px] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.accent} 0%, #12171c 55%, #eef2f5 100%)`,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.45),transparent_45%)]" />
        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white/80 md:bottom-12 md:left-16 md:right-16">
          <p className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em] md:text-3xl">
            {project.name}
          </p>
          <p className="hidden text-sm tracking-[0.16em] uppercase md:block">
            Case study
          </p>
        </div>
      </div>

      <div className="container grid gap-14 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-24">
        <aside className="space-y-8 md:sticky md:top-28 md:self-start">
          <div>
            <p className="eyebrow">Stack</p>
            <ul className="mt-4 space-y-2 text-[var(--ink-soft)]">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Role</p>
            <p className="mt-4 text-[var(--ink-soft)]">{project.role}</p>
          </div>
        </aside>

        <div className="space-y-12">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em]">
              Overview
            </h2>
            <p className="mt-4 text-[1.05rem] leading-[1.75] text-[var(--ink-soft)]">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em]">
              The problem
            </h2>
            <p className="mt-4 text-[1.05rem] leading-[1.75] text-[var(--ink-soft)]">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em]">
              Approach
            </h2>
            <ol className="mt-5 space-y-4">
              {project.approach.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-[family-name:var(--font-display)] text-sm text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.05rem] leading-[1.7] text-[var(--ink-soft)]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em]">
              Outcome
            </h2>
            <ul className="mt-5 space-y-3">
              {project.outcome.map((item) => (
                <li
                  key={item}
                  className="relative pl-5 text-[1.05rem] leading-[1.7] text-[var(--ink)] before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:bg-[var(--accent)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="container border-t border-[var(--line)] py-12 md:py-16">
        <p className="eyebrow">Next project</p>
        <Link
          href={`/work/${next.slug}`}
          className="mt-4 inline-block font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.035em] transition-colors hover:text-[var(--accent)]"
        >
          {next.name} →
        </Link>
      </div>
    </article>
  );
}
