import { useMediaQuery } from "react-responsive";

export function useDevice() {
  // 다음 중 어떤 조건인지 검사
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // 그대로 반환해주기
  return { isDesktop, isTablet, isMobile };
}
