/**
 * Strategic futures: a single authoritative list of the directions SyncID
 * actualizes. Each is a Canadian challenge read from the ecosystems SyncID
 * knows. No campus split: the district network (research-oriented and
 * pre-commercialization campuses alike) works the full range together.
 * Location specifics live on the District page, not here.
 */

export interface Lane {
  name: string;
  line: string;
}

export const strategicFutures: Lane[] = [
  {
    name: "Sovereign energy and compute",
    line: "Own the electricity and compute substrate that every scaled innovation layer demands, from AI-native to quantum-native.",
  },
  {
    name: "Resilient neighbourhoods",
    line: "The future of living: mixed-use communities that generate their own energy, food, and compute, islandable and self-supporting by design.",
  },
  {
    name: "Facility agriculture and food sovereignty",
    line: "Controlled-environment production that closes import dependency and reclaims spent farmland into regenerative systems.",
  },
  {
    name: "Advanced manufacturing and Industry 4.0",
    line: "Rebuild industrial capacity with robotics, automation, and applied manufacturing research that keep IP and production in Canada.",
  },
  {
    name: "Arctic sovereignty and northern development",
    line: "Dual-use sensing, resilient communications, and energy-compute nodes that serve northern presence and Canadian control.",
  },
  {
    name: "Emerging technologies and quantum computing",
    line: "Position for the next substrate: quantum-class compute and the frontier technologies that will demand even more energy and compute.",
  },
  {
    name: "Health and precision health",
    line: "Care, diagnostics, and longevity ventures designed around Canadian need and Canadian ownership.",
  },
  {
    name: "Methodology and the CITAble Business Index",
    line: "The self-evaluating practice that selects and steers ventures across every future, so the network proves itself as it grows.",
  },
];
