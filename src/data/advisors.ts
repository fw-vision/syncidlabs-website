/**
 * Advisory board and university-collaboration signals for the Network page.
 *
 * Two tiers:
 *  - Tier 1 (advisors): named, confirmed advisors who lend specific authority.
 *  - Tier 2 (universityCollaborations): the research-and-practice community
 *    across a diverse range of universities, named by the touchpoint at each
 *    institution and the practice angle. This is the credibility-of-reach signal.
 *
 * Framing rules: advisors are advisors; collaborators are collaborators. Do not
 * conflate the tiers or overstate involvement. Names appear only with permission.
 * Source of truth: 04_Execute/SyncIDLabs/brand/advisor-roster.md
 */

export interface Advisor {
  name: string;
  role: string;
  /** Ecosystem or institutional tie that grounds the claim. */
  embeddedness: string;
}

export const advisors: Advisor[] = [
  {
    name: "Larry Smith",
    role: "Advisor",
    embeddedness:
      "University of Waterloo economist and long-horizon mentor to founders across the Waterloo region. Anchors SyncID's economic reading of Canada's innovation gaps and its Waterloo engagement.",
  },
  {
    name: "Barry Wylant",
    role: "Advisor",
    embeddedness:
      "Design researcher at the University of Calgary. An authority on ecosystem mapping, systems thinking, and visual strategy, and a close discussant on the Tripartite Ecosystem model as it developed. Advises the design-research and visualization work beneath the district's assessment methodology.",
  },
  {
    name: "Greg Hart",
    role: "Advisor",
    embeddedness:
      "Co-founder and Design Facilitator at InceptionU. A specialist in transformation design and innovation education whose work on experiential, systems-level learning informs how the district develops founders and teams.",
  },
  {
    name: "Diarmuid Nash",
    role: "Advisor",
    embeddedness:
      "Partner at Moriyama Teshima Architects and one of Canada's most recognised architects. Brings civic and cultural landmark experience and multi-generational, sustainable design thinking to a physical innovation district.",
  },
];

/**
 * University Collaborations (Tier 2): the touchpoint at each institution and the
 * practice angle engaged. Credibility of reach. Names appear only with permission;
 * sensitivity firewall applies (do NOT link Erin to Arctic-sovereignty lane or
 * Kimberly to the Indigenous-sovereignty lane in public copy).
 */
export interface UniversityCollaboration {
  university: string;
  contact: string;
  angle: string;
}

export const universityCollaborations: UniversityCollaboration[] = [
  {
    university: "University of Alaska Fairbanks",
    contact: "Erin Trochim",
    angle: "Forest-fire models and Arctic innovation",
  },
  {
    university: "University of British Columbia",
    contact: "Kimberly Yazzie",
    angle: "Indigenous data sovereignty",
  },
  {
    university: "University of Toronto",
    contact: "Matti Siemiatycki",
    angle: "City planning for societal benefit",
  },
  {
    university: "San Francisco Bay University",
    contact: "Shalini Gopalkrishnan",
    angle: "Emerging technologies",
  },
  {
    university: "Golden Gate University",
    contact: "Joaquin Gonzalez III",
    angle: "AI and its impact on society",
  },
  {
    university: "Toronto Metropolitan University",
    contact: "Sam Benvie",
    angle: "Regenerative landscape design",
  },
];

/** Affiliation mark for logo grids and tickers. */
export interface Affiliation {
  id: string;
  name: string;
  /** Default / compact mark (square or icon). Preferred by LogoTicker. */
  logo?: string;
  /** Wide lockup for LogoGrid cells. Falls back to `logo`. */
  logoWide?: string;
  /**
   * Official reverse (white) mark designed for dark grounds. When true, logo
   * components invert via CSS so it reads on the light canvas; the file is
   * not modified.
   */
  reverse?: boolean;
  href?: string;
}

/**
 * University associations: institutions Francis is connected to, as alumnus,
 * doctoral candidate, or through the collaboration network. The breadth is the
 * credibility signal. Source of truth: findcongwang.com/curriculum-vitae.
 */
