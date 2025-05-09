"use client";

import clsx from "clsx";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { section3Data } from "@/data/sectionData";
import { motion } from "framer-motion";
import Modal from "@/components/UI/skillset-modal";
import RotatingPentagon from "@/components/Animations/rotating-polygon";
import {
  SlideWrapper,
  useAnimatedIndex,
} from "@/components/Animations/slide-animation";

export default function Section3() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const { selectedIndex, direction, changeIndex, sliderRef } = useAnimatedIndex(
    {
      totalSlides: section3Data.skillSets.length,
      isPaused: !!selectedIdx,
    }
  );

  const getAnimation = (
    isMobile: boolean,
    selectedIndex: number,
    totalItems: number
  ) => {
    return isMobile
      ? { x: Math.floor(selectedIndex % (totalItems / 2)) * 120 }
      : { y: selectedIndex * 40 };
  };

  const SkillSetButtons = () => {
    return (
      <div
        className={clsx(
          "relative",
          "grid",
          isMobile ? "grid-flow-row grid-cols-3" : "grid-flow-row"
        )}
      >
        {section3Data.skillSets.map((skillset, index) => (
          <button
            key={skillset.title}
            onClick={() => changeIndex(index)}
            className={clsx(
              "px-4",
              "py-2",
              "h-[40px]",
              "border-shiny-neutral-500",
              isMobile ? "text-sm" : "text-base",
              isMobile
                ? Math.floor(index / (section3Data.skillSets.length / 2)) == 0
                  ? "border-b"
                  : "border-t"
                : "border-l-2",
              isMobile ? "w-[120px]" : "w-fit",
              selectedIndex === index
                ? "text-shiny-yellow-900"
                : "text-shiny-neutral-300"
            )}
          >
            {isMobile ? skillset.subTitle : skillset.title}
          </button>
        ))}
        <motion.div
          className={clsx(
            "border-shiny-yellow-900",
            "absolute",
            isMobile ? "top-[39px]" : "top-0",
            isMobile ? "border-b-2" : "border-l-2",
            isMobile ? "w-[120px]" : "h-[40px]",
            isMobile ? "h-[2px]" : "w-[2px]"
          )}
          animate={getAnimation(
            isMobile,
            selectedIndex,
            section3Data.skillSets.length
          )}
          transition={{ type: "spring", stiffness: 150 }}
        />
      </div>
    );
  };

  return (
    <section
      id="section3"
      className={clsx(
        "h-screen",
        "w-full",
        "relative",
        "flex-center",
        "bg-shiny-neutral-700"
      )}
    >
      <article
        className={clsx(
          "flex-center",
          "w-full",
          isMobile ? "flex-col" : "flex-row",
          "gap-10",
          "w-[1000px]"
        )}
      >
        {/* Title 목록 버튼 */}
        <SkillSetButtons />

        <div
          className={clsx(
            isMobile ? "w-[300px] h-[300px]" : "w-[500px] h-[500px]",
            "flex-center",
            "flex-col"
          )}
        >
          {/* RotatingPentagon */}
          <SlideWrapper
            index={selectedIndex}
            direction={direction}
            sliderRef={sliderRef}
          >
            <RotatingPentagon
              skills={section3Data.skillSets[selectedIndex].skills}
              setSelectedIdx={setSelectedIdx}
            />
          </SlideWrapper>
          <p
            className={clsx(
              "text-xs",
              "text-shiny-neutral-300",
              "text-right",
              "w-full"
            )}
          >
            * Polygon 을 클릭하여 더 자세한 설명을 확인해보세요
          </p>
          {selectedIdx !== null && (
            <Modal
              skills={section3Data.skillSets[selectedIndex].skills}
              triangleIdx={selectedIdx}
              setSelectedIdx={setSelectedIdx}
            />
          )}
          {/* description */}
          <motion.p
            className={clsx(
              "text-shiny-neutral-300",
              "text-center",
              "mt-5",
              "px-4",
              isMobile ? "text-sm" : "text-base"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {section3Data.skillSets[selectedIndex].description}
          </motion.p>
        </div>
      </article>
    </section>
  );
}
