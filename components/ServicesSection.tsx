"use client";

import {
  useState,
  useRef,
  useLayoutEffect,
  type ComponentType,
  type SVGAttributes,
  type ReactNode,
} from "react";

import { site, type SiteService } from "@/config/site";

const CENOVNIK_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const CENOVNIK_MOTION_MS_DEFAULT = 480;
const CENOVNIK_MOTION_MS_REDUCED = 200;

/** Measured max-height + rAF so the browser paints start/end values (CSS max-height can otherwise skip transitions). */
function CenovnikCollapse({
  expanded,
  panelId,
  ariaLabelledBy,
  ariaLabel,
  layoutKey,
  children,
}: {
  expanded: boolean;
  panelId: string;
  /** Space-separated heading ids for `role="region"` (unused when tabbed). */
  ariaLabelledBy?: string;
  /** Region label when tabs replace a single heading id. */
  ariaLabel?: string;
  /** Bumps when inner content height may change (e.g. cenovnik tab). */
  layoutKey?: string | number;
  children: ReactNode;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const wasExpandedRef = useRef(false);
  const [maxPx, setMaxPx] = useState(0);
  /** Must match SSR — reading matchMedia in render causes hydration mismatch for reduced-motion users. */
  const [motionMs, setMotionMs] = useState(CENOVNIK_MOTION_MS_DEFAULT);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () =>
      setMotionMs(
        mq.matches ? CENOVNIK_MOTION_MS_REDUCED : CENOVNIK_MOTION_MS_DEFAULT,
      );
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const inner = innerRef.current;
    let raf0 = 0;
    let raf1 = 0;
    const wasExpanded = wasExpandedRef.current;

    if (!expanded) {
      if (wasExpanded && inner) {
        const h = inner.scrollHeight;
        setMaxPx(h);
        raf0 = requestAnimationFrame(() => {
          raf1 = requestAnimationFrame(() => setMaxPx(0));
        });
      } else {
        setMaxPx(0);
      }
      wasExpandedRef.current = false;
      return () => {
        cancelAnimationFrame(raf0);
        cancelAnimationFrame(raf1);
      };
    }

    wasExpandedRef.current = true;
    raf0 = requestAnimationFrame(() => {
      if (innerRef.current) {
        setMaxPx(innerRef.current.scrollHeight);
      }
    });

    return () => cancelAnimationFrame(raf0);
  }, [expanded]);

  useLayoutEffect(() => {
    if (!expanded) return;
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setMaxPx(el.scrollHeight);
    });
    ro.observe(el);
    setMaxPx(el.scrollHeight);
    return () => ro.disconnect();
  }, [expanded, layoutKey]);

  return (
    <div
      style={{
        maxHeight: maxPx,
        overflow: "hidden",
        transition: `max-height ${motionMs}ms ${CENOVNIK_EASE}`,
      }}
    >
      <div
        ref={innerRef}
        id={panelId}
        role="region"
        aria-labelledby={ariaLabelledBy || undefined}
        aria-label={ariaLabel ?? undefined}
        className="border-t border-primary/10 bg-primary-container px-8 pb-8 pt-6 font-sans text-foreground/90 sm:px-10 sm:pb-10 sm:pt-7"
      >
        {children}
      </div>
    </div>
  );
}

