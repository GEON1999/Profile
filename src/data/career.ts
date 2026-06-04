import type { Career } from "@/types";

export const careers: Career[] = [
  {
    id: "purpleyoung",
    company: "Purple Young",
    logo: "/images/career/purpleyoung_logo.png",
    logoWidth: 92,
    logoHeight: 52,
    period: "2025.07 - 현재",
    description:
      "성형 정보 플랫폼. 서비스 본체는 앱이며, 병원(파트너) 웹·자사 어드민·랜딩 웹 등 웹 전반을 1인으로 초기 구축부터 런칭까지 주도.",
    role: "프론트엔드 개발자",
    roleColor: "#7C3AED",
    specialAchievement: "🏆 입사 6개월 만에 사원 → 대리 조기 진급",
    techStack: ["Next.js(App Router)", "TypeScript", "Zustand", "TailwindCSS", "Storybook", "Turborepo"],
    dxTools: ["Claude(Skill-creator)", "Antigravity AI", "Windsurf", "Figma MCP"],
    achievements: [
      {
        title: "협업 · 운영 자율화",
        description: [
          "약관 페이지 내재화 — Notion API + Next.js ISR 기반 정적 렌더링으로 Lighthouse 57 → 88점, LCP 80% 단축(11.5s → 2.3s). 운영팀은 Notion에서 그대로 작성, 약관 수정 시 개발 배포 0회.",
          "GTM 이벤트 추적 관리 시스템 — data-track 선언적 부착 + 도메인별 TS 레지스트리로 이벤트 중앙화, GTM API 서버 액션 호출 관리 페이지 구현. 비개발자가 배포 없이 이벤트 ON/OFF.",
          "운영자용 앱 온보딩 가이드 관리 기능 개발 — 기존 어드민 컴포넌트를 재활용해 디자인 리소스 없이 구현.",
        ]
      },
      {
        title: "AI 활용",
        description: [
          "AI 개발 워크플로우 구축 및 사내 전파 — 사내 컨벤션 맞춤 Claude Skill 자체 구축, figma-design-validator → figma-to-purple-ui → figma-visual-diff 검증 파이프라인 설계. UI·디자인 반영 수일 → 수시간 단축.",
          "디자이너용 Figma 사내 AI 플러그인 — 별도 IDE·MCP 설정 없이 Figma 안에서 디자인 검토·UI 구현 요청 수행. Gemini PoC → Codex CLI + 로컬 브릿지 연동으로 전환.",
        ]
      },
      {
        title: "기술 · 시스템 설계",
        description: [
          "디자인 시스템 모노레포 — Turborepo + pnpm workspace에 21종 공통 컴포넌트(CSS Modules)·Storybook 카탈로그 구축. Style Dictionary로 Figma 토큰 JSON → CSS Variables·JS 상수 자동 변환, GitHub Packages 자동 배포. 공통 UI 수정 포인트 3곳 → 1곳.",
          "병원 파트너 정보 변경 승인 검수 화면 개발 — 의료진·라이선스·영업시간 등 다중 필드의 변경 전/후 비교 UI 구현.",
        ]
      },
      {
        title: "리딩 · 프로덕트 오너십",
        description: [
          "신규 채용 웹 프로젝트 TF 리딩 — 신입 기획자·디자이너와 3인 TF 구성, 기획~임직원 인터뷰~프론트엔드 개발 총괄. AI로 약 9종 웹 프로토타입 제작, 자체 채용 파이프라인 MVP 완성.",
          "B2B 파트너 웹·사내 매니저 어드민·공식 웹사이트 단독 런칭 — 초기 세팅부터 오픈까지 주도, AI 기본법·워터마크 API 등 정책·보안 요구 신속 반영.",
          "모바일 앱 핵심 화면 개발 — 플랜 생성 가이드·마이페이지·본인 인증 등 웹/어드민 외 앱까지 출시 범위 확장.",
        ]
      },
    ]
  },
  {
    id: "playdonut",
    company: "Playdonut",
    logo: "/images/career/playdonut_logo.png",
    logoWidth: 90,
    logoHeight: 90,
    period: "2023.04 - 2024.09",
    description:
      "PC방 런처 기반 e스포츠 토너먼트 플랫폼. 서비스 프론트엔드 개발과 레거시 어드민 마이그레이션 담당.",
    role: "프론트엔드 개발",
    roleColor: "#9F0F0F",
    techStack: ["JavaScript", "TypeScript", "React.js", "Next.js", "Zustand", "TanStack Query"],
    dxTools: ["Github Copilot", "Cursor"],
    achievements: [
      {
        title: "레거시 어드민 모던 프론트엔드 현대화",
        description: [
          "레거시 템플릿 엔진(Trimou)을 Next.js 12(Page Router)로 전면 재구축.",
          "TanStack Query(서버 상태)와 Zustand(클라이언트 상태)로 데이터 관심사 분리 및 패턴 일관화.",
          "신규 기능 배포 주기 단축, SPA 라우팅·상태 캐싱으로 어드민 체감 로딩(LCP) 및 사용 부서 업무 효율 개선.",
        ],
      },
      {
        title: "주요 수행 업무",
        description: [
          "e스포츠 관련 토너먼트 플랫폼 개발",
          "PC방 사용자의 활동을 추적하는 웹 MVP 개발",
          "PC방 런처 어드민 페이지 신규 개발 및 유지보수",
          "포트폴리오 웹 퍼블리싱 및 유지보수 전담",
        ],
      },
    ],
  },
  {
    id: "igs",
    company: "IGS",
    logo: "/images/career/igs_logo.png",
    logoWidth: 100,
    logoHeight: 100,
    period: "2021.05 - 2022.04",
    description:
      "넷마블 게임을 주축으로 다양한 게임사의 운영, CS, QA 서비스를 제공하는 게임 서비스 전문 기업",
    role: "프로젝트 매니저",
    roleColor: "#FF7520",
    achievements: [
      {
        title: "주요 수행 업무",
        description: [
          "프로젝트 일정 및 담당자 업무 관리",
          "데이터 및 VOC 기반 이벤트 / 콘텐츠 기획 및 제안",
          "웹 콘텐츠 기획 및 관리",
          "커뮤니티 및 인게임 데이터, 유저 지표 분석을 통한 인사이트 도출",
          "데이터 지표 기반 게임 내/외 개선 및 전략 수립",
        ],
      },
    ],
  },
];
