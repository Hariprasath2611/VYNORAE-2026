import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";

// Unsplash images sized 640×640, cropped to square, themed to each domain
const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=640&fit=crop&q=80&auto=format`;

const THEME_SLIDES: CoverflowSlide[] = [
  {
    src: UNSPLASH("1485827404703-89b55fcc595e"),
    alt: "Humanoid robot representing artificial intelligence and machine learning",
    title: "Artificial Intelligence",
    subtitle: "INTEL_CORE // 01",
    meta: [
      { label: "Tag", value: "INTEL_CORE" },
      { label: "Domain", value: "AI / ML / Deep Learning" },
      { label: "Focus", value: "Intelligent Systems" },
    ],
  },
  {
    src: UNSPLASH("1639762681485-074b7f938ba0"),
    alt: "Abstract blockchain network of glowing nodes and connecting lines",
    title: "Web3 & Blockchain",
    subtitle: "WEB3_CHAIN // 02",
    meta: [
      { label: "Tag", value: "WEB3_CHAIN" },
      { label: "Domain", value: "DeFi / NFTs / dApps" },
      { label: "Focus", value: "Decentralised Web" },
    ],
  },
  {
    src: UNSPLASH("1550751827-4bd374c3f58b"),
    alt: "Digital lock and binary code illustrating cybersecurity defence",
    title: "Cybersecurity",
    subtitle: "SECURE_SHIELD // 03",
    meta: [
      { label: "Tag", value: "SECURE_SHIELD" },
      { label: "Domain", value: "Threat Detection / Privacy" },
      { label: "Focus", value: "Secure Systems" },
    ],
  },
  {
    src: UNSPLASH("1576091160399-112ba8d25d1d"),
    alt: "Futuristic medical lab with glowing digital health data displays",
    title: "Healthcare",
    subtitle: "BIO_METRICS // 04",
    meta: [
      { label: "Tag", value: "BIO_METRICS" },
      { label: "Domain", value: "MedTech / BioInformatics" },
      { label: "Focus", value: "Patient Outcomes" },
    ],
  },
  {
    src: UNSPLASH("1589829085413-56de8ae18c73"),
    alt: "Justice scales on a desk beside a laptop representing legal technology",
    title: "Legal Tech",
    subtitle: "LEGAL_TECH // 05",
    meta: [
      { label: "Tag", value: "LEGAL_TECH" },
      { label: "Domain", value: "e-Court / Smart Contracts" },
      { label: "Focus", value: "Access to Justice" },
    ],
  },
  {
    src: UNSPLASH("1611974789855-9c2a0a7236a3"),
    alt: "Stock market charts and financial data on multiple glowing screens",
    title: "FinTech",
    subtitle: "FIN_SYSTEM // 06",
    meta: [
      { label: "Tag", value: "FIN_SYSTEM" },
      { label: "Domain", value: "Payments / WealthTech" },
      { label: "Focus", value: "Financial Inclusion" },
    ],
  },
  {
    src: UNSPLASH("1522202176988-66273c2fd55f"),
    alt: "Diverse team collaborating around a table with creative ideas",
    title: "Open Innovation",
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
