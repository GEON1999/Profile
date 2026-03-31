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
      "1인 프론트엔드 체제에서 4개 이상의 주요 프로덕트 런칭을 주도하고, AI 워크플로우를 사내에 안착시킨 성과를 인정받았습니다.",
    role: "프론트엔드 개발자",
    roleColor: "#7C3AED",
    specialAchievement: "🏆 입사 6개월 만에 대리 조기 진급",
    techStack: ["Next.js(App Router)", "TypeScript", "Zustand", "TailwindCSS", "Storybook"],
    dxTools: ["Claude(Skill-creator)", "Antigravity AI", "Windsurf", "Figma MCP"],
    achievements: [
      {
        title: "AI 에이전트 기반 사내 워크플로우 자체 구축",
        description: [
          "Skill-creator를 활용해 사내 컨벤션에 맞춘 맞춤형 Claude Skill 설계.",
          "Antigravity AI와 Figma MCP를 연동하여 디자인 검증 ➔ 코드 생성 ➔ 시각 검증으로 이어지는 자동화 파이프라인 구축.",
          "프론트엔드 신규 UI 구현 시간을 수일에서 수시간 단위로 획기적으로 단축하고, 개발팀 내 AI 기술 전파 주도."
        ]
      },
      {
        title: "Next.js RSC & BFF 패턴 도입",
        description: [
          "프론트엔드-백엔드 간 배포 강결합 및 스키마 변경 시 발생하는 연쇄 에러 해결을 위해 BFF(Backend For Frontend) 아키텍처 도입.",
          "page.tsx 내 서버 간 병렬 페칭으로 원시 데이터를 호출하고, 프론트엔드 뷰에 맞게 데이터를 포매팅하여 클라이언트 번들 사이즈 최적화 및 체감 로딩 시간(UX) 개선."
        ]
      },
      {
        title: "TF팀 리더 및 주요 프로덕트 런칭",
        description: [
          "자사 랜딩 웹, B2B 파트너 어드민, 사내 매니저 어드민 등 주요 서비스 초기 세팅부터 런칭까지 단독 수행.",
          "신설 채용 TF팀 리더를 맡아 기획, 임직원 인터뷰, 프론트엔드 개발 전 과정을 총괄 진행 중."
        ]
      }
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
      "PC방 런처를 기반으로 e스포츠 토너먼트 대회를 주최하는 플랫폼 서비스",
    role: "프론트엔드 개발",
    roleColor: "#9F0F0F",
    techStack: ["JavaScript", "TypeScript", "React.js", "Next.js", "Zustand", "TanStack Query"],
    dxTools: ["Github Copilot", "Cursor"],
    achievements: [
      {
        title: "주요 수행 업무",
        description: [
          "e스포츠 관련 토너먼트 플랫폼 개발",
          "PC방 사용자의 활동을 추적하는 웹 MVP 개발",
          "PC방 런처 어드민 페이지 신규 개발 및 유지보수",
          "포트폴리오 웹 퍼블리싱 및 유지보수 전담",
          "Code Migration (Trimou → Next.js)",
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
