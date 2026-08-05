import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";

const THEME_SLIDES: CoverflowSlide[] = [
  {
    src: "images/themes_idea/AI.png",
    alt: "Futuristic artificial intelligence neural brain core",
    title: "AI",
    subtitle: "INTEL_CORE // 01",
    meta: [
      { label: "Tag", value: "INTEL_CORE" },
      { label: "Domain", value: "AI / ML / Deep Learning" },
      { label: "Focus", value: "Intelligent Systems" },
    ],
  },
  {
    src: "images/themes_idea/W3.png",
    alt: "Decentralized blockchain network node",
    title: "Web3",
    subtitle: "WEB3_CHAIN // 02",
    meta: [
      { label: "Tag", value: "WEB3_CHAIN" },
      { label: "Domain", value: "DeFi / NFTs / dApps" },
      { label: "Focus", value: "Decentralized Web" },
    ],
  },
  {
    src: "images/themes_idea/Cybersecurity.png",
    alt: "Digital tech security shield",
    title: "Cybersecurity",
    subtitle: "SECURE_SHIELD // 03",
    meta: [
      { label: "Tag", value: "SECURE_SHIELD" },
      { label: "Domain", value: "Threat Detection / Privacy" },
      { label: "Focus", value: "Secure Systems" },
    ],
  },
  {
    src: "images/themes_idea/Healthcare.png",
    alt: "Futuristic medical diagnosis and health graphics",
    title: "Healthcare",
    subtitle: "BIO_METRICS // 04",
    meta: [
      { label: "Tag", value: "BIO_METRICS" },
      { label: "Domain", value: "MedTech / BioInformatics" },
      { label: "Focus", value: "Patient Outcomes" },
    ],
  },
  {
    src: "images/themes_idea/Legal Tech.png",
    alt: "Smart contract scroll and scales of justice",
    title: "Legal Tech",
    subtitle: "LEGAL_TECH // 05",
    meta: [
      { label: "Tag", value: "LEGAL_TECH" },
      { label: "Domain", value: "e-Court / Smart Contracts" },
      { label: "Focus", value: "Access to Justice" },
    ],
  },
  {
    src: "images/themes_idea/Fintech.png",
    alt: "Financial charts and stock market indicators",
    title: "FinTech",
    subtitle: "FIN_SYSTEM // 06",
    meta: [
      { label: "Tag", value: "FIN_SYSTEM" },
      { label: "Domain", value: "Payments / WealthTech" },
      { label: "Focus", value: "Financial Inclusion" },
    ],
  },
  {
    src: "images/themes_idea/Open Innovations.png",
    alt: "Fusion core representing creative innovation ideas",
    title: "Open Innovations",
    subtitle: "OPEN_CORE // 07",
    meta: [
      { label: "Tag", value: "OPEN_CORE" },
      { label: "Domain", value: "Any Emerging Technology" },
      { label: "Focus", value: "Creative Freedom" },
    ],
  },
];

export default function ThemesCarousel() {
  return (
    <div style={{ padding: "0 0 32px 0" }}>
      <CoverflowCarousel
        slides={THEME_SLIDES}
        label="Hackathon Themes"
        cardWidth="clamp(200px, 26vw, 300px)"
        rotate={42}
        depth={0.55}
        fade={0.12}
        showCaption
        showNavigation
        showPagination
      />
    </div>
  );
}
