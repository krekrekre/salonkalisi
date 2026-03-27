import Image from "next/image";
import { InPageLink } from "@/components/InPageLink";
import { site } from "@/config/site";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.33334 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-24"
      aria-labelledby="hero-heading"
    >
      {/* ── MOBILE LAYOUT ─────────────────────────────────────────── */}
      <div className="lg:hidden">
        {/* Full-bleed image */}
        <div className="relative h-[65vh] w-full overflow-hidden">
          <Image
            src={site.hero.imageSrc}
            alt={site.hero.imageAltMobile}
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 1px"
            className="object-cover object-top"
          />

          {/* Overlay for text legibility */}
          <div
            className="absolute inset-0 bg-foreground/40"
            aria-hidden
          />

          {/* Salon headline — centered in image */}
          <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
            <h1
              id="hero-heading"
              className="font-serif text-[3rem] font-light leading-[1.12] tracking-[0.06em] text-white text-center uppercase"
            >
              {site.brand.heroTitleLine1}
              <br />
              <em className="not-italic tracking-[0.12em] text-[2rem] font-extralight">{site.brand.heroTitleLine2}</em>
            </h1>
          </div>
        </div>

        {/* Concave wave divider + content */}
        <div className="-mt-14 relative z-10">
          <svg
            viewBox="0 0 390 56"
            preserveAspectRatio="none"
            className="w-full block h-14"
            aria-hidden
          >
            <path
              d="M0,0 Q195,56 390,0 L390,56 L0,56 Z"
              fill="var(--background)"
            />
          </svg>

          <div className="bg-background -mt-px px-8 pt-4 pb-16 text-center flex flex-col items-center">
            <p className="font-serif italic font-light uppercase text-foreground text-[1.55rem] leading-[1.45] tracking-[0.06em] max-w-[22ch]">
              {site.hero.tagline}
            </p>

            <InPageLink
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-12 py-4 text-[0.72rem] font-medium uppercase tracking-[2.5px] text-on-primary transition-all duration-300 hover:bg-primary-dim"
            >
              {site.hero.ctaPrimaryMobile}
            </InPageLink>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (lg+) ──────────────────────────────────── */}
      <div className="hidden lg:block relative overflow-hidden bg-transparent pb-32 pt-16">
        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] xl:gap-20">
            {/* Text */}
            <div className="flex max-w-2xl flex-col items-start justify-self-start text-left z-10 w-full">
              <h1
                id="hero-heading"
                className="animate-fade-in-up font-serif tracking-tight text-foreground"
              >
                <span className="mb-5 block font-serif text-[1.35rem] font-normal leading-snug tracking-tight text-primary lg:mb-6 lg:text-[1.5rem]">
                  {site.brand.name}
                </span>
                <span className="block max-w-[18ch] text-[3.2rem] font-light leading-[1.12] lg:text-[3.4rem] xl:text-[4.2rem]">
                  {site.hero.desktopHeadlineLine1}
                </span>
                <span className="mt-1 block max-w-[18ch] text-[3.2rem] font-normal leading-[1.12] italic text-primary lg:text-[3.4rem] xl:mt-2 xl:text-[4.2rem]">
                  {site.hero.desktopHeadlineLine2}
                </span>
              </h1>

              <p
                className="animate-fade-in-up [animation-delay:150ms] mt-8 max-w-[40ch] text-[1.2rem] leading-8 text-body-muted"
                style={{ opacity: 0 }}
              >
                {site.hero.intro}
              </p>

              <div
                id="book"
                className="animate-fade-in-up [animation-delay:300ms] mt-10 flex w-auto flex-row items-center gap-6"
                style={{ opacity: 0 }}
              >
                <InPageLink
                  href="#contact"
                  className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-[1rem] font-medium text-on-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dim hover:shadow-primary/30"
                >
                  {site.hero.ctaPrimaryDesktop}
                </InPageLink>
                <InPageLink
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 text-[0.95rem] font-medium text-primary transition-all duration-300 hover:text-primary-dim"
                >
                  <span className="relative pb-0.5">
                    {site.hero.ctaSecondary}
                    <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-100 bg-primary/30 transition-transform duration-300 group-hover:scale-x-0" />
                  </span>
                  <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </InPageLink>
              </div>
            </div>

            {/* Image */}
            <div
              className="animate-fade-in [animation-delay:200ms] w-full max-w-[32rem] justify-self-end mx-auto"
              style={{ opacity: 0 }}
            >
              <div className="relative group mx-auto">
                <div
                  className="absolute -inset-3 rounded-[3.5rem] border border-primary/10 transition-colors duration-500 group-hover:border-primary/25"
                  aria-hidden
                />
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[3.25rem] bg-surface-container-low shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)]">
                  <Image
                    src={site.hero.imageSrc}
                    alt={site.hero.imageAltDesktop}
                    fill
                    priority
                    sizes="(max-width: 1023px) 1px, min(32rem, 50vw)"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
