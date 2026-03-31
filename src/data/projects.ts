import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "PurpleYoung-Admin",
    name: "퍼플영 어드민",
    description:
      "퍼플영 B2B 파트너 및 사내 매니저를 위한 맞춤형 견적·공고 관리 어드민 플랫폼",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Zustand",
      "TailwindCSS",
      "TanStack Query",
    ],
    images: [
      "/images/purple-admin/1.png",
    ],
    period: "2025.07 ~ 현재",
    role: "전담",
    work: [
      {
        title: "B2B/사내 어드민 Full-Cycle 주도",
        description: [
          "초기 환경 세팅부터 컴포넌트 설계, 런칭까지 단독 수행",
        ],
      },
      {
        title: "BFF(Backend For Frontend) 아키텍처 설계",
        description: [
          "클라이언트와 서버 간 데이터 의존성 분리 및 최적화",
        ],
      },
      {
        title: "비즈니스 규제 및 보안 대응",
        description: [
          "AI 기본법 대응 및 이미지 워터마크 API 일괄 적용 등 신속한 로직 구현",
        ],
      },
    ],
    issues: [
      {
        title: "UI 변경에 따른 잦은 API 수정 및 배포 병목 현상",
        description: [
          "기존 API 응답 구조에 UI가 강하게 결합되어 있어, 화면 변경 시 서버 배포가 동반되어야 하는 비효율 발생",
        ],
        techDetails: [
          {
            category: "BFF 패턴 도입: Next.js RSC",
            reasoning: [
              "page.tsx에서 서버 간 병렬 페칭으로 원시 데이터를 호출하는 BFF 패턴 적용",
              "데이터 조합을 프론트엔드로 이관하여 백엔드 의존성 분리",
            ],
          },
        ],
        solution: [
          "Next.js RSC를 활용하여 page.tsx에서 서버 간 병렬 페칭으로 원시 데이터를 호출하는 BFF 패턴 도입",
          "데이터 조합을 프론트엔드로 이관하여 백엔드 의존성을 분리",
        ],
        result: [
          "API 수정 없이 유연한 UI 변경 가능",
          "배포 병목 해소 및 개발 주기 단축",
        ],
      },
      {
        title: "복잡한 포매팅 로직으로 인한 클라이언트 성능 저하 및 번들 비대화",
        description: [
          "클라이언트에서 대량의 데이터를 매핑하고 가공함에 따라 로딩 지연 및 번들 사이즈 증가",
        ],
        techDetails: [
          {
            category: "서버 컴포넌트(RSC) 격리",
            reasoning: [
              "데이터 페칭과 포매팅 로직을 서버 컴포넌트로 격리",
              "loading.tsx를 통한 Suspense 자동 연동으로 스켈레톤 UI 즉각 제공",
            ],
          },
        ],
        solution: [
          "서버 컴포넌트(RSC)로 데이터 페칭과 포매팅 로직을 격리하여 클라이언트 번들 사이즈 대폭 축소",
          "loading.tsx를 통한 Suspense 자동 연동으로 스켈레톤 UI를 즉각 제공",
        ],
        result: [
          "클라이언트 번들 사이즈 대폭 축소",
          "체감 로딩 시간(UX) 획기적 개선",
        ],
      },
      {
        title: "글로벌 타입(Swagger) 에러의 연쇄 전파",
        description: [
          "단일 OpenAPI 스키마 의존으로 인해 한 필드의 변경이 전체 페이지의 타입 에러로 직결",
        ],
        techDetails: [
          {
            category: "페이지 단위 타입 격리(Isolation)",
            reasoning: [
              "클라이언트 컴포넌트가 독립적인 인터페이스(DTO)를 가지도록 설계",
              "스키마 변경 시 영향 범위를 해당 페이지로만 국한",
            ],
          },
        ],
        solution: [
          "페이지 단위 타입 격리(Isolation) 적용",
          "클라이언트 컴포넌트가 독립적인 인터페이스(DTO)를 가지도록 설계",
        ],
        result: [
          "스키마 변경 시 영향 범위를 해당 페이지로만 국한시키는 타입 안정성 확보",
        ],
      },
    ],
  },
  {
    id: "PurpleUI",
    name: "purple-ui",
    description:
      "기획, 디자인, 개발 간의 병목을 해결하고 워크플로우를 자동화하는 사내 통합 디자인 시스템",
    technologies: [
      "Claude (Skill-creator)",
      "Figma MCP",
      "Antigravity AI",
      "Windsurf",
      "Storybook",
    ],
    images: [
      "/images/purple-ui/1.png",
    ],
    period: "2025.07 ~ 현재",
    role: "전담",
    work: [
      {
        title: "모노레포 기반 3-Layer 아키텍처 설계",
        description: [
          "원자, 비즈니스 조합, 프로젝트 레이어로 컴포넌트 분리",
        ],
      },
      {
        title: "AI 에이전트 연동 자동화 파이프라인 구축",
        description: [
          "디자인 검증, 코드 생성, 시각 검증의 End-to-End 자동화",
        ],
      },
      {
        title: "점진적 레거시 마이그레이션 전략 적용",
        description: [
          "환경별 패키지 전환 및 Strangler Fig 패턴 도입",
        ],
      },
    ],
    issues: [
      {
        title: "디자인-개발 간 싱크로율 저하 및 반복 구현의 비효율",
        description: [
          "프로젝트마다 디자인 토큰이 미세하게 다르고, 수동 코딩으로 인한 시각적 불일치(Drift) 누적",
        ],
        techDetails: [
          {
            category: "AI 자동화 파이프라인",
            reasoning: [
              "Skill-creator를 활용해 사내 컨벤션에 맞춘 Claude Skill 자체 구축",
              "Figma MCP 및 Antigravity AI를 연동하여 토큰 검증 → 코드 자동 생성 → pixel 비교 자동화 스킬 구현",
            ],
          },
        ],
        solution: [
          "figma-design-validator(토큰 검증) → figma-to-purple-ui(코드 자동 생성) → figma-visual-diff(pixel 비교) 자동화 스킬 구현",
          "Figma MCP 및 Antigravity AI 연동으로 End-to-End 자동화",
        ],
        result: [
          "신규 UI 반영 시간을 수일에서 수시간으로 단축",
          "시각적 불일치(Drift) 제거",
        ],
      },
      {
        title: "다중 어드민 환경에서의 UI 파편화 및 높은 유지보수 비용",
        description: [
          "파트너 및 매니저 어드민에서 동일 컴포넌트를 중복 구현하여 브랜드 일관성 훼손",
        ],
        techDetails: [
          {
            category: "SSOT(Single Source of Truth) 디자인 시스템",
            reasoning: [
              "단일 소스 오브 트루스(SSOT) 역할을 하는 purple-ui 패키지 구축",
              "중복 컴포넌트를 0개로 단일화",
            ],
          },
        ],
        solution: [
          "단일 소스 오브 트루스(SSOT) 역할을 하는 purple-ui 디자인 시스템 패키지 구축",
          "중복 컴포넌트를 0개로 단일화",
        ],
        result: [
          "1인 프론트엔드 체제의 유지보수 리소스 최소화",
          "브랜드 일관성 확보",
        ],
      },
      {
        title: "레거시 시스템의 급격한 디자인 전환 리스크",
        description: [
          "기존 운영 중인 프로덕트에 신규 디자인 시스템을 일괄 적용 시 발생할 수 있는 런타임 에러 우려",
        ],
        techDetails: [
          {
            category: "Strangler Fig 패턴 기반 점진적 교체",
            reasoning: [
              "리스크가 적은 원자 컴포넌트부터 4-Phase로 나누어 점진적 교체",
              "pnpm 훅 기반의 로컬 패키지 Override 전략 적용",
            ],
          },
        ],
        solution: [
          "4-Phase(준비 → 원자 교체 → 비즈니스 UI 추출 → 안정화)로 나누어 점진적 교체 진행",
          "pnpm 훅 기반의 로컬 패키지 Override 전략을 적용하여 개발 환경에서의 실시간 검증 안정성 확보",
        ],
        result: [
          "운영 중단 없이 안전한 디자인 시스템 전환",
          "환경별 실시간 검증으로 품질 보장",
        ],
      },
    ],
  },
  {
    id: "DayShare",
    name: "DayShare",
    description:
      "연인, 동호회, 육아 등 다양한 관계 속에서 함께 일기를 공유할 수 있는 웹",
    technologies: [
      "Next.js",
      "Tailwind",
      "AWS",
      "Flutter",
      "FastAPI",
      "zustand",
      "NextAuth",
    ],
    images: [
      "/images/dayshare/1.png",
      "/images/dayshare/2.png",
      "/images/dayshare/3.png",
      "/images/dayshare/4.png",
      "/images/dayshare/5.png",
    ],
    period: "2024.08 ~ 2025.03",
    role: "personal",
    work: [
      {
        title: "AI 기반 일기 공감 시스템 개발",
        description: ["감정 분석과 키워드 추출로 AI 맞춤 답변 제공"],
      },
      {
        title: "크로스 플랫폼 모바일 앱 개발",
        description: ["Flutter로 단일 코드베이스 모바일 앱 개발"],
      },
      {
        title: "RTR(Refresh Token Rotation) 구현",
        description: ["RT 탈취 시 장기간 악용에 대한 보안 강화"],
      },
    ],
    issues: [
      {
        title: "FCM을 활용한 실시간 알림 기능 구현",
        description: [
          "공유 일기, 일정, 댓글 등 새로운 사용자 활동에 대한 실시간 피드백(알림) 부재",
        ],
        techDetails: [
          {
            category:
              "안정적이고 확장성 높은 실시간 알림 기능 구현을 위해 FCM 도입",
            reasoning: [
              "Google의 신뢰성 높은 인프라를 활용하여 안정적인 알림 전송 보장",
              "멀티 플랫폼(iOS, Android, Web)을 지원하여 크로스 플랫폼 앱에 적합",
              "백엔드에서 간단한 API 호출만으로 특정 사용자에게 타겟팅된 알림 전송 가능",
            ],
          },
        ],
        solution: [
          "FastAPI 백엔드에 SDK를 연동하여 FCM 알림 전송 모듈 구현",
          "이벤트 발생 시, 공유 달력에 소속된 사용자들에게 비동기적으로 알림을 전송하는 로직 구현",
          "사용자별 기기 토큰을 데이터베이스에서 효율적으로 관리하여 정확한 대상에게 알림 전달",
        ],
        result: [
          "유저간 활동 반응을 즉각적으로 확인할 수 있게 되어 핵심 사용자 경험(UX) 개선",
          "향후 다양한 이벤트 기반 알림 기능을 확장할 수 있는 기반 마련",
        ],
      },
      {
        title: "WebSocket 기반 실시간 채팅 기능 구현",
        description: [
          "사용자 간 실시간 소통 및 즉각적인 피드백(채팅) 부재로 인한 상호작용의 어려움",
        ],
        techDetails: [
          {
            category: "백엔드: FastAPI, WebSocket",
            reasoning: [
              "비동기 처리에 강한 FastAPI와 표준 WebSocket을 활용해 실시간 통신의 낮은 지연 및 고성능 확보",
            ],
          },
          {
            category:
              "프론트엔드: Next.js, 브라우저 WebSocket API, TanStack Query",
            reasoning: [
              "복잡한 채팅 UI를 효율적으로 구축",
              "비동기 데이터 관리 로직을 분리하여 코드의 재사용성과 유지보수성을 높임",
            ],
          },
        ],
        solution: [
          "백엔드 ConnectionManager를 통해 다수의 WebSocket 연결을 중앙 관리",
          "특정 채팅방으로 효율적인 메시지 브로드캐스팅을 구현하여 안정적인 통신 보장",
          "채팅방 관리(생성/조회)는 RESTful API를 활용하여 효율적인 API 설계",
          "실제 메시지 교환은 WebSocket으로 분리하여 각 프로토콜의 장점을 극대화",
        ],
        result: [
          "실시간 양방향 소통 채널 구축으로 사용자 상호작용 및 서비스 참여도 증진",
          "WebSocket을 통한 서버 부하 감소 및 빠른 응답 속도 달성",
        ],
      },
      {
        title: "서버 아키텍처 최적화",
        description: [
          "클라이언트-DB 직접 연결로 인한 N+1 쿼리 이슈 & 코드 복잡도 증가 및 보안/확장성 취약",
        ],
        techDetails: [
          {
            category: "API 서버 도입: FastAPI",
            reasoning: [
              "DB 접근 로직 중앙화 및 비즈니스 로직 분리",
              "빠른 개발과 자동 API 문서화 지원",
            ],
          },
          {
            category: "클라우드 인프라: AWS EC2 & RDS MySQL",
            reasoning: [
              "DB 운영 안정성(RDS) 및 유연한 컴퓨팅(EC2) 확보",
              "Free Tier로 초기 비용 감소",
            ],
          },
        ],
        solution: [
          "클라이언트-DB 직접 연결을 FastAPI 백엔드 API 호출 방식으로 전면 개편",
          "ORM 쿼리 최적화 (N+1 해결) 및 서브쿼리 도입으로 DB 접근 효율화",
        ],
        result: [
          "응답 속도 60% 이상 단축 (N+1 쿼리 최적화)",
          "트래픽 처리량 2배 이상 증대 및 시스템 안정성 확보 (서버 리소스 분리)",
          "개발 생산성 및 유지보수성 향상 (명확한 로직 분리)",
        ],
      },
    ],
    github: "https://github.com/GEON1999/Day_Share_renew",
    website: "https://dayshare.site/",
  },
  {
    id: "Pomomon",
    name: "Pomomon",
    description: "AI 페어 프로그래밍으로 완성한 게이미피케이션 뽀모도로 타이머",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "TailwindCSS",
      "Vite",
      "Chrome Extension",
    ],
    images: [
      "/images/pomomon/5.jpg",
      "/images/pomomon/1.jpg",
      "/images/pomomon/2.jpg",
      "/images/pomomon/3.jpg",
      "/images/pomomon/4.jpg",
    ],
    period: "2025.06 ~ 2025.06",
    role: "personal",
    work: [
      {
        title: "아키텍처 설계",
        description: [
          "AI와 함께 요구사항을 분석하고, Redux Toolkit을 기반으로 확장성과 유지보수성을 고려한 상태 관리 아키텍처를 신속하게 설계했습니다.",
        ],
      },
      {
        title: "핵심 기능 구현",
        description: [
          "복잡한 비동기 타이머 로직과 데이터 동기화 문제를 AI와 함께 TDD 방식으로 해결하며 코드의 안정성을 확보했습니다.",
        ],
      },
      {
        title: "학습 비용 절감",
        description: [
          "Chrome Extension API와 같이 생소한 기술 스택을 AI의 도움으로 빠르게 학습하고 프로젝트에 즉시 적용하여 개발 병목 현상을 해결했습니다.",
        ],
      },
    ],
    website:
      "https://chromewebstore.google.com/detail/pomomon-%ED%8F%AC%EB%AA%A8%EB%8F%84%EB%A1%9C-%ED%83%80%EC%9D%B4%EB%A8%B8-%ED%8F%AC%EC%BC%93%EB%AA%AC-%EA%B0%80%EC%B1%A0/fgcbmplfejiglnnmfiaimmkkdkejlidg?hl=ko",
  },
  {
    id: "LauncherAdmin",
    name: "LauncherAdmin",
    description: "새로운 버전의 PC방 런처를 관리하는 웹",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "NextAuth",
      "multer",
      "react-hook-form",
      "axios",
      "valtio",
      "TanStack Query",
      "TailwindCSS",
    ],
    images: ["/images/pcl/1.png", "/images/pcl/2.png"],
    period: "2024.05 ~ 2024.09",
    role: "frontend",
    work: [
      {
        title: "퍼블리싱 작업",
        description: ["Tailwind CSS로 Zeplin 시안 반응형 웹 퍼블리싱"],
      },
      {
        title: "Valtio를 활용한 효율적인 상태 관리",
        description: ["Valtio로 실시간 동기화 상태 관리 구현"],
      },
      {
        title: "NextAuth를 활용한 인증 시스템 구현",
        description: ["NextAuth로 로그인 인증 시스템 구현"],
      },
    ],
    issues: [
      {
        title:
          "Valtio를 활용한 전역 상태 관리 시스템 구축 및 아키텍처 최적화",
        description: [
          "컴포넌트 계층 구조가 깊어짐에 따라 상태를 전달하는 prop drilling이 빈번히 발생",
          "컴포넌트 간 의존성↑ 유지보수와 재사용성↓",
        ],
        techDetails: [
          {
            category: "Zustand vs Valtio",
            reasoning: [
              "Valtio는 중첩 상태를 직접 mutate 가능함으로, Form·Table이 많은 백오피스 환경에서 개발 생산성을 높이는 데 더 적합하다고 판단",
            ],
          },
        ],
        solution: [
          "Valtio로 글로벌 상태 관리 시스템 구축, Atomic 패턴 도입으로 필요한 상태만 구독",
        ],
        result: [
          "복잡했던 상태 전파 로직을 단순화하여 신규 기능 개발 속도 증대 및 유지보수 공수 감소",
          "컴포넌트 간 의존성을 분리하여 코드의 재사용성과 테스트 용이성 확보",
          "중앙화된 상태 관리를 통해 데이터 흐름의 예측 가능성을 높여 잠재적 버그 발생률 감소",
        ],
      },
    ],
  },
  {
    id: "Battlepod",
    name: "Battlepod",
    description:
      "각종 게임을 통해 토너먼트를 개최하고 상품을 제공해주는 서비스",
    technologies: [
      "React",
      "GSAP",
      "multer",
      "ngrok",
      "react-hook-form",
      "passport",
      "react-dropzone",
      "valtio",
      "axios",
    ],
    images: [
      "/images/battlepod/1.png",
      "/images/battlepod/2.png",
      "/images/battlepod/3.png",
      "/images/battlepod/4.png",
    ],
    period: "2023.07 ~ 2024.08",
    role: "frontend",
    work: [
      {
        title: "Passport를 활용한 소셜 로그인 기능 구현",
        description: ["카카오·로컬 소셜 로그인 기능 구현"],
      },
      {
        title: "RSO(Riot Sign On) 연동",
        description: ["라이엇 게임즈 OAuth 연동으로 게임 계정 인증 구현"],
      },
      {
        title: "드래그 앤 드롭을 통한 파일 업로드 기능 구현",
        description: ["React Dropzone으로 파일 업로드 구현"],
      },
      {
        title: "기브어웨이 즉시추첨 기능 구현",
        description: ["즉시추첨 기능으로 기브어웨이 UX 개선"],
      },
      {
        title: "PC방 전광판 개발",
        description: ["PC방 전용 전광판 페이지 개발 및 실시간 표시"],
      },
    ],
  },
  {
    id: "Battlepod-Admin",
    name: "Battlepod Admin",
    description: "토너먼트 대회 및 이벤트 관리를 위한 어드민 페이지",
    technologies: [
      "Next.js 12",
      "TypeScript",
      "TanStack Query",
      "passport",
      "MUI",
    ],
    period: "2023.04 ~ 2023.08",
    images: [
      "/images/battlepod-admin/1.JPG",
      "/images/battlepod-admin/2.JPG",
      "/images/battlepod-admin/3.JPG",
      "/images/battlepod-admin/4.JPG",
      "/images/battlepod-admin/5.JPG",
      "/images/battlepod-admin/6.JPG",
      "/images/battlepod-admin/7.JPG",
      "/images/battlepod-admin/8.JPG",
      "/images/battlepod-admin/9.JPG",
      "/images/battlepod-admin/10.JPG",
      "/images/battlepod-admin/11.JPG",
      "/images/battlepod-admin/12.JPG",
      "/images/battlepod-admin/13.JPG",
    ],
    role: "frontend",
    work: [
      {
        title: "이슈 관리",
        description: [
          "JIRA를 활용한 체계적 QA 이슈 관리로 버그 해결 프로세스 효율화",
        ],
      },
      {
        title: "데이터 상태 관리",
        description: ["TanStack Query 도입으로 데이터 상태 관리 향상"],
      },
    ],
    issues: [
      {
        title:
          "프론트엔드 현대화: Trimou에서 Next.js 기반 아키텍처로 전환",
        description: [
          "기존 Trimou 시스템의 구조적 한계로 인한 유지보수성 및 확장성 저하, 개발 속도 지연 발생",
        ],
        techDetails: [
          {
            category: "Next.js 12",
            reasoning: [
              "서버 사이드 렌더링(SSR)/정적 사이트 생성(SSG) 지원",
              "강력한 개발 생태계",
              "파일 시스템 기반 라우팅, 컴포넌트 기반 아키텍처를 통해 성능, 확장성, 개발자 경험(DX) 향상",
            ],
          },
          {
            category: "상태 관리 고도화",
            reasoning: [
              "TanStack Query: 서버 상태 관리 일원화, 데이터 페칭 및 캐싱 로직 표준화",
              "Zustand: 클라이언트 상태 관리 단순화 및 복잡한 상태 로직의 효과적인 분리",
            ],
          },
        ],
        solution: [
          "점진적 마이그레이션 접근법으로 핵심 페이지부터 Next.js 12로 전환",
          "TanStack Query로 데이터 상태 관리 패턴 일관화",
          "Zustand 도입으로 복잡한 상태 로직 분리",
        ],
        result: [
          "코드 유지보수 공수 감소 및 신규 기능 개발 주기 단축 달성",
          "초기 로딩 속도 개선 및 전반적인 페이지 응답성 향상",
          "향후 기능 확장 및 유지보수를 위한 견고한 기술 기반 마련",
        ],
      },
    ],
  },
];
