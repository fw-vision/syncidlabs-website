/**
 * Ecosystem critical-analysis copy for Insights.
 * Figures marked toVerify must not be presented as fact until primary-sourced.
 */

export interface GapStat {
  value: string;
  claim: string;
  source: string;
  caveat?: string;
}

export interface RegionalProfile {
  region: string;
  strengths: string;
  leaks: string;
  opportunity: string;
}

export interface ToVerifyItem {
  label: string;
  note: string;
}

/** Verified five-gaps figures (shared with Research). */
export const nationalGaps: GapStat[] = [
  {
    value: "71%",
    claim: "Canadian productivity has fallen to 71% of the US level.",
    source: "Bank of Canada, 2024",
  },
  {
    value: "1.81% vs 2.73%",
    claim: "R&D intensity is 1.81% of GDP, against an OECD average of 2.73%.",
    source: "Statistics Canada, 2024",
  },
  {
    value: "1.2M+",
    claim:
      "Canadians made more than 1.2 million TN professional-work entries into the United States in fiscal 2023.",
    source: "US Department of Homeland Security",
    caveat:
      "These are admissions, not distinct individuals; one person may enter multiple times.",
  },
  {
    value: "44.3%",
    claim: "Foreign firms control 44.3% of Canadian manufacturing assets.",
    source: "Statistics Canada, 2023",
  },
];

export const regionalProfiles: RegionalProfile[] = [
  {
    region: "British Columbia (Vancouver)",
    strengths:
      "Clean tech, digital media, and a dense coastal talent pool with Pacific trade reach.",
    leaks:
      "Growth-stage capital and headquarters often migrate south; scale-ups leave the province before compounding locally.",
    opportunity:
      "Hold clean-tech and digital IP through commercialization stages that today exit the region.",
  },
  {
    region: "Calgary",
    strengths:
      "Energy-systems depth, applied engineering, and a practical commercialization culture tied to infrastructure.",
    leaks:
      "Cyclical capital and a thin deep-tech bench limit translation from energy expertise into adjacent compute and climate lanes.",
    opportunity:
      "Pair energy-systems competence with sovereign compute and grid-adjacent ventures that stay Canadian-owned.",
  },
  {
    region: "Montreal",
    strengths:
      "AI research density, game and creative tech, and francophone institutional strength.",
    leaks:
      "Research excellence outruns venture capture; talent and IP still leave for larger US markets.",
    opportunity:
      "Connect AI research pipelines to Canadian-owned product and infrastructure ventures, not only labs.",
  },
  {
    region: "Toronto",
    strengths:
      "Finance, health, and the largest concentration of startups and corporate R&D in the country.",
    leaks:
      "High cost, fragmented support, and weak keep-rate for late-stage firms mean the region trains talent that scales elsewhere.",
    opportunity:
      "Give Toronto-origin ventures nearby land, labs, and coalitions that keep the value in Ontario as they scale.",
  },
  {
    region: "Waterloo",
    strengths:
      "University pipeline, Communitech, Velocity, Accelerator Centre, and a deep-tech culture rooted in engineering.",
    leaks:
      "Retention-versus-capture: the region generates ventures and talent, then loses a share of the economic value at scale.",
    opportunity:
      "Revive RT Park-class deep-tech commercialization and bind Waterloo talent to a nearby actualization site.",
  },
];

export const waterlooDeepDive = {
  institutions: [
    {
      name: "University of Waterloo",
      line: "Co-op pipeline and engineering depth that feed founders, researchers, and technical operators.",
    },
    {
      name: "Communitech",
      line: "Regional innovation hub that connects startups, corporates, and talent across the corridor.",
    },
    {
      name: "Velocity",
      line: "Campus-rooted founder programs that turn student and graduate ideas into early ventures.",
    },
    {
      name: "Accelerator Centre",
      line: "Company-building support for ventures moving from prototype to market.",
    },
    {
      name: "Research+Technology Park",
      line: "Land and lab adjacency for deep-tech commercialization beside the university.",
    },
  ],
  thesis:
    "Waterloo shows Canada generates strong research and founders. The open question is capture: whether the value compounds at home or leaves at the moment of scale. SyncI&DLabs treats Waterloo as the worked example of that gap, and as a conjunction partner for a nearby actualization site.",
};

/** Unverified figures: show as TO-VERIFY placeholders only. */
export const toVerifyItems: ToVerifyItem[] = [
  {
    label: "GSER ecosystem rankings for Canadian cities",
    note: "Do not publish ranking positions until verified against the primary GSER report for the cited year.",
  },
  {
    label: "Waterloo region decade economic output ($15-25B range)",
    note: "Vault research estimate. Confirm against primary regional economic sources before stating as fact.",
  },
  {
    label: "City-level ecosystem dollar valuations",
    note: "Thin-sourced in current research notes. Replace with cited primary figures or omit.",
  },
];
