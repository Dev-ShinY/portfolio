"use client";

import { motion, MotionStyle, useAnimation } from "framer-motion";
import { useCallback, useEffect } from "react";
import { useScrollStore } from "@/stores/store";
import { indexTitle } from "@/data/portfolioData";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentIndex, setCurrentIndex } = useScrollStore();
  const controls = useAnimation();
  const isMobile = useIsMobile();
  let scrollTimeout: NodeJS.Timeout | null = null;

  const scrollToSection = (index: number) => {
    setCurrentIndex(index);
    // URL 업데이트
    const hash = `#section${index + 1}`;
    if (window.location.hash !== hash) {
      window.history.pushState(null, "", hash);
    }

    if (isMobile) {
      window.scrollTo({ top: index * window.innerHeight, behavior: "auto" });
    } else {
      controls.start({
        y: -index * window.innerHeight,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    }
  };

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      const isInsideModal =
        event.target instanceof Element &&
        !!event.target.closest("[data-modal]");

      // 모달 스크롤 무시
      if (isInsideModal) {
        return;
      }

      // 디바운스 방지: 여러 번 스크롤 이벤트가 발생하지 않도록
      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const direction = event.deltaY > 0 ? 1 : -1;
        const nextIndex = Math.min(
          Math.max(currentIndex + direction, 0),
          indexTitle.length - 1
        ); // 섹션 범위 제한
        if (nextIndex !== currentIndex) {
          scrollToSection(nextIndex);
        }
      }, 150); // 150ms 간격으로만 한 번의 스크롤 이동 처리
    },
    [currentIndex]
  );

  useEffect(() => {
    const isInsideModal = (event: WheelEvent) =>
      event.target instanceof Element && !!event.target.closest("[data-modal]");

    const handlePreventScroll = (event: WheelEvent) => {
      if (isInsideModal(event)) {
        event.preventDefault();
      }
    };

    if (isMobile) {
      window.addEventListener("wheel", handlePreventScroll, { passive: false });
      return () => window.removeEventListener("wheel", handlePreventScroll);
    }

    scrollToSection(currentIndex);
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex, isMobile]);

  const scrollWrapperStyle: MotionStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
  return (
    <motion.div
      style={isMobile ? {} : scrollWrapperStyle}
      animate={isMobile ? {} : controls}
    >
      {children}
    </motion.div>
  );
}
