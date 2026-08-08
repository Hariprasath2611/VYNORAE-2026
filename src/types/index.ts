export interface ThemeSlide {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  meta: { label: string; value: string }[];
}

export interface Coordinator {
  id: string;
  name: string;
  role: string;
  avatar: string;
  desc: string;
  contact?: string;
  email?: string;
}

export interface Secretary {
  id: string;
  name: string;
  role: string;
  avatar: string;
  desc: string;
  contact?: string;
  email?: string;
}

export interface SponsorLogo {
  src: string;
  alt: string;
}

export interface CommunitySponsor {
  id: string;
  name: string;
  type?: string;
  logo?: string;
}

export interface JudgingCriterion {
  id: string;
  tag: string;
  title: string;
  weight: number;
  desc: string;
}

export interface TimelineItem {
  stageTag: string;
  stageName: string;
  subNote?: string;
  date: string;
}

export interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

export interface PrizeItem {
  rank: string;
  title: string;
  amount: string;
  trophyImg: string;
  glowClass: string;
  barClass: string;
  featured?: boolean;
  perks: { tag: string; text: string; active?: boolean }[];
}

export interface SpecialAward {
  id: string;
  category: string;
  title: string;
  desc: string;
  reward: string;
  isCert?: boolean;
  strokeColor?: string;
}
