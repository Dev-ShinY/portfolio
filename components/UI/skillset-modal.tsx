"use client";

import clsx from "clsx";
import Image from "next/image";
import close from "@/assets/icon-close.webp";
import { motion, AnimatePresence } from "framer-motion";
import { Skill } from "@/types/type";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getMappedIcon } from "@/utils/skillMapper";
import useEscapeToClear from "@/hooks/useEscapeToClear";

interface ModalProps {
  skills: Skill[];
  triangleIdx: number;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Modal({
  skills,
  triangleIdx,
  setSelectedIdx,
}: ModalProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedSkillIdx, setSelectedSkillIdx] = useState<number>(triangleIdx);
  const theme = "dark";
  const isMobile = useIsMobile();
  useEscapeToClear(setSelectedIdx);

  return (
    <div
      data-modal
      className={clsx(
        "w-screen",
        "h-screen",
        "absolute",
        "inset-0",
        "z-20",
        "flex-center",
        "bg-black/35",
        "backdrop-blur-md"
      )}
      onClick={() => setSelectedIdx(null)}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, transformOrigin: "center" }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={clsx(
            "bg-shiny-neutral-700/50",
            "rounded-md",
            "h-[60vh]",
            "md:w-[50vw]",
            "w-[80vw]",
            "flex-center",
            "flex-col",
            "shadow-lg",
            "relative"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={close}
            width={isMobile ? 18 : 24}
            height={isMobile ? 18 : 24}
            alt="close"
            className={clsx("cursor-pointer", "absolute", "top-4", "right-4")}
            onClick={() => setSelectedIdx(null)}
          />

          {/* 다른 기술들 리스트 */}
          {isMobile && (
            <div className={clsx("p-4", "text-center")}>
              <h2
                className={clsx(
                  "text-lg",
                  "font-semibold",
                  "text-shiny-yellow-700"
                )}
              >
                {skills[selectedSkillIdx]?.name}
              </h2>
              <p
                className={clsx(
                  "font-extralight",
                  "tracking-tight",
                  "text-sm",
                  "text-shiny-neutral-100"
                )}
              >
                {skills[selectedSkillIdx]?.description}
              </p>
            </div>
          )}

          <div
            className={clsx(
              "grid",
              "grid-cols-2",
              "md:gap-8",
              "gap-y-4",
              "gap-x-8",
              "md:p-14"
            )}
          >
            {skills.map((item: Skill, index: number) => (
              <motion.div
                key={index}
                className={clsx(
                  "flex-center",
                  "gap-4",
                  "cursor-pointer",
                  index % 2 == 0 && "flex-row-reverse text-right"
                )}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredIdx(index)}
                onHoverEnd={() => setHoveredIdx(null)}
                onClick={() => setSelectedSkillIdx(index)}
              >
                <div
                  className={clsx(
                    "flex-center",
                    "p-1",
                    "rounded-full",
                    "shadow-sm",
                    triangleIdx === index ? "border-2" : "border",
                    isMobile ? "h-[60px]" : "h-[80px]",
                    isMobile ? "w-[60px]" : "w-[80px]",
                    "bg-shiny-neutral-700",
                    "border-shiny-yellow-700"
                  )}
                  onClick={() => setSelectedIdx(index)}
                >
                  <img
                    src={`/api/skill-icon?icon=${getMappedIcon(
                      item.name
                    )}&theme=${theme}`}
                    alt={item.name}
                    className={clsx(
                      isMobile ? "w-[24px]" : "w-[30px]",
                      isMobile ? "h-[24px]" : "h-[30px]",
                      "transition-opacity",
                      hoveredIdx === index ? "opacity-20" : "opacity-100"
                    )}
                  />

                  {/* hover 시 나타나는 텍스트 */}
                  <AnimatePresence>
                    {hoveredIdx === index && (
                      <motion.span
                        className={clsx(
                          "absolute",
                          "text-white",
                          "font-medium",
                          "text-sm",
                          "text-center",
                          "w-full",
                          "px-2",
                          hoveredIdx === index
                            ? "text-shiny-neutral-100"
                            : "text-shiny-neutral-300"
                        )}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <span
                  className={clsx(
                    "md:inline",
                    "hidden",
                    "w-[80%]",
                    hoveredIdx === index
                      ? "text-shiny-neutral-100"
                      : "text-shiny-neutral-300",
                    "font-extralight",
                    "tracking-tight"
                  )}
                >
                  {item.description}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
