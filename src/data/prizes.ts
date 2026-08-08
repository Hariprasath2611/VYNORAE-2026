import { PrizeItem, SpecialAward } from "@/types";

export const PODIUM_PRIZES: PrizeItem[] = [
  {
    rank: "RANK // 02",
    title: "Runner-up",
    amount: "₹10,000",
    trophyImg: "images/silver_trophy.webp",
    glowClass: "silver-glow",
    barClass: "silver-bar",
    perks: [
      { tag: "ASSET", text: "Runner-up Trophy" },
      { tag: "STATUS", text: "Certificate of Merit" },
      { tag: "GEAR", text: "Tech Goodies Pack" },
    ],
  },
  {
    rank: "RANK // 01",
    title: "First Prize",
    amount: "₹20,000",
    trophyImg: "images/gold_trophy.webp",
    glowClass: "gold-glow",
    barClass: "gold-bar",
    featured: true,
    perks: [
      { tag: "ASSET", text: "Overall Winner Trophy", active: true },
      { tag: "STATUS", text: "Certificate of Merit", active: true },
      { tag: "CAREER", text: "Fast-track Interviews", active: true },
    ],
  },
  {
    rank: "RANK // 03",
    title: "2nd Runner-up",
    amount: "₹5,000",
    trophyImg: "images/bronze_trophy.webp",
    glowClass: "bronze-glow",
    barClass: "bronze-bar",
    perks: [
      { tag: "ASSET", text: "Bronze Trophy" },
      { tag: "STATUS", text: "Certificate of Merit" },
      { tag: "GEAR", text: "Tech Goodies Pack" },
    ],
  },
];

export const SPECIAL_AWARDS: SpecialAward[] = [
  {
    id: "innovation",
    category: "CATEGORY // INNOVATION",
    title: "Best Innovation",
    desc: "Recognizes the most original, creative, and disruptive solution presented at VYNORAE 2026.",
    reward: "🏆 SPECIAL TROPHY",
    strokeColor: "#00ff66",
  },
  {
    id: "design",
    category: "CATEGORY // DESIGN",
    title: "Best UI/UX",
    desc: "Awarded to the team delivering the most polished, intuitive, and premium user interface and experience.",
    reward: "🏆 SPECIAL TROPHY",
    strokeColor: "#00ff66",
  },
  {
    id: "impact",
    category: "CATEGORY // IMPACT",
    title: "Best Social Impact",
    desc: "Honors the project that addresses a meaningful real-world challenge with the greatest potential societal impact.",
    reward: "🏆 SPECIAL TROPHY",
    strokeColor: "#00ff66",
  },
  {
    id: "certificate",
    category: "ELIGIBILITY // ALL",
    title: "Participation Certificate",
    desc: "Every active participant receives a national-level certificate of participation in both digital and hardcopy format.",
    reward: "✅ ALL REGISTERED TEAMS",
    isCert: true,
    strokeColor: "#64c8ff",
  },
];
