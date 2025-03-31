/**
 * 여러 클래스 이름을 결합하는 유틸리티 함수
 * 조건부 클래스 적용에 유용하게 사용
 */
export function cls(...classnames: string[]) {
  return classnames.filter(Boolean).join(" ");
}
