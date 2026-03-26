import Image from "next/image";
import { site } from "@/config/site";

function ExpertiseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M9 1.8l1.7 1.1 2-.2.8 1.9 1.8 1-.4 2 .9 1.7-1.4 1.4-.2 2-1.9.8-1 1.8-2-.4-1.7.9-1.4-1.4-2-.2-.8-1.9-1.8-1 .4-2-.9-1.7 1.4-1.4.2-2 1.9-.8 1-1.8 2 .4L9 1.8z"
        fill="currentColor"
      />
      <path
        d="M6.1 9.1l1.8 1.8 3.9-4"
        stroke="#ffffff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-24 bg-transparent py-16 sm:py-24 lg:py-28"
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">
          <div className="relative">
            <div
              className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.15rem]"
              style={{ boxShadow: "var(--shadow-ambient)" }}
            >
              <Image
                src={site.philosophy.imageSrc}
                alt={site.philosophy.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <blockquote
              className="relative mx-auto -mt-6 w-[92%] max-w-[19rem] rounded-2xl bg-surface-container-highest px-6 py-5 text-center shadow-[0_4px_12px_rgba(0,0,0,0.07)] sm:absolute sm:-bottom-4 sm:right-[-1rem] sm:mx-0 sm:mt-0 sm:w-[15.5rem] sm:text-left sm:shadow-[0_12px_30px_rgba(0,0,0,0.1)] md:right-[1rem] lg:right-[-1.2rem]"
              aria-label="Brand quote"
            >
              <p className="font-serif text-[1.1rem] italic leading-7 text-primary/85">
                {site.philosophy.quote}
              </p>
            </blockquote>
          </div>

          <div className="max-w-[34rem] text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="label-md text-eyebrow mb-4 sm:mb-5">{site.philosophy.eyebrow}</p>
            <h2
              id="philosophy-heading"
              className="font-serif text-[2.4rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[2.75rem]"
            >
              {site.philosophy.title}
            </h2>
            {site.philosophy.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-[1.08rem] leading-8 text-body-muted ${i === 0 ? "mt-6" : "mt-5"}`}
              >
                {p}
              </p>
            ))}

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/22 text-primary">
                <ExpertiseIcon />
              </span>
              <div className="text-center sm:text-left">
                <p className="text-xl font-semibold leading-tight text-foreground">
                  {site.philosophy.credentialTitle}
                </p>
                <p className="label-md mt-1 text-body-muted/80">
                  {site.philosophy.credentialSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
