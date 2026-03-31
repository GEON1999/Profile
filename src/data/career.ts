import type { Career } from "@/types";

export const careers: Career[] = [
  {
    id: "playdonut",
    company: "Playdonut",
    logo: "/images/career/playdonut_logo.png",
    period: "2023.04 - 2024.09",
    description:
      "PC방 런처를 기반으로 e스포츠 토너먼트 대회를 주최하는 플랫폼 서비스",
    role: "프론트엔드 개발",
    roleColor: "#9F0F0F",
    highlights: [
      "e스포츠 관련 토너먼트 플랫폼 개발",
      "PC방 사용자의 활동을 추적하는 웹 MVP 개발",
      "PC방 런처 어드민 페이지 신규 개발 및 유지보수",
      "포트폴리오 웹 퍼블리싱 및 유지보수 전담",
      "Code Migration (Trimou → Next.js)",
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
    highlights: [
      "프로젝트 일정 및 담당자 업무 관리",
      "데이터 및 VOC 기반 이벤트 / 콘텐츠 기획 및 제안",
      "웹 콘텐츠 기획 및 관리",
      "커뮤니티 및 인게임 데이터, 유저 지표 분석을 통한 인사이트 도출",
      "데이터 지표 기반 게임 내/외 개선 및 전략 수립",
    ],
  },
];
