import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="section bg-[var(--bg-elevated)]">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Stack</p>
            <h2>What I use to ship reliable backends.</h2>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-4 md:grid-cols-3 md:gap-5">
          {profile.skills.map((group, index) => (
            <Reveal
              key={group.category}
              className="h-full"
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <div className="flex h-full flex-col rounded-[10px] border border-[var(--line)] bg-[var(--bg)] p-5 sm:p-6 md:p-7">
                <h3 className="font-[family-name:var(--font-display)] text-xl leading-tight tracking-[-0.02em]">
                  {group.category}
                </h3>
                <ul className="mt-5 flex-1 space-y-0">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[var(--line)] py-3 text-[0.97rem] leading-snug text-[var(--ink-soft)] last:border-0 last:pb-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
