import { JudgingCriterion } from "@/types";

export const JUDGING_CRITERIA: JudgingCriterion[] = [
  {
    id: "01",
    tag: "EVALUATION 01 // INNOVATION",
    title: "Innovation",
    weight: 25,
    desc: "Uniqueness of the idea, creative application of emerging tech, and competitive edge over existing solutions.",
  },
  {
    id: "02",
    tag: "EVALUATION 02 // TECHNICAL COMPLEXITY",
    title: "Technical Complexity",
    weight: 25,
    desc: "Architecture robustness, database integration, code quality, APIs, and overall stack integration depth.",
  },
  {
    id: "03",
    tag: "EVALUATION 03 // PROBLEM SOLVING",
    title: "Problem Solving",
    weight: 20,
    desc: "Direct alignment with problem statements and practicality of the implementation approach.",
  },
  {
    id: "04",
    tag: "EVALUATION 04 // UI/UX DESIGN",
    title: "UI/UX Design",
    weight: 10,
    desc: "Ease of navigation, visual premium feel, responsiveness, and accessibility of the interface.",
  },
  {
    id: "05",
    tag: "EVALUATION 05 // PRESENTATION & PITCH",
    title: "Presentation & Pitch",
    weight: 10,
    desc: "Quality of the PPT, clear demo delivery, structure, and ability to handle judge Q&A effectively.",
  },
  {
    id: "06",
    tag: "EVALUATION 06 // SCALABILITY",
    title: "Scalability & Future Scope",
    weight: 10,
    desc: "Feasibility of scaling, cost architecture logic, and business roadmap viability for the solution.",
  },
];
