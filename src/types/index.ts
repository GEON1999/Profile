// ─── 기본 데이터 타입 ─────────────────────────────

export interface TechDetail {
  category: string;
  reasoning: string[];
}

export interface Issue {
  title: string;
  description: string[];
  techDetails: TechDetail[];
  solution: string[];
  result: string[];
}

export interface WorkItem {
  title: string;
  description: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  images: string[];
  period: string;
  role: "personal" | "frontend" | "fullstack" | string;
  work: WorkItem[];
  issues?: Issue[];
  github?: string;
  website?: string;
}

// ─── 경력 데이터 타입 ─────────────────────────────

export interface Career {
  id: string;
  company: string;
  logo: string;
  logoWidth?: number;
  logoHeight?: number;
  period: string;
  description: string;
  role: string;
  roleColor: string;
  highlights: string[];
}

// ─── About 데이터 타입 ────────────────────────────

export interface AboutSection {
  titleEn: string;
  titleKo: string;
  paragraphs: string[];
  image?: string;
}
