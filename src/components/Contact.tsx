import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { ShareProfile } from "./ShareProfile";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="overflow-hidden rounded-[10px] bg-[var(--hero-ink)] px-5 py-10 text-[#f4fff8] sm:px-8 sm:py-12 md:px-12 md:py-16">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[rgba(244,255,248,0.5)]">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.04em]">
              Let’s build something that holds up in production.
            </h2>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-[1.7] text-[rgba(244,255,248,0.68)] md:text-[1.05rem]">
              Open to backend roles, platform work, and conversations with
              engineers, PMs, and founders shipping at scale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-on-dark sm:max-w-none"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="btn btn-ghost-on-dark"
              >
                {profile.phone}
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-on-dark"
              >
                LinkedIn
              </a>
              <ShareProfile variant="ghost-dark" label="Share profile" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