function IconFacials({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx={16} cy={16} r={10} stroke="currentColor" strokeWidth={1.7} />
      <circle cx={12.2} cy={14.3} r={1.2} fill="currentColor" />
      <circle cx={19.8} cy={14.3} r={1.2} fill="currentColor" />
      <path
        d="M12.2 19.2c1.1 1.4 2.3 2 3.8 2 1.5 0 2.7-.6 3.8-2"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconThreading({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx={10} cy={11} r={3} stroke="currentColor" strokeWidth={1.7} />
      <circle cx={10} cy={21} r={3} stroke="currentColor" strokeWidth={1.7} />
      <path
        d="M13 13.5L24 5M13 18.5L24 27"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMakeup({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 24l6-6M18.5 13.5l4-4c1-1 1-2.6 0-3.5l-.5-.5c-1-1-2.6-1-3.5 0l-4 4"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
      />
      <path
        d="M6.7 25.3L8.3 23.7C9 23 10 23 10.7 23.7L11.3 24.3C12 25 12 26 11.3 26.7L9.7 28.3L6.7 25.3Z"
        stroke="currentColor"
        strokeWidth={1.7}
      />
    </svg>
  );
}

function IconSkin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 27c-5 0-8-3.6-8-8.5 0-3.5 2.4-6.9 7.2-10.2.5-.3 1.1-.3 1.6 0C21.6 11.6 24 15 24 18.5 24 23.4 21 27 16 27Z"
        stroke="currentColor"
        strokeWidth={1.7}
      />
      <path
        d="M16 12v10M16 18c2.2 0 4.2-1 5.4-2.7"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
      />
    </svg>
  );
}

const SERVICE_ICONS = {
  threading: IconThreading,
  skin: IconSkin,
  facials: IconFacials,
  makeup: IconMakeup,
} as const satisfies Record<
  SiteService["icon"],
  ComponentType<SVGAttributes<SVGSVGElement>>
>;

function servicePanelIds(title: string) {
  const slug = title
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
  return {
    panel: `price-panel-${slug}`,
    heading: `price-heading-${slug}`,
  };
}

export function ServicesSection() {
  const [expandedServiceTitle, setExpandedServiceTitle] = useState<
    string | null
  >(null);
  const [cenovnikTabByService, setCenovnikTabByService] = useState<
    Record<string, number>
  >({});

  const togglePriceList = (title: string) => {
    setExpandedServiceTitle((prev) => (prev === title ? null : title));
  };

  const setCenovnikTab = (serviceTitle: string, index: number) => {
    setCenovnikTabByService((prev) => ({ ...prev, [serviceTitle]: index }));
  };

  const getCenovnikTab = (serviceTitle: string, sectionCount: number) => {
    const raw = cenovnikTabByService[serviceTitle] ?? 0;
    return Math.max(0, Math.min(raw, sectionCount - 1));
  };

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-transparent py-16 sm:py-24 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
        <header className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <p className="label-md text-eyebrow mb-4 sm:mb-5">{site.services.eyebrow}</p>
          <h2
            id="services-heading"
            className="font-serif text-[2.4rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[2.75rem]"
          >
            {site.services.title}
          </h2>
        </header>

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 items-start gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:mt-20">
          {site.servicesList.map((service) => {
            const s = service as SiteService;
            const { title, description, icon, priceList } = s;
            const Icon = SERVICE_ICONS[icon];
            const expanded = expandedServiceTitle === title;
            const { panel: panelId, heading: headingId } =
              servicePanelIds(title);
            const sectionHeadingIds = priceList
              ? priceList.sections.map((_, i) => `${headingId}-sec-${i}`)
              : [];
            const usePriceTabs = priceList
              ? priceList.sections.length > 1
              : false;
            const activeSectionIdx = priceList
              ? getCenovnikTab(title, priceList.sections.length)
              : 0;

            return (
              <li key={title} className="group relative">
              <div className="absolute -inset-[1px] rounded-[1.35rem] bg-gradient-to-b from-primary/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
              {priceList ? (
                <div className="relative flex min-h-[260px] h-full flex-col overflow-hidden rounded-[1.3rem] border border-primary/5 bg-surface-container-highest text-left shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:min-h-[290px] lg:min-h-[310px]">
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-primary/[0.03] transition-transform duration-700 ease-in-out group-hover:scale-[1.8] group-hover:bg-primary/[0.04]" aria-hidden />

                  <button
                    type="button"
                    onClick={() => togglePriceList(title)}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    className="relative z-[1] flex w-full flex-1 cursor-pointer flex-col p-8 text-left sm:p-10 lg:p-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <div className="relative mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-container-low text-primary transition-[transform,background-color,color] duration-500 group-hover:bg-primary group-hover:text-on-primary">
                      <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    <h3 className="font-serif text-[1.65rem] font-semibold leading-tight text-primary sm:text-[1.8rem] transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="mt-4 max-w-[28ch] text-[1.05rem] leading-8 text-body-muted group-hover:text-foreground/80 transition-colors duration-300">
                      {description}
                    </p>
                    <p className="label-md text-eyebrow mt-auto flex items-center justify-center gap-2 pt-8 text-center transition-colors duration-300 group-hover:text-primary">
                      <span>{site.services.priceListToggleLabel}</span>
                      <svg
                        className={`h-4 w-4 shrink-0 text-current transition-transform duration-300 ease-out ${
                          expanded ? "-rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M5 8l5 5 5-5" />
                      </svg>
                    </p>
                  </button>

                  <CenovnikCollapse
                    expanded={expanded}
                    panelId={panelId}
                    layoutKey={
                      usePriceTabs ? activeSectionIdx : sectionHeadingIds[0]
                    }
                    ariaLabelledBy={
                      usePriceTabs ? undefined : sectionHeadingIds.join(" ")
                    }
                    ariaLabel={
                      usePriceTabs
                        ? `${title}, ${site.services.priceListToggleLabel}`
                        : undefined
                    }
                  >
                    {usePriceTabs ? (
                      <>
                        <div
                          role="tablist"
                          aria-label={site.services.priceTabsAriaLabel}
                          className="relative mb-4 flex w-full cursor-default select-none rounded-lg border border-primary/15 bg-foreground/5 p-0.5 shadow-[inset_0_1px_1px_rgba(0,0,0,0.04)] sm:mb-5"
                        >
                          {priceList.sections.map((section, i) => {
                            const selected = i === activeSectionIdx;
                            return (
                              <button
                                key={section.heading}
                                type="button"
                                role="tab"
                                id={`${panelId}-tab-${i}`}
                                aria-selected={selected}
                                aria-controls={`${panelId}-tabpanel`}
                                tabIndex={selected ? 0 : -1}
                                onClick={() => setCenovnikTab(title, i)}
                                className={`relative min-h-9 flex-1 cursor-pointer touch-manipulation rounded-md px-2 py-1.5 text-center font-serif text-xs font-semibold transition-[color,background-color,box-shadow,transform] duration-300 ease-out sm:min-h-9 sm:px-3 sm:py-2 sm:text-sm ${
                                  selected
                                    ? "bg-white text-primary shadow-[0_2px_8px_rgba(0,0,0,0.08),0_0_0_1px_rgba(86,175,180,0.35)]"
                                    : "text-foreground/75 hover:bg-white/35 hover:text-primary"
                                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-primary-container active:scale-[0.98`}
                              >
                                {"tabLabel" in section && section.tabLabel
                                  ? section.tabLabel
                                  : section.heading}
                              </button>
                            );
                          })}
                        </div>
                        <div
                          role="tabpanel"
                          id={`${panelId}-tabpanel`}
                          aria-labelledby={`${panelId}-tab-${activeSectionIdx}`}
                        >
                          <h4
                            id={sectionHeadingIds[activeSectionIdx]}
                            className="mb-3 font-sans text-base font-bold uppercase tracking-wide text-foreground/85 sm:mb-4 sm:text-lg"
                          >
                            {priceList.sections[activeSectionIdx].heading}
                          </h4>
                          <ul className="space-y-3 text-[0.95rem] leading-relaxed sm:space-y-3.5 sm:text-base">
                            {priceList.sections[activeSectionIdx].rows.map(
                              ({ name, amount, currency }) => (
                                <li
                                  key={`${activeSectionIdx}-${name}`}
                                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                                >
                                  <span className="text-foreground/85">
                                    {name}
                                  </span>
                                  <span className="whitespace-nowrap text-right font-extrabold text-foreground">
                                    {amount}{" "}
                                    <span className="font-extrabold lowercase">
                                      {currency}
                                    </span>
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </>
                    ) : (
                      priceList.sections.map((section, secIdx) => (
                        <div key={section.heading}>
                          <h4
                            id={sectionHeadingIds[secIdx]}
                            className="mb-5 font-sans text-lg font-bold uppercase tracking-wide text-foreground/85 sm:mb-6 sm:text-xl"
                          >
                            {section.heading}
                          </h4>
                          <ul className="space-y-3 text-[0.95rem] leading-relaxed sm:space-y-3.5 sm:text-base">
                            {section.rows.map(({ name, amount, currency }) => (
                              <li
                                key={`${secIdx}-${name}`}
                                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                              >
                                <span className="text-foreground/85">{name}</span>
                                <span className="whitespace-nowrap text-right font-extrabold text-foreground">
                                  {amount}{" "}
                                  <span className="font-extrabold lowercase">
                                    {currency}
                                  </span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    )}
                  </CenovnikCollapse>

                  <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-primary opacity-50 transition-[width] duration-500 ease-out group-hover:w-full" aria-hidden />
                </div>
              ) : (
                <article className="relative flex min-h-[260px] h-full flex-col overflow-hidden rounded-[1.3rem] bg-surface-container-highest border border-primary/5 p-8 text-left shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:min-h-[290px] sm:p-10 lg:min-h-[310px] lg:p-12 transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-primary/[0.03] transition-transform duration-700 ease-in-out group-hover:scale-[1.8] group-hover:bg-primary/[0.04]" aria-hidden />

                  <div className="relative mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-container-low text-primary transition-[transform,background-color,color] duration-500 group-hover:bg-primary group-hover:text-on-primary">
                    <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <h3 className="font-serif text-[1.65rem] font-semibold leading-tight text-primary sm:text-[1.8rem] transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-[28ch] text-[1.05rem] leading-8 text-body-muted group-hover:text-foreground/80 transition-colors duration-300">
                    {description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary opacity-50 transition-[width] duration-500 ease-out group-hover:w-full" aria-hidden />
                </article>
              )}
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
