import { InPageLink } from "@/components/InPageLink";
import { site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant/15 bg-transparent pt-16 sm:pt-24 pb-8">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr] xl:grid-cols-[2fr_1fr_1fr] lg:gap-8">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start max-w-sm">
            <InPageLink href="#hero" className="inline-block">
              <img src={site.brand.logoSrc} alt={site.brand.logoAlt} className="h-12 w-auto object-contain sm:h-[3.5rem]" />
            </InPageLink>
            <p className="mt-5 text-[1.1rem] leading-8 text-body-muted">
              {site.footer.blurb}
            </p>
            
            {/* Social Icons */}
            <div className="mt-8 flex gap-3">
              <a 
                href={site.footer.social.instagram}
                aria-label={site.ui.instagramLabel} 
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-on-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href={site.footer.social.facebook}
                aria-label={site.ui.facebookLabel} 
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-on-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:pl-8">
            <h4 className="font-serif text-[1.3rem] font-medium text-foreground mb-6">{site.ui.footerMenuTitle}</h4>
            <nav aria-label="Footer" className="flex flex-col gap-4">
              {site.nav.map(({ href, label }) => (
                <InPageLink
                  key={href}
                  href={href}
                  className="relative w-fit pb-1 text-[1.05rem] text-body-muted transition-all duration-300 hover:text-primary after:absolute after:bottom-0 after:block after:h-[1.5px] after:bg-primary after:transition-all after:duration-300 after:left-1/2 after:w-0 hover:after:left-0 hover:after:w-full"
                >
                  {label}
                </InPageLink>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-[1.3rem] font-medium text-foreground mb-6">{site.ui.footerContactTitle}</h4>
            <ul className="flex flex-col gap-5 text-[1.05rem] text-body-muted">
              
              <li className="flex items-start gap-4 group">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span className="flex-1 mt-0.5 leading-7">
                  {site.contact.addressLines.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < site.contact.addressLines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </span>
              </li>

              <li className="flex items-center gap-4 group">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <a href={`tel:${site.contact.phoneTel}`} className="transition-colors hover:text-primary">
                  {site.contact.phoneDisplay}
                </a>
              </li>

              {site.contact.email.trim() ? (
                <li className="flex items-center gap-4 group">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-primary">
                    {site.contact.email}
                  </a>
                </li>
              ) : null}

            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 sm:mt-24 border-t border-outline-variant/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[0.95rem] text-body-muted/70">
          <p>
            &copy; {new Date().getFullYear()} {site.brand.name}. {site.ui.copyrightReserved}
          </p>
          <p>
            {site.ui.copyrightTagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
