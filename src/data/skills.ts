import type { SkillGroup } from "@/types";

/**
 * core: true인 그룹은 이력서 Skills에 명시된 주력 스택이다.
 * 나머지 그룹은 사이트에만 노출되므로, 근거가 되는 프로젝트를 context에 남겨
 * "이력서에는 왜 없는가"가 생기지 않게 한다.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Front-End",
    core: true,
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js (App Router · RSC)",
      "Tailwind CSS",
    ],
  },
  {
    title: "State & Data",
    core: true,
    items: ["Zustand", "TanStack Query"],
  },
  {
    title: "Design System",
    context: "Purple UI — 사내 디자인 시스템 모노레포",
    items: [
      "Turborepo",
      "pnpm workspace",
      "Storybook",
      "Style Dictionary",
      "CSS Modules",
    ],
  },
  {
    title: "Backend & Infra",
    context: "JobLog · DayShare — 개인 프로젝트에서 직접 구축",
    items: ["Supabase (Postgres · Storage · Auth)", "AWS (EC2 · RDS)", "Vercel"],
  },
  {
    title: "AI & DX",
    context: "사내 AI 개발 워크플로우 구축 및 전파",
    items: ["Claude (Skill-creator)", "Figma MCP", "GitHub Actions"],
  },
];