export const universityAssociations: Affiliation[] = [
  {
    id: "waterloo",
    name: "University of Waterloo",
    logo: "/images/logos/universities/waterloo.svg",
    href: "https://uwaterloo.ca",
  },
  {
    id: "calgary",
    name: "University of Calgary",
    logo: "/images/logos/universities/calgary.svg",
    href: "https://www.ucalgary.ca",
  },
  {
    id: "ggu",
    name: "Golden Gate University",
    logo: "/images/logos/universities/ggu.png",
    href: "https://www.ggu.edu",
  },
  {
    id: "quantic",
    name: "Quantic School of Business and Technology",
    logo: "/images/logos/universities/quantic.png",
    href: "https://quantic.edu",
  },
  {
    id: "oregon-state",
    name: "Oregon State University",
    logo: "/images/logos/universities/oregon-state.svg",
    href: "https://oregonstate.edu",
  },
  {
    id: "tmu",
    name: "Toronto Metropolitan University",
    logo: "/images/logos/universities/tmu.svg",
    href: "https://www.torontomu.ca",
  },
  {
    id: "ubc",
    name: "University of British Columbia",
    logo: "/images/logos/universities/ubc.svg",
    href: "https://www.ubc.ca",
  },
  {
    id: "uoft",
    name: "University of Toronto",
    logo: "/images/logos/universities/uoft.svg",
    reverse: true,
    href: "https://www.utoronto.ca",
  },
  {
    id: "alaska",
    name: "University of Alaska Fairbanks",
    logo: "/images/logos/universities/alaska.png",
    href: "https://www.uaf.edu",
  },
  {
    id: "sfbu",
    name: "San Francisco Bay University",
    logo: "/images/logos/universities/sfbu.png",
    logoWide: "/images/logos/universities/sfbu.jpg",
    href: "https://www.sfbu.edu",
  },
];

/**
 * Communities and institutes engaged with. Official marks used unmodified for
 * nominative association (grayscale via CSS only). Entries without a reliable
 * official file omit `logo` and fall back to the name.
 */
export const communities: Affiliation[] = [
  {
    id: "iftf",
    name: "Institute for the Future",
    logo: "/images/logos/communities/iftf.png",
    href: "https://www.iftf.org",
  },
  {
    id: "pina",
    name: "Permaculture Institute of North America",
    logo: "/images/logos/communities/pina.png",
    href: "https://pina.in",
  },
  {
    id: "lfi",
    name: "Living Futures Institute",
    logo: "/images/logos/communities/lfi.png",
    reverse: true,
    href: "https://living-future.org",
  },
  {
    id: "presencing",
    name: "Presencing Institute",
    logo: "/images/logos/communities/presencing.png",
    href: "https://www.presencing.org",
  },
  {
    id: "velocity",
    name: "Velocity",
    logo: "/images/logos/communities/velocity.png",
    href: "https://velocityincubator.com",
  },
  {
    id: "conrad",
    name: "Conrad School of Entrepreneurship and Business",
    logo: "/images/logos/communities/conrad.png",
    href: "https://uwaterloo.ca/conrad-school",
  },
  {
    id: "yestermorrow",
    name: "Yestermorrow Design Build School",
    logo: "/images/logos/communities/yestermorrow.svg",
    href: "https://yestermorrow.org",
  },
  {
    id: "undp",
    name: "UN Development Programme",
    logo: "/images/logos/communities/undp.svg",
    href: "https://www.undp.org",
  },
  {
    id: "futurity",
    name: "Futurity Systems",
    logo: "/images/logos/communities/futurity.png",
    reverse: true,
    href: "https://www.futurity.systems",
  },
  {
    id: "pcx",
    name: "The Permaculture Crossing",
    logo: "/images/logos/communities/pcx.png",
    href: "https://pcx.earth",
  },
  {
    id: "freedom-farmers",
    name: "Freedom Farmers",
    logo: "/images/logos/communities/freedom-farmers.png",
    href: "https://freedomfarmers.com",
  },
];
