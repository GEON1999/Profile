"use client";

// 정적 프리렌더 시 빌드 시점 연도로 고정되는 것을 막기 위해
// 클라이언트에서 현재 연도로 렌더링한다.
export default function CopyrightYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
