import { site } from "@/config/site";

type IconProps = { className?: string };

function PinIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 18s6-4.5 6-9a6 6 0 10-12 0c0 4.5 6 9 6 9z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="10" cy="9" r="2" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 3h3l1 3-2 1a11 11 0 006 6l1-2 3 1v3c0 .6-.4 1-1 1A13 13 0 013 4c0-.6.4-1 1-1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <rect
        x="3"
        y="5"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 7l6 4 6-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10 6v4l2.7 1.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function contactInfoCards() {
  return [
    {
      title: site.contact.cards.address,
      Icon: PinIcon,
      lines: [...site.contact.addressLines],
    },
    {
      title: site.contact.cards.phone,
      Icon: PhoneIcon,
      lines: [site.contact.phoneDisplay],
    },
    ...(site.contact.email.trim()
      ? [
          {
            title: site.contact.cards.email,
            Icon: MailIcon,
            lines: [site.contact.email],
          },
        ]
      : []),
    {
      title: site.contact.cards.hours,
      Icon: ClockIcon,
      lines: [...site.contact.hours],
    },
  ] as const;
}

export function ContactSection() {
  const infoCards = contactInfoCards();
  return (
    <section
      className="bg-transparent py-16 sm:py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
        
        <div id="contact" className="scroll-mt-8 mb-12 flex flex-col items-center text-center sm:mb-16">
          <p className="label-md text-eyebrow mb-4 sm:mb-5">{site.contact.sectionEyebrow}</p>
          <h2
            id="contact-heading"
            className="font-serif text-[2.4rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[2.75rem]"
          >
            {site.contact.sectionTitle}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            {infoCards.map(({ title, lines, Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-outline-variant/15 bg-surface-container-highest px-6 py-5 shadow-[0_6px_18px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.95rem] font-semibold leading-tight text-primary">
                      {title}
                    </h3>
                    <div className="mt-2 space-y-1 text-base leading-7 text-body-muted">
                      {lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <article className="rounded-2xl border border-outline-variant/15 bg-surface-container-highest px-6 py-6 shadow-[0_6px_18px_rgba(0,0,0,0.05)] sm:px-8 sm:py-7">
            <h3 className="font-serif text-[2.35rem] font-semibold leading-tight text-primary">
              {site.contact.formTitle}
            </h3>
            <form className="mt-5 space-y-5">
              <div>
                <label htmlFor="name" className="label-md text-body-muted/90">
                  {site.contact.formLabels.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={site.contact.formLabels.namePlaceholder}
                  className="mt-2.5 w-full rounded-[0.75rem] border border-outline-variant/15 bg-surface-container-low px-4 py-3 text-base text-foreground placeholder:text-body-muted/65 outline-none transition focus:border-primary/35"
                />
              </div>
              <div>
                <label htmlFor="email" className="label-md text-body-muted/90">
                  {site.contact.formLabels.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={site.contact.formLabels.emailPlaceholder}
                  className="mt-2.5 w-full rounded-[0.75rem] border border-outline-variant/15 bg-surface-container-low px-4 py-3 text-base text-foreground placeholder:text-body-muted/65 outline-none transition focus:border-primary/35"
                />
              </div>
              <div>
                <label htmlFor="phone" className="label-md text-body-muted/90">
                  {site.contact.formLabels.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={site.contact.formLabels.phonePlaceholder}
                  className="mt-2.5 w-full rounded-[0.75rem] border border-outline-variant/15 bg-surface-container-low px-4 py-3 text-base text-foreground placeholder:text-body-muted/65 outline-none transition focus:border-primary/35"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="label-md text-body-muted/90"
                >
                  {site.contact.formLabels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={site.contact.formLabels.messagePlaceholder}
                  className="mt-2.5 w-full resize-none rounded-[0.75rem] border border-outline-variant/15 bg-surface-container-low px-4 py-3 text-base text-foreground placeholder:text-body-muted/65 outline-none transition focus:border-primary/35"
                />
              </div>
              <button
                type="submit"
                className="label-md mt-1 w-full rounded-[0.6rem] bg-primary px-6 py-3 text-on-primary transition-colors hover:bg-primary-dim"
              >
                {site.contact.formLabels.submit}
              </button>
            </form>
          </article>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-outline-variant/15">
          <iframe
            title={site.contact.mapIframeTitle}
            src={site.contact.mapEmbedSrc}
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
