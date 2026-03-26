"use client";

import { useState, type MouseEvent } from "react";
import { site } from "@/config/site";
import { scrollToHash } from "@/lib/inPageScroll";

const navLinkClass =
  "relative w-fit rounded-sm pb-1 text-body-muted transition-colors duration-300 hover:text-primary after:absolute after:bottom-0 after:left-1/2 after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const navItems = site.nav;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const onInPageAnchorClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    scrollToHash(href);
    closeMenu();
  };

  return (
    <>
      {/*
        Mobile backdrop + drawer MUST NOT live inside the sticky header: backdrop-blur
        on the header creates a containing block, so fixed positioning would be
        relative to the short header bar instead of the viewport (broken overlays).
      */}
      <header className="sticky top-0 z-50 w-full bg-background/80 text-foreground backdrop-blur-xl backdrop-saturate-150">
        <div className="relative mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4 sm:px-10 lg:py-6 lg:pb-6">
          <a
            href="#hero"
            onClick={(e) => onInPageAnchorClick(e, "#hero")}
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <img
              src={site.brand.logoSrc}
              alt={site.brand.logoAlt}
              className="h-10 w-auto sm:h-[3.25rem] object-contain"
            />
          </a>

          <div className="flex items-center gap-4 lg:gap-10">
            <nav className="hidden lg:flex lg:items-center lg:gap-x-8 xl:gap-x-10 lg:text-[0.9375rem] font-medium">
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => onInPageAnchorClick(e, href)}
                  className={navLinkClass}
                >
                  {label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={(e) => onInPageAnchorClick(e, "#contact")}
              className="hidden lg:inline-flex rounded-full bg-primary px-6 py-2.5 text-[0.95rem] font-medium text-on-primary transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-primary-dim hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {site.ui.book}
            </a>

            <button
              type="button"
              className="p-2 -mr-2 text-primary lg:hidden transition-transform"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={isOpen ? site.ui.closeMenu : site.ui.openMenu}
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      ) : null}

      <div
        id="mobile-nav-drawer"
        className={`fixed inset-y-0 right-0 z-[70] flex w-64 max-w-[85vw] flex-col bg-surface-container-highest px-8 py-24 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${isOpen ? "translate-x-0" : "pointer-events-none translate-x-full"}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="absolute top-5 right-5 p-2 text-primary"
          onClick={() => setIsOpen(false)}
          aria-label={site.ui.closeMenu}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col items-end gap-7 text-[1.1rem] font-medium" aria-label={site.ui.mobileNavLabel}>
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => onInPageAnchorClick(e, href)}
              className={navLinkClass}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => onInPageAnchorClick(e, "#contact")}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[0.95rem] font-medium text-on-primary transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-primary-dim hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {site.ui.book}
        </a>
      </div>
    </>
  );
}
