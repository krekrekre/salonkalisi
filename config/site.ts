/**
 * Single source of truth for a new client site.
 * After cloning: edit this file, swap files in /public, set NEXT_PUBLIC_SITE_URL in .env
 */

export type ServiceIconKey = "threading" | "skin" | "facials" | "makeup";

export type PriceRow = {
  name: string;
  amount: string;
  currency: string;
};

export type PriceListSection = {
  heading: string;
  tabLabel?: string;
  rows: readonly PriceRow[];
};

export type SiteService = {
  title: string;
  description: string;
  icon: ServiceIconKey;
  priceList?: {
    sections: readonly PriceListSection[];
  };
};

export type NavItem = { href: string; label: string };

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  alt: string;
};

const publicUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * In-page nav hashes → element ids (smooth scroll). When you add a `site.nav`
 * link like `#pricing`, add a matching entry and put `id="pricing-heading"` on the section.
 */
export const scrollTargetIds: Record<string, string> = {
  hero: "hero",
  services: "services-heading",
  philosophy: "philosophy-heading",
  contact: "contact-heading",
  "about-us": "about-us-heading",
  blog: "blog-heading",
};

export const site = {
  /** Used for metadataBase, sitemap, robots */
  publicUrl,

  /** <html lang=""> */
  htmlLang: "sr",

  seo: {
    title: "Salon lepote Kalisi — Novi Beograd",
    description:
      "Salon lepote Kalisi na Novom Beogradu. Manikir, pedikir, masaže, laserska epilacija, depilacija i šećerna pasta.",
    openGraphLocale: "sr_RS",
  },

  brand: {
    /** Full name — metadata, hero eyebrow, etc. */
    name: "Salon lepote Kalisi",
    /** Mobile hero: first line (uppercase block) */
    heroTitleLine1: "KALISI",
    /** Mobile hero: second line (lighter, under line 1) */
    heroTitleLine2: "Salon lepote",
    /** Logo in header/footer */
    logoSrc: "/logo.png",
    logoAlt: "Salon lepote Kalisi",
  },

  /** Main navigation + footer quick links */
  nav: [
    { href: "#hero", label: "Početna" },
    { href: "#services", label: "Usluge" },
    { href: "#contact", label: "Kontakt" },
    { href: "#about-us", label: "O nama" },
    { href: "#blog", label: "Blog" },
  ] as const satisfies readonly NavItem[],

  ui: {
    book: "Zakaži",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
    mobileNavLabel: "Mobilna navigacija",
    footerMenuTitle: "Meni",
    footerContactTitle: "Kontakt",
    instagramLabel: "Instagram",
    facebookLabel: "Facebook",
    copyrightReserved:
      "Sva prava zadržana.",
    copyrightTagline: "Dizajn sa namerom.",
  },

  hero: {
    imageSrc: "/hero.jpg",
    imageAltMobile:
      "Tretman u salonu lepote Kalisi u Novom Beogradu",
    imageAltDesktop:
      "Relaksirajući tretman lepote u salonu Kalisi",
    /** After wave on mobile */
    tagline: "Nega, preciznost i rezultat koji traje",
    /** Large serif lines on desktop (second line is italic in UI) */
    desktopHeadlineLine1: "Kompletna nega lepote,",
    desktopHeadlineLine2: "na adresi kojoj verujete",
    ctaPrimaryMobile: "Zakaži Termin",
    ctaPrimaryDesktop: "Zakaži Termin",
    ctaSecondary: "Pogledaj Usluge",
    intro:
      "Manikir, pedikir, masaže, laserska epilacija, depilacija i šećerna pasta na Bulevaru Arsenija Čarnojevića u Novom Beogradu — sve na jednom mestu, uz stručan tim i higijenske standarde.",
  },

  footer: {
    blurb:
      "Salon lepote Kalisi na Novom Beogradu — posvećeni smo rezultatima koji izgledaju prirodno i tretmanima prilagođenim vašem ritmu.",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },

  contact: {
    sectionEyebrow: "Stupite u vezu",
    sectionTitle: "Kontakt",
    mapIframeTitle: "Salon lepote Kalisi — mapa lokacije",
    /** Google Maps embed URL */
    mapEmbedSrc:
      "https://www.google.com/maps?q=Bulevar+Arsenija+%C4%8Carnojevi%C4%87a+184%2C+Novi+Beograd%2C+Srbija&output=embed",
    addressLines: [
      "Bulevar Arsenija Čarnojevića 184",
      "Novi Beograd, Srbija",
    ] as const,
    phoneDisplay: "069 656 545",
    phoneTel: "+38169656545",
    email: "kalisi@gmail.com",
    hours: [
      "Radnim danima: 09h–20h",
      "Subota: 09h–16h",
      "Nedelja: neradan dan",
    ] as const,
    formTitle: "Pošaljite nam poruku",
    formLabels: {
      name: "Ime i Prezime",
      namePlaceholder: "Vaše ime",
      email: "Email",
      emailPlaceholder: "vas@email.com",
      phone: "Telefon",
      phonePlaceholder: "+381...",
      message: "Poruka",
      messagePlaceholder: "Vaša poruka...",
      submit: "Pošalji Poruku",
    },
    cards: {
      address: "Adresa",
      phone: "Telefon",
      email: "Email",
      hours: "Radno Vreme",
    },
  },

  services: {
    eyebrow: "Naša ponuda",
    title: "Usluge",
    priceListToggleLabel: "Cenovnik",
    priceTabsAriaLabel: "Izbor dela cenovnika",
  },

  servicesList: [
    {
      title: "Manikir",
      description:
        "Oblikovanje i nega noktiju, klasičan manikir, gel lak ili izlivanje — postojan sjaj i uredan izgled uz pažnju na higijenu.",
      icon: "makeup",
      priceList: {
        sections: [
          {
            heading: "Manikir",
            tabLabel: "Osnovno",
            rows: [
              { name: "Manikir", amount: "1.300", currency: "RSD" },
              { name: "Manikir + lakiranje", amount: "1.800", currency: "RSD" },
              { name: "Aparatni manikir", amount: "1.400", currency: "RSD" },
              { name: "Lakiranje", amount: "800", currency: "RSD" },
              {
                name: "Aparatni manikir + lakiranje",
                amount: "2.000",
                currency: "RSD",
              },
              {
                name: "Aparatni manikir + gellak",
                amount: "2.300",
                currency: "RSD",
              },
              {
                name: "Ojačavanje rubber bazom",
                amount: "2.400",
                currency: "RSD",
              },
              { name: "Ojačavanje gelom", amount: "2.500", currency: "RSD" },
              { name: "Korekcija gela", amount: "2.700", currency: "RSD" },
            ],
          },
          {
            heading: "Nadogradnja, skidanje i dodaci",
            tabLabel: "Nadogradnja",
            rows: [
              {
                name: "Korekcija tuđeg rada",
                amount: "3.000",
                currency: "RSD",
              },
              { name: "Skidanje gela", amount: "1.200", currency: "RSD" },
              { name: "Skidanje gellaka", amount: "1.000", currency: "RSD" },
              {
                name: "Skidanje gela + gellak",
                amount: "2.400",
                currency: "RSD",
              },
              {
                name: "Nadogradnja noktiju (S)",
                amount: "2.600",
                currency: "RSD",
              },
              {
                name: "Nadogradnja noktiju (M)",
                amount: "2.700",
                currency: "RSD",
              },
              {
                name: "Nadogradnja noktiju (L)",
                amount: "2.800",
                currency: "RSD",
              },
              {
                name: "Izlivanje tipsama (S)",
                amount: "2.800",
                currency: "RSD",
              },
              {
                name: "Izlivanje tipsama (M)",
                amount: "2.900",
                currency: "RSD",
              },
              {
                name: "Izlivanje tipsama (L)",
                amount: "3.000",
                currency: "RSD",
              },
              { name: "Ekstremne forme", amount: "5.000", currency: "RSD" },
              { name: "Korekcija po noktu", amount: "+300", currency: "RSD" },
              { name: "Crtanje", amount: "+300", currency: "RSD" },
              { name: "Frenč", amount: "+300", currency: "RSD" },
            ],
          },
        ],
      },
    },
    {
      title: "Pedikir",
      description:
        "Nega stopala, uklanjanje zgrušale kože, oblikovanje noktiju i finish po izboru u prijatnom, higijenski ispravnom ambijentu.",
      icon: "skin",
      priceList: {
        sections: [
          {
            heading: "Pedikir",
            rows: [
              { name: "Aparatni pedikir", amount: "2.300", currency: "RSD" },
              {
                name: "Aparatni pedikir + lakiranje",
                amount: "2.500",
                currency: "RSD",
              },
              {
                name: "Aparatni pedikir + gellak",
                amount: "3.000",
                currency: "RSD",
              },
              { name: "Gellak noge", amount: "2.100", currency: "RSD" },
              {
                name: "Gellak ruke + gellak noge",
                amount: "4.000",
                currency: "RSD",
              },
              {
                name: "Aparatni pedikir + gellak ruke + gellak noge",
                amount: "5.000",
                currency: "RSD",
              },
              {
                name: "Korekcija po noktu",
                amount: "500",
                currency: "RSD",
              },
              {
                name: "Skraćivanje noktiju i obrada zanoktica",
                amount: "1.400",
                currency: "RSD",
              },
            ],
          },
        ],
      },
    },
    {
      title: "Masaže",
      description:
        "Relaksacione i terapeutske masaže za opuštanje mišića, bolju cirkulaciju i osećaj blagostanje — uz prilagođen pritisak i zonu.",
      icon: "facials",
      priceList: {
        sections: [
          {
            heading: "Masaže",
            tabLabel: "Pojedinačne",
            rows: [
              {
                name: "Relax masaža 30min parcijalno",
                amount: "1.600",
                currency: "RSD",
              },
              {
                name: "Relax masaža 60min celo telo",
                amount: "2.700",
                currency: "RSD",
              },
              {
                name: "Terapeutska masaža 30min parcijalno",
                amount: "1.800",
                currency: "RSD",
              },
              {
                name: "Terapeutska 60min celo telo",
                amount: "3.200",
                currency: "RSD",
              },
              {
                name: "Antistres masaža 75min celo telo",
                amount: "3.000",
                currency: "RSD",
              },
              {
                name: "Anticelulit masaža 30min",
                amount: "1.700",
                currency: "RSD",
              },
              { name: "Madero 30min", amount: "1.800", currency: "RSD" },
              {
                name: "Sportska masaža 40min",
                amount: "3.100",
                currency: "RSD",
              },
              { name: "Vacum slim", amount: "2.500", currency: "RSD" },
            ],
          },
          {
            heading: "Paketi",
            tabLabel: "Paketi",
            rows: [
              {
                name: "Paket 10 anticelulit masaža",
                amount: "15.000",
                currency: "RSD",
              },
              { name: "Paket 10 madero", amount: "16.000", currency: "RSD" },
              {
                name: "Paket 5 madero + 5 vacum slim",
                amount: "18.000",
                currency: "RSD",
              },
              {
                name: "Paket 5 anticelulit + 5 vacum slim",
                amount: "16.000",
                currency: "RSD",
              },
              {
                name: "Paket 10 vacum slim",
                amount: "20.000",
                currency: "RSD",
              },
            ],
          },
        ],
      },
    },
    {
      title: "Laserska epilacija",
      description:
        "Savremena laserska tehnologija za dugotrajno uklanjanje dlačica uz plan tretmana i negu kože prilagođenu vašem tipu.",
      icon: "threading",
      priceList: {
        sections: [
          {
            heading: "Laserska epilacija",
            tabLabel: "1. deo",
            rows: [
              { name: "Nausnice", amount: "1.200", currency: "RSD" },
              { name: "Pazuh", amount: "1.700", currency: "RSD" },
              { name: "Brada", amount: "1.400", currency: "RSD" },
              { name: "Zulufi", amount: "1.500", currency: "RSD" },
              { name: "Celo lice", amount: "4.000", currency: "RSD" },
              { name: "Plitke prepone", amount: "2.000", currency: "RSD" },
              { name: "Duboke prepone", amount: "2.500", currency: "RSD" },
              { name: "Brazilka", amount: "4.000", currency: "RSD" },
              { name: "Pola ruku", amount: "2.500", currency: "RSD" },
              { name: "Cele ruke", amount: "4.000", currency: "RSD" },
              { name: "Pola nogu", amount: "4.500", currency: "RSD" },
            ],
          },
          {
            heading: "Laserska epilacija",
            tabLabel: "2. deo",
            rows: [
              { name: "Cele noge", amount: "8.000", currency: "RSD" },
              { name: "Linija stomaka", amount: "1.200", currency: "RSD" },
              { name: "Leđa", amount: "2.000", currency: "RSD" },
              { name: "Celo telo", amount: "15.000", currency: "RSD" },
              { name: "Muške grudi", amount: "4.000", currency: "RSD" },
              { name: "Muški stomak", amount: "3.000", currency: "RSD" },
              { name: "Muška leđa", amount: "6.000", currency: "RSD" },
              { name: "Muške noge", amount: "10.000", currency: "RSD" },
              { name: "Ruke", amount: "6.000", currency: "RSD" },
              { name: "Lice", amount: "5.000", currency: "RSD" },
              { name: "Ramena", amount: "2.000", currency: "RSD" },
            ],
          },
        ],
      },
    },
    {
      title: "Depilacija",
      description:
        "Uklanjanje dlačica toplim voskom ili drugim klasičnim metodama — brzo, precizno i glatka koža duže vreme.",
      icon: "threading",
      priceList: {
        sections: [
          {
            heading: "Depilacija",
            tabLabel: "1. deo",
            rows: [
              { name: "Čupanje obrva", amount: "600", currency: "RSD" },
              { name: "Pazuh", amount: "600", currency: "RSD" },
              { name: "Nausnice", amount: "500", currency: "RSD" },
              { name: "Leđa", amount: "600", currency: "RSD" },
              {
                name: "Ženska linija stomaka",
                amount: "600",
                currency: "RSD",
              },
              { name: "Lice", amount: "600", currency: "RSD" },
              { name: "Ruke", amount: "800", currency: "RSD" },
              { name: "Pola nogu", amount: "1.000", currency: "RSD" },
              { name: "Cele noge", amount: "1.600", currency: "RSD" },
            ],
          },
          {
            heading: "Depilacija",
            tabLabel: "2. deo",
            rows: [
              { name: "Prepone", amount: "800", currency: "RSD" },
              { name: "Brazilka", amount: "1.400", currency: "RSD" },
              { name: "Muški stomak", amount: "800", currency: "RSD" },
              { name: "Muške noge", amount: "2.500", currency: "RSD" },
              { name: "Muške grudi", amount: "800", currency: "RSD" },
              { name: "Muška leđa", amount: "1.500", currency: "RSD" },
              {
                name: "Paket noge + ruke",
                amount: "2.200",
                currency: "RSD",
              },
              {
                name: "Paket noge + ruke + brazilka",
                amount: "3.500",
                currency: "RSD",
              },
              {
                name: "Paket noge + brazilka",
                amount: "2.700",
                currency: "RSD",
              },
            ],
          },
        ],
      },
    },
    {
      title: "Šećerna pasta",
      description:
        "Prirodna depilacija šećernom pastom — pogodna za osetljiviju kožu, uz manje iritacije i uklanjanje dlačica u pravcu rasta.",
      icon: "skin",
      priceList: {
        sections: [
          {
            heading: "Šećerna pasta",
            tabLabel: "1. deo",
            rows: [
              { name: "Nausnice", amount: "600", currency: "RSD" },
              { name: "Lice", amount: "800", currency: "RSD" },
              {
                name: "Ženska linija stomaka",
                amount: "700",
                currency: "RSD",
              },
              { name: "Pazuh", amount: "800", currency: "RSD" },
              { name: "Ruke", amount: "1.200", currency: "RSD" },
              { name: "Pola nogu", amount: "1.300", currency: "RSD" },
              { name: "Cele noge", amount: "2.100", currency: "RSD" },
            ],
          },
          {
            heading: "Šećerna pasta",
            tabLabel: "2. deo",
            rows: [
              { name: "Brazilka", amount: "1.700", currency: "RSD" },
              { name: "Prepone", amount: "1.000", currency: "RSD" },
              { name: "Pola leđa", amount: "800", currency: "RSD" },
              {
                name: "Paket noge + ruke",
                amount: "3.000",
                currency: "RSD",
              },
              {
                name: "Paket noge + brazilka",
                amount: "3.500",
                currency: "RSD",
              },
              {
                name: "Paket noge + ruke + brazilka",
                amount: "4.600",
                currency: "RSD",
              },
            ],
          },
        ],
      },
    },
  ] as const satisfies readonly SiteService[],

  philosophy: {
    imageSrc: "/about.jpg",
    imageAlt: "Enterijer salona lepote Kalisi",
    quote:
      '"Lepota počinje kada se osećate sigurno u rukama onih koji znaju svoj posao."',
    eyebrow: "Naša filozofija",
    title: "Stručnost, higijena, rezultat",
    paragraphs: [
      "U salonu lepote Kalisi radimo kao tim stručnjaka koji poštuje vaše vreme i očekivanja. Svaki tretman planiramo uz jasnu procenu stanja kože, kose ili nokta i korake koji su sigurni i u skladu sa savremenim standardima.",
      "Naš cilj je uredan, prirodan rezultat — bilo da je reč o manikiru i pedikiru, masažama ili uklanjanju dlačica, u zatvorenom, prijatnom ambijentu.",
    ] as const,
    credentialTitle: "Sertifikovani stručnjaci",
    credentialSubtitle: "Ažurirane tehnike i oprema",
  },

  about: {
    eyebrow: "O nama",
    title: "Salon na Novom Beogradu, posvećen vašoj lepoti",
    paragraphs: [
      "Salon lepote Kalisi nalazi se na adresi Bulevar Arsenija Čarnojevića 184 u Novom Beogradu. Kod nas su dostupni manikir i pedikir, masaže, laserska epilacija, klasična depilacija i depilacija šećernom pastom.",
      "Držimo se jasne komunikacije oko trajanja, pripreme i nakon tretmana, kako biste znali šta očekivati i rezultat što duže uživali u svakodnevnom ritmu.",
    ] as const,
    imageSrc: "/owner.jpg",
    imageAlt: "Studio owner portrait",
  },

  blog: {
    eyebrow: "Edukacija",
    title: "Stručni Saveti",
    viewAll: "Pročitaj Sve Članke",
    readMore: "Pročitaj Više",
    listPath: "/blog" as const,
    posts: [
      {
        title: "5 Saveta za Zdraviju Kožu",
        excerpt:
          "Otkrijte osnovne jutarnje rituale koji štite vašu kožu od svakodnevnih spoljašnjih uticaja.",
        image: "/blog-1.jpg",
        alt: "Skincare bottles and products arranged on a table",
      },
      {
        title: "Priprema pred Vama Važan Događaj",
        excerpt:
          "Kako da pripremite kožu za dugotrajan, blistav izgled koji zrači od jutra do mraka.",
        image: "/blog-2.jpg",
        alt: "Makeup palette and brushes laid out on a surface",
      },
      {
        title: "Nega Nakon Tretmana",
        excerpt:
          "Zadržite rezultate uz naš profesionalni vodič za kućnu negu nakon svakog tretmana.",
        image: "/blog-3.jpg",
        alt: "Illustrated woman with a calming facial mask",
      },
    ] as const satisfies readonly BlogPost[],
  },
} as const;
