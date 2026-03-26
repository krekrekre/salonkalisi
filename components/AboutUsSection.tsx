import Image from "next/image";
import { site } from "@/config/site";

export function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="scroll-mt-24 bg-transparent py-16 sm:py-24 lg:py-28"
      aria-labelledby="about-us-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="label-md text-eyebrow mb-4 sm:mb-5">{site.about.eyebrow}</p>
            <h2
              id="about-us-heading"
              className="font-serif text-[2.4rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[2.75rem]"
            >
              {site.about.title}
            </h2>
            {site.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`max-w-[58ch] text-base leading-8 text-body-muted sm:text-[1.1rem] ${i === 0 ? "mt-6" : "mt-5"}`}
              >
                {p}
              </p>
            ))}
          </div>

          <div
            className="relative min-h-[380px] overflow-hidden rounded-2xl bg-surface-container-low"
            style={{ boxShadow: "var(--shadow-ambient)" }}
          >
            <Image
              src={site.about.imageSrc}
              alt={site.about.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
