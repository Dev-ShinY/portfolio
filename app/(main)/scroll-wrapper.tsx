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

    controls.start({
      y: -index * window.innerHeight,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  };

  useEffect(() => {
    const isInsideModal = (event: Event) =>
      event.target instanceof Element && !!event.target.closest("[data-modal]");

    // Wheel 전용 핸들러 (desktop or mobile 공통)
    const handleWheelMobile = (event: WheelEvent) => {
      if (isInsideModal(event)) {
        event.preventDefault();
      }
    };

    //Touch 전용 핸들러 (mobile only)
    const handleTouchMoveMobile = (event: TouchEvent) => {
      if (isInsideModal(event)) {
        event.preventDefault();
      }
    };

    const handleWheelDesktop = (event: WheelEvent) => {
      if (isInsideModal(event)) return;

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const direction = event.deltaY > 0 ? 1 : -1;
        const nextIndex = Math.min(
          Math.max(currentIndex + direction, 0),
          indexTitle.length - 1
        );
        if (nextIndex !== currentIndex) {
          scrollToSection(nextIndex);
        }
      }, 150);
    };

    if (isMobile) {
      window.addEventListener("wheel", handleWheelMobile, { passive: false });
      window.addEventListener("touchmove", handleTouchMoveMobile, {
        passive: false,
      });

      return () => {
        window.removeEventListener("wheel", handleWheelMobile);
        window.removeEventListener("touchmove", handleTouchMoveMobile);
      };
    } else {
      scrollToSection(currentIndex);

      window.addEventListener("wheel", handleWheelDesktop, { passive: false });

      return () => window.removeEventListener("wheel", handleWheelDesktop);
    }
  }, [currentIndex, isMobile]);

  const scrollWrapperStyle: MotionStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
  return (
    <motion.div style={isMobile ? {} : scrollWrapperStyle} animate={controls}>
      {children}
    </motion.div>
  );
}
