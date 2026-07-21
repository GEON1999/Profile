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

export interface ProjectImage {
  src: string;
  /** 원본이 작은 UI 캡처 등 축소된 고정 크기로 표시할 이미지 */
  compact?: boolean;
  /** next/image 최적화를 건너뛸 이미지 */
  unoptimized?: boolean;
}

/**
 * personal: 1인 개인 프로젝트
 * frontend: 팀 내 프론트엔드 담당
 * solo: 회사 프로젝트 프론트엔드 단독 전담
 */
export type ProjectRole = "personal" | "frontend" | "solo";

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  images: (string | ProjectImage)[];
  period: string;
  role: ProjectRole;
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
  highlights?: string[];
  
  // 특별 성과 및 세부 내용 표시를 위한 선택적 필드
  specialAchievement?: string;
  techStack?: string[];
  dxTools?: string[];
  achievements?: {
    title: string;
    description: string[];
  }[];
}

// ─── About 데이터 타입 ────────────────────────────

export interface AboutSection {
  titleEn: string;
  titleKo: string;
  paragraphs: string[];
  image?: string;
}
