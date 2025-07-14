"use client";

import { useEffect, useState, useRef, ReactNode, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function useAnimatedIndex({
  totalSlides,
  initialIndex = 0,
  intervalTime = 500000,
  isPaused = false, // 슬라이드 정지 여부 추가
}: {
  totalSlides: number;
  initialIndex?: number;
  intervalTime?: number;
  isPaused?: boolean;
}) {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Intersection Observer 화면 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setSelectedIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, intervalTime);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, [totalSlides, intervalTime, isVisible, isPaused, selectedIndex]);

  const changeIndex = (newIndex: number) => {
    setDirection(newIndex > selectedIndex ? 1 : -1);
    setTimeout(() => setSelectedIndex(newIndex), 10);
  };

  return { selectedIndex, direction, changeIndex, sliderRef };
}

interface SliderWrapperProps {
  children: ReactNode;
  index: number;
  direction: number;
  sliderRef: RefObject<HTMLDivElement>;
}

export function SlideWrapper({
  children,
  index,
  direction,
  sliderRef,
}: SliderWrapperProps) {
  return (
    <div ref={sliderRef}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: direction * 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 300, opacity: 0 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
